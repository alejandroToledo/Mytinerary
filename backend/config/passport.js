const passport = require('passport')
const jwStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/UserModel')

module.exports = passport.use(new jwStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETORKEY
}, (payload, done) => {
    Usuario.findById(payload._doc._id)
        .then(user => {
            if (!user) {
                return done(null, false)
            } else {
                return done(null, user)
            }
        })
        .cath(error => {
            done(error, false)
        })
}))