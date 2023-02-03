const { Router } = require('express');
const UserController = require('../controllers/UserController');
const { loginValidation, cadValidation } = require('../middlewares/ValidatorUser');

const Router = Router();

Router.post('/login', loginValidation, UserController.login);
Router.post('/register', cadValidation, UserController.register);

module.exports = Router;
