const { Router } = require('express');
const UserController = require('../controllers/UserController');
const { loginValidation, cadValidation } = require('../middlewares/ValidatorUser');

const router = Router();

router.post('/login', loginValidation, UserController.login);
router.post('/register', cadValidation, UserController.register);

module.exports = router;
