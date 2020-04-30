const usuario = ('../models/usuario');

class SessionController{

    index(req,res){
            return res.json({retorno: false});
    }

    async store(req,res){
        const { email } = req.body;

        let usuario = await Usuario.findOne({email });
        if (!usuario){
            usario = await Usuario.create({ email });
        }

        return res.json(usuario);

        }
    }

module.exports = new SessionController;