const { Router } = require('express');

const SessionController = require('./controllers/SessionController');
const HotelController = require('./controllers/HotelController');
const ReservaController = require('./controllers/ReservaController');

const routes = new Router();

routes.get('/'), (req, res) => {

    return res.json({ retorno: false });
}

routes.get('/sessions', SessionController.index);
routes.post('/sessions', SessionController.store);

routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', HotelController.store);
routes.put('/hoteis', HotelController.update);

module.exports = routes; 