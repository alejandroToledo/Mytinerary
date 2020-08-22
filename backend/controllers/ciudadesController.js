const Citie = require('../models/Citie')

const ciudadesController = {

    obtenerCiudades: async (req, res) => {
        //Pedir a BBDD la lista de ciudades
        const lista = await Citie.find()
        //Devolverle al frontend la lista de ciudades que me dio la BBDD
        res.json({
            success: true,
            cities: lista
        })
    },

    ciudadesPost: (req, res) => {
        //Abro la peticion que me llega del frontend y saco la información del nuevo invitado
        var { name, country, image } = req.body

        //Validar los datos(que no falte nada o caracteres raros), se suele hacer con Midleware

        //Grabar en la base de datos el pais nuevo
        const newCitie = new Citie({
            name: name,
            country: country,
            image: image
        })
        newCitie.save()
            .then(citie => {
                res.json({
                    success: true, name: citie
                })
            })
            .catch(error => {
                res.json({
                    success: false,
                    error: error
                })
            })
    }


}

module.exports = ciudadesController