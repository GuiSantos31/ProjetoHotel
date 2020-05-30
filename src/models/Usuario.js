const {Schema ,model} = require('mongoose');

const UsuarioSchema = new Schema({
    email: String,
});

module.export = model('Usuario', UsuarioSchema);