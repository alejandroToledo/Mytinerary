const User = require('../models/UserModel')
const Joi = require('@hapi/joi')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
    postUser: async (req, res) => {
        const { urlPic,
            username,
            password,
            email,
            firstName,
            lastName,
            country, } = req.body
        console.log(req.body)

        const passwordHass = bcryptjs.hashSync(password, 10)
        const userExists = await User.findOne({ username })
        if (userExists) {
            res.json({
                success: false,
                error: 'nombre de usuario ya existe'
            })
        } else {
            const newUser = new User(
                {
                    urlPic, username, password: passwordHass, email, firstName, lastName, country
                }
            )
            var user = await newUser.save()
            jwt.sign({ ...newUser }, process.env.SECRETORKEY, {}, (error, token) => {
                if (error) {
                    res.json({ success: false, error })
                } else {
                    res.json({
                        success: true,
                        token,
                        urlPic: newUser.urlPic,
                        username: newUser.username
                    })
                    res.json({ succes: true, user })
                }
            }
            )
        }
    },
    validator: (req, res, next) => {
        console.log("validar Datos!!")
        const schema = Joi.object({
            urlPic: Joi.string().required().trim().min(5).max(200),
            username: Joi.string().required().trim().alphanum().min(5).max(25),
            password: Joi.string().required().trim(),
            email: Joi.string().required().trim().email(),
            firstName: Joi.string().required().trim().min(1).max(25),
            lastName: Joi.string().required().trim().min(1).max(25),
            country: Joi.string().required().trim().min(5).max(25),
        })
        const validation = schema.validate(req.body, { abortEarly: false })
        if (validation.error !== undefined) {
            return res.json({
                success: false,
                error: 'Error en la validacion de datos',
                message: validation.error
            })
        } else { next() }

    },
    logUser: async (req, res) => {
        const { username, password } = req.body
        console.log('llego al controlador de login')
        const userExists = await User.findOne({ username })
        if (!userExists) {
            res.json({
                success: false,
                message: 'The username and/or password are incorrects'
            })
        } else {
            const passwordMatch = bcryptjs.compareSync(password, userExists.password)
            if (!passwordMatch) {
                res.json({
                    success: false,
                    message: 'The username and/or password are incorrects'
                })
            } else {
                jwt.sign({ ...userExists }, process.env.SECRETORKEY, {}, (error, token) => {
                    if (error) {
                        res.json({
                            success: false,
                            error: 'Hubo un error'
                        })
                    } else {
                        res.json({
                            success: true,
                            token,
                            urlPic: userExists.urlPic,
                            username: userExists.username,
                            favItineraries: userExists.favItineraries
                        })
                    }
                })

            }
        }
    },
    validatorLogin: (req, res, next) => {
        console.log("validar Datos login!!")
        const schema = Joi.object({
            username: Joi.string().required().trim().alphanum().min(5).max(25),
            password: Joi.string().required().trim()
        })
        const validation = schema.validate(req.body, { abortEarly: false })
        if (validation.error !== undefined) {
            return res.json({
                success: false,
                error: 'Error en la validacion de datos',
                message: validation.error
            })
        } else { next() }

    }
}

module.exports = userController