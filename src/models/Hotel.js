const {Schema ,model} = require('mongoose');

const HotelSchema = new Schema({
    nome: String,
    uf: String,
    municipio: String,
    endereco: String,
    qtdeAptos: Number,
    valorDiaria: Number,
});

module.exports= model ('hotel',HotelSchema);