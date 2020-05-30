const {Schema ,model} = require('mongoose');

const HotelSchema = new Schema({
    nome: String,
    uf: String,
    municipio: String,
    endereco: String,
    qtdeAptos: Number,
    valorDiaria: Number,
    nomeImagem: String,
}, {
    toJSON: {
        virtuals: true,
    }

});
HotelSchema.virtual('imagem_url').get(function(){
    return `http://localhost:3000/uploads/${this.nomeImagem}`;
});

module.exports = model ('hotel',HotelSchema);