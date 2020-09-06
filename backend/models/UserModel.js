const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    urlPic: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    country: { type: String },
    favItineraries: { type: Array }
})

const User = mongoose.model('user', userSchema)

module.exports = User