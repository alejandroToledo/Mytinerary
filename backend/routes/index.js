const express = require('express')
const rutas = express.Router()
const ciudadesController = require('../controllers/ciudadesController')
const itineraryController = require('../controllers/itineraryController')

rutas.route('/cities')
    .get(ciudadesController.getCities)
    .post(ciudadesController.postCity)

rutas.route('/itineraries')
    .get(itineraryController.getItineraries)
    .post(itineraryController.postInerary)

rutas.route('/itineraries/:id')
    .get(itineraryController.getItinerary)

module.exports = rutas