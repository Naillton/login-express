const Joi = require('joi');

const cadSchema = {
  cadastro: (body) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      firstName: Joi.string().min(3).max(50).required(),
      secondName: Joi.string().min(3).max(50).required(),
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

module.exports = cadSchema;
