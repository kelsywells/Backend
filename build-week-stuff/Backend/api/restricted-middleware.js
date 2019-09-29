const jwt = require('jsonwebtoken')
const secrets=require('../api/secrets');

module.exports = (req, res, next) => {
  const token= req.headers.authorization;


  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if(err) {
      res.status(401).json({
        message: 'Not verified!'
      })
    } else {
      req.decodedToken= decodedToken;
      next();
    }
  })

   
  
};

