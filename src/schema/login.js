const Joi = require('joi');

const loginSchema = {
  login: (body) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).max(20).required(),
    });

    const { error } = schema.validate(body);
    if (error) {
      const fail = new Error('Invalid Camps');
      fail.name = 'BadRequest';
      throw fail;
    }
  },
};

module.exports = loginSchema;
