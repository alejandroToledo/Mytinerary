const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/citiesController')
const itineraryController = require('../controllers/itineraryController')
const userController = require('../controllers/userController')
const activityController = require('../controllers/activityController')

router.route('/cities')
    .get(citiesController.getCities)
    .post(citiesController.postCity)

router.route('/itineraries')
    .get(itineraryController.getItineraries)
    .post(itineraryController.postInerary)


router.route('/itineraries/:id')
    .get(itineraryController.getItinerary)
    .put(itineraryController.likeItinerary)

router.route('/activity')
    .post(activityController.postActivity)

router.route('/activity/:id')
    .get(activityController.getActivities)

router.route('/user')
    .post(userController.validator, userController.postUser)

router.route('/login')
    .post(userController.validatorLogin, userController.logUser)

module.exports = router