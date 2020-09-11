const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/citiesController')
const itineraryController = require('../controllers/itineraryController')
const userController = require('../controllers/userController')
const activityController = require('../controllers/activityController')
const passport = require('../config/passport')

router.route('/cities')
    .get(citiesController.getCities)
    .post(citiesController.postCity)

router.route('/itineraries')
    .get(itineraryController.getItineraries)
    .post(itineraryController.postItinerary)

router.route('/itineraries/like')
    .put(passport.authenticate('jwt', { session: false }), itineraryController.likeItinerary)

router.route('/itineraries/dislike')
    .put(passport.authenticate('jwt', { session: false }), itineraryController.dislikeItinerary)

router.route('/itineraries/comments')
    .put(passport.authenticate('jwt', { session: false }), itineraryController.putCommentary)

router.route('/itineraries/commentsEdit')
    .put(itineraryController.modifyCommentary)

router.route('/itineraries/commentsDelete')
    .put(itineraryController.deleteCommentary)

router.route('/itineraries/:id')
    .get(itineraryController.getItinerary)

router.route('/activity')
    .post(activityController.postActivity)

router.route('/activity/:id')
    .get(activityController.getActivities)

router.route('/user')
    .post(userController.validator, userController.postUser)

router.route('/login')
    .post(userController.validatorLogin, userController.logUser)

router.route('/user/veriftoken')
    .get(passport.authenticate('jwt', { session: false }), userController.validatorToken)

module.exports = router