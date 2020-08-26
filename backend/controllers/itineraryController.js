const Itinerary = require('../models/Itinerary')
const Citie = require('../models/Citie')

const itineraryController = {
    getItineraries: async (req, res) => {
        const lista = await Itinerary.find()
        res.json({ lista: lista })
    },

    postInerary: async (req, res) => {
        var { hashtag, title, profilePic, rating, duration, price, cityId, comments } = req.body
        const newItinerary = new Itinerary({
            hashtag: hashtag,
            title: title,
            profilePic: profilePic,
            rating: rating,
            duration: duration,
            price: price,
            cityId: cityId,
            comments: comments

        })
        newItinerary.save()
            .then(itinerary => res.json({ itinerary }))
            .catch(error => res.json({ error }))
    },
    getItinerary: async (req, res) => {
        const itinerario = await Citie.findOne({ _id: req.params.id })
        console.log(itinerario)
        res.json({
            buscado: itinerario
        })
    }
}

module.exports = itineraryController