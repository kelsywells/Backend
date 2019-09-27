const router = require('express').Router();
const bcrypt= require('bcryptjs');
const Users= require('./user-model');
const jwt = require('jsonwebtoken')
const secrets= require('./secrets')

//Uses sessions & cookies/tokens

router.post('/signup', (req, res) => {
  let user = req.body;
console.log(user)
  user.password= bcrypt.hashSync(user.password, 10); 

  Users.add(user)
  .then(saved => {
    // req.session.user = saved;
    const token = generateToken(saved)

    res.status(201).json({
      user: saved, 
      token
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

console.log(email, password)

  Users.findBy({ email })
  .then(user => {

    if (user && bcrypt.compareSync(password, user.password)) {

      const token = generateToken(user);

      console.log('token:', token) 

      // req.session.user = user;
      res.json({
        message: `Welcome, ${user.first_name}!`, token
      });
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  })
  .catch(err => { console.log(err);
    res.status(500).json({error: err});
  });
});

router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.json({
          message: "Unable to logout. Please try again."
        })
      }else {
        res.status(200).json({
          message: "You have been logged out."
        })
      }
    })
  } else {
    res.status(200).json({message: "You have not been logged in."})
  }
})


function generateToken(user) {

  const payload = {
    sub: user.id, 
    username: user.first_name,
  };
  const options = {
    expiresIn: '1d'
    }

  return jwt.sign(payload, secrets.jwtSecret, options) 
}

module.exports = router;
