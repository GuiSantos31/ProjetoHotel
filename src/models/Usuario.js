const {Schema ,model} = require('mongoose');

const UsuarioSchema = new Schema({
    email: String,
});

export default model('Usuario', UsuarioSchema);