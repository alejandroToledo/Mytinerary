const Citie = require('../models/CityModel')

const citiesController = {

    getCities: async (req, res) => {
        //Pedir a BBDD la lista de ciudades
        const cities = await Citie.find()

        //Devolverle al frontend la lista de ciudades que me dio la BBDD
        res.json({
            success: true,
            cities
        })
    },

    postCity: (req, res) => {
        //Abro la peticion que me llega del frontend y saco la información del nuevo invitado
        var { name, country, image, imageFondo } = req.body

        //Validar los datos(que no falte nada o caracteres raros), se suele hacer con Midleware

        //Grabar en la base de datos la ciudad nueva
        const newCitie = new Citie({
            name,
            country,
            image,
            imageFondo
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

module.exports = citiesController