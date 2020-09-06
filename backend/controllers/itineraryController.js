const Itinerary = require('../models/ItineraryModel')
const Citie = require('../models/CityModel')

const itineraryController = {
    getItineraries: async (req, res) => {
        const lista = await Itinerary.find()
        res.json({ lista })
    },

    postInerary: async (req, res) => {
        var { hashtag, title, profilePic, rating, duration, price, cityId, comments } = req.body
        const newItinerary = new Itinerary({
            hashtag,
            title,
            profilePic,
            rating,
            duration,
            price,
            cityId,
            comments
        })
        newItinerary.save()
            .then(itinerary => res.json({ itinerary }))
            .catch(error => res.json({ error }))
    },
    getItinerary: async (req, res) => {
        const city = await Citie.findOne({ _id: req.params.id })
        const itineraries = await Itinerary.find({ cityId: req.params.id })
        res.json({
            city,
            itineraries
        })
    }
}

module.exports = itineraryController