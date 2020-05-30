const reserva = require('../models/reserva');
const Usuario = require('../models/Usuario');

class ReservaController {
    async index(req, res){
        const { responsavel } = req.body;
        let reservas = await Reserva.find({responsavel});
        return res.json(reservas);
    }

    async store(req, res){
        const { usuario_id } = req.headers;
        const { dataInicial, dataFinal, qtdHospedes } = req.body;
        const { hotel_id } = req.params;

        Usuario.findById(usuario_id).catch((err) => {
            return res.status(401).json({mensagem: "Usuário não encontrado!"});
        });
        Hotel.findById(hotel_id).catch((err) => {
            return res.status(401).json({mensagem: "Hotel inválido!"});
        });
        
        let reserva = await Reserva.create({responsavel: usuario_id, hotel_id, dataInicial, dataFinal, qtdHospedes });
        await reserva.populate('responsavel').populate('hotel').execPopulate();
        return res.json(reserva);

    }
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