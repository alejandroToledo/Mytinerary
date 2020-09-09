const Itinerary = require('../models/ItineraryModel')

const activityController = {
    postActivity: (req, res) => {
        const itinerary = await Itinerary.find({ _id: '5f458798b428af157c84ba73' })
    }

}

module.exports = activityController