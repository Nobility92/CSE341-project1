const routes = require('express').Router();
const lesson1controller = require("../controllers/lesson1");

 
routes.get('/hen', lesson1controller.henryroute);
routes.get('/wendy', lesson1controller.wendyroute);
routes.get('/david', lesson1controller.davidroute);

module.exports = routes
