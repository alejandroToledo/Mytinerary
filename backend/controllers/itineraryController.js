const Itinerary = require('../models/ItineraryModel')
const Citie = require('../models/CityModel')
const User = require('../models/UserModel')

const itineraryController = {
    getItineraries: async (req, res) => {
        const lista = await Itinerary.find()
        res.json({ lista })
    },

    postItinerary: async (req, res) => {
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
    },
    likeItinerary: async (req, res) => {
        const { id } = req.body
        const itinerary = await Itinerary.findOneAndUpdate({
            _id: id
        }, {
            $inc: { rating: 1 },

        }, {
            returnNewDocument: true
        })
        const { _id } = req.user
        const usuario = await User.findOneAndUpdate({
            _id
        }, {
            $push: { favItineraries: id }
        }, {
            returnNewDocument: true
        })
    },
    dislikeItinerary: async (req, res) => {
        const { id } = req.body
        const itinerary = await Itinerary.findOneAndUpdate({
            _id: id
        }, {
            $inc: { rating: -1 },

        }, {
            returnNewDocument: true
        })
        const { _id } = req.user
        const user = await User.findOne({
            _id
        })
        const favItineraries = user.favItineraries
        const filterItineraries = favItineraries.filter(itinerary => itinerary !== id)
        const userNewItineraries = await User.findByIdAndUpdate({
            _id
        }, {
            favItineraries: filterItineraries

        }, {
            returnNewDocument: true
        })

    },
    putCommentary: async (req, res) => {
        const { id, commentary } = req.body
        const { _id, urlPic } = req.user
        const itinerary = await Itinerary.findOneAndUpdate({
            _id: id
        }, {
            $push: { comments: { content: commentary, user: _id, userPic: urlPic } }

        }, {
            returnNewDocument: true
        })

        console.log('Este es el controlador para agregar un comentario')
        console.log(itinerary)
        console.log(req.user._id)
    },
    modifyCommentary: async (req, res) => {
        console.log('Este es el controlador para modificar un comentario')
    },
    deleteCommentary: async (req, res) => {
        console.log('Este es el controlador para eliminar un comentario')
    },
}

module.exports = itineraryController