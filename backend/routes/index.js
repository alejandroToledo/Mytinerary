const express = require('express')
const rutas = express.Router()
const citiesController = require('../controllers/citiesController')
const itineraryController = require('../controllers/itineraryController')
const userController = require('../controllers/userController')

rutas.route('/cities')
    .get(citiesController.getCities)
    .post(citiesController.postCity)

rutas.route('/itineraries')
    .get(itineraryController.getItineraries)
    .post(itineraryController.postInerary)

rutas.route('/itineraries/:id')
    .get(itineraryController.getItinerary)

rutas.route('/signin')
    .post(userController.postUser)

module.exports = rutas