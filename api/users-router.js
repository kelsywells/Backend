const router = require('express').Router();
const Users= require('./user-model');
const restricted= require('./restricted-middleware')

router.get('/', restricted, (req, res) => {

    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({
            error: "Could not find users", err
        })
    })
})

module.exports= router;