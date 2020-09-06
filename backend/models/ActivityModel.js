const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    activity: { type: Array, required: true },
    itineraryId: { type: mongoose.Schema.ObjectId, ref: 'itinerary' }
})

const Activity = mongoose.model('activity', activitySchema)

module.exports = Activity