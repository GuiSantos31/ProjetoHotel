  
const {Schema ,model} = require('mongoose');

const reservaSchema = new Schema({

  
responsible :'string', contact:'string', hotel:'string', apType:'string', period:'string', 
qntGuests :'number',


})

module.exports= model ('reserva',reservaSchema);