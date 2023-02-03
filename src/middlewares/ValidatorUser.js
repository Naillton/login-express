const loginSchema = require('../schema/login');
const cadSchema = require('../schema/cadastro');

const userMiddleware = {
  loginValidation: (req, _res, next) => {
    loginSchema.login(req.body);
    next();
  },

  cadValidation: (req, _res, next) => {
    cadSchema.cadastro(req.body);
    next();
  }
}

module.exports = userMiddleware;
