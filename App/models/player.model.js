const mongoose = require('mongoose');

let PlayerSchema = new mongoose.Schema({
    kills: { type: Number, default: 0 },
    nome: { type: String, required: true },
    deaths: { type: Number, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
})

module.exports = mongoose.model('Player', PlayerSchema, 'player');