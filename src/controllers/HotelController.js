const hotel = require('../models/hotel')

class HotelController{

    async index(req, res){
        const { municipio } = req.body;

        let hoteis = await Hotel.find({ municipio});

        return res.json(hoteis);

    }   

    index(req,res){ 
            return res.json({retorno: false});
    }

    show (req,res){ 
            return res.json({retorno: false});
    }

    async store(req,res){
        const { nome, uf , municipio, endereco, qtdeAptos, valorDiaria } = req.body;
       
        let hotel = await Hotel.findOne({ nome });
        
        if(! hotel){
              hotel = await Hotel.create({
              nome, 
              uf ,
              municipio,
              endereco, 
              qtdeAptos, 
              valorDiaria
            });

        }    
        

        return res.json(hotel);

        }
    async update(req, res){
        const { hotel_id, nome, uf , municipio, endereco, qtdeAptos, valorDiaria } = req.body;
        
        let hotel = await Hotel.updateOne({_id: hotel_id}, {
            nome, 
            uf , 
            municipio, 
            endereco, 
            qtdeAptos, 
            valorDiaria,
        });

        return res.json(hotel);
    }
    }

module.exports = new HotelController;
