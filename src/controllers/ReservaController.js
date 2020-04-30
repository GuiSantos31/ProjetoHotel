const reserva = require('../models/reserva')

class ReservaController {

    create(req, res) {
        const { body } = req;

        const newReserva = new reserva(body);
        newReserva.save(function (error) {
            if (error) {
                res.json({ error })
            }
            else {
                res.json('Sucess!')
            }
        });
    }
    list(req, res){

            reserva.find({}).exec(function(erro,result){

                
                res.json({
                    data:result.map(h=>h.toObject())
                })
            })
                    
 

    }
}

module.exports = new ReservaController;