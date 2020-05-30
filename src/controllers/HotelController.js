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
        const arquivo = req.file;
        console.log(arquivo);
        console.log(red.body);
        return res.json({ok: true});
    }
    async store(req,res) {
        const nomeImagem = req.file.filename;
        const { usuario_id } = req.headers;
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
        const { usuario_id } = req.header;
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
