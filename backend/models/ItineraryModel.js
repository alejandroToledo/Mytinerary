const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    hashtag: { type: Array },
    title: { type: String },
    profilePic: { type: String },
    rating: { type: Number },
    duration: { type: Number },
    price: { type: Number },
    cityId: { type: mongoose.Schema.ObjectId, ref: 'citie' },
    comments: { type: Array },

})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary