const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.efehiRoute);
routes.get('/jesse', lesson1Controller.jesseRoute);
routes.get('/faith', lesson1Controller.faithRoute);

module.exports = routes;