const express = require('express');

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');
const routes = express.Router();

routes
    .get('/users', UserController.index)
    .post('/users', UserController.store)

    .get('/users/:user_id/addresses', AddressController.index)
    .post('/users/:user_id/addresses', AddressController.store)

    .get('/users/:user_id/techs', TechController.index)
    .post('/users/:user_id/techs', TechController.store)
    .delete('/users/:user_id/techs', TechController.delete)

    .get('/report',ReportController.show)


module.exports = routes;