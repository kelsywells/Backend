const router = require('express').Router();
const bcrypt= require('bcryptjs');
const Users= require('./user-model');

//Uses sessions & cookies

router.post('/signup', (req, res) => {
  let user = req.body;
console.log(user)
  user.password= bcrypt.hashSync(user.password, 10); 

  Users.add(user)
  .then(saved => {
    req.session.user = saved;

    res.status(201).json(saved);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const { id } = req.params;

console.log(email, password)

  Users.findBy({ id })
  .then(res => {
    const user= res[0]

    if (user && bcrypt.compareSync(password, user.password)) {

      console.log(user) 

      req.session.user = user;
      res.status(200).json({
        message: `Welcome, ${user.email}!`,
      });
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  })
  .catch(err => {
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

module.exports = router;
