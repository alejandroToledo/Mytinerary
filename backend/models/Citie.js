const mongoose = require('mongoose')

const citieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
})

const Citie = mongoose.model('citie', citieSchema)

module.exports = Citie