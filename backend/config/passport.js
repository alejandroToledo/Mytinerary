const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/UserModel')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `estaesmifrasesecreta`
}, (payload, done) => {
    User.findById(payload._doc._id)
        .then(user => {
            if (!user) {
                return done(null, false)
            }
            else {
                console.log('passport ' + process.env.SECRETORKEY)
                return done(null, user)
            }
        })
        .catch(error => {
            return done(error, false)
        })
}))