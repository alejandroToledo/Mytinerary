const User = require('../models/UserModel')

const userController = {
    postUser: async (req, res) => {
        var { urlPic, username, password, email, firstname, lastname, country, favItineraries } = req.body

        const newUser = new User({
            urlPic,
            username,
            password,
            email,
            firstname,
            lastname,
            country,
            favItineraries
        })
        newUser.save()
            .then(user => {
                res.json({
                    success: true, name: user
                })
            })
            .catch(error => {
                res.json({
                    success: false,
                    error: error
                })
            })
    }
}

module.exports = userController