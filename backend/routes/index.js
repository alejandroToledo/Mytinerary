const express = require('express')
const rutas = express.Router()
const ciudadesController = require('../controllers/ciudadesController')

rutas.route('/ciudades')
    .get(ciudadesController.obtenerCiudades)
    .post(ciudadesController.ciudadesPost)

module.exports = rutas