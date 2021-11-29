const users = require("../models/user")

exports.signup = (req, res) => {
    const users = new users(req.bod)
    users.save((err, users) => {
        if(err) {
            return res.status(400).json({
                err
            })
        }
        res.json({
            users
        })
    })
}