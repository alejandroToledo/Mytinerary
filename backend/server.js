const express = require('express')
const cors = require('cors')
const rutas = require('./routes/index')

//Ejecuar el dotenv
require('dotenv').config()

//Ejecutar la conexion a BBDD
require('./config/db')

//Crear el elemento SERVIDOR
const servidor = express()

//Middleware
servidor.use(cors())
servidor.use(express.json())//express interpreta lo que viene del req.body

//Rutas
servidor.use('/api', rutas)

servidor.listen(4000, () => console.log('hola'))

