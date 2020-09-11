const Itinerary = require('../models/ItineraryModel')
const Citie = require('../models/CityModel')
const User = require('../models/UserModel')

const itineraryController = {
    getItineraries: async (req, res) => {
        const list = await Itinerary.find()
        res.json({ list })
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
        const usuarioPush = await User.findOneAndUpdate({
            _id
        }, {
            $push: { favItineraries: id }
        }, {
            returnNewDocument: true
        })
        const usuario = await User.findOne({ _id })
        res.json({
            success: true,
            usuario
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
        const usuario = await User.findOne({ _id })
        res.json({
            success: true,
            usuario
        })

    },
    putCommentary: async (req, res) => {
        const { id, commentary, idComment } = req.body
        const { _id, urlPic } = req.user
        const itinerary = await Itinerary.findOneAndUpdate({
            _id: id
        }, {
            $push: { comments: { content: commentary, user: _id, userPic: urlPic, idComment } }

        }, {
            returnNewDocument: true
        })
        const itineraries = await Itinerary.find({ cityId: itinerary.cityId })
        res.json({
            success: true,
            itineraries
        })
        console.log('Este es el controlador para agregar un comentario')
        console.log(itinerary.comments.length)
        console.log(req.user._id)
    },
    modifyCommentary: async (req, res) => {
        const { id, commentary, idItinerary } = req.body
        const itinerary = await Itinerary.findOne({ _id: idItinerary })
        itinerary.comments.map(comentario => {
            if (comentario.idComment == id) {
                comentario.content = commentary
            }
        })
        const newComments = await Itinerary.findByIdAndUpdate({
            _id: idItinerary
        }, {
            comments: itinerary.comments
        }, {
            returnNewDocument: true
        })
        const itineraries = await Itinerary.find({ cityId: itinerary.cityId })
        res.json({
            success: true,
            itineraries
        })
    },
    deleteCommentary: async (req, res) => {
        const { id, idItinerary } = req.body
        const itinerary = await Itinerary.findOne({ _id: idItinerary })
        const comentarioFiltrado = itinerary.comments.filter(commentary => commentary.idComment != id)
        const newComments = await Itinerary.findByIdAndUpdate({
            _id: idItinerary
        }, {
            comments: comentarioFiltrado
        }, {
            returnNewDocument: true
        })
        const itineraries = await Itinerary.find({ cityId: itinerary.cityId })
        res.json({
            success: true,
            itineraries
        })
    },
}

module.exports = itineraryController