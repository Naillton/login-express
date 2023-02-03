const { User } = require('../database/models');

const UserService = {
  async login (email, password) {
    const user = await User.findOne(
      {
        where: {
          email,
          password,
        },
      },
    );
    return user;
  },

  async register (obj) {
    const {
      email,
      password,
      firstName,
      secondName,
    } = obj;
    await User.create(
      {
        email,
        firstName,
        secondName,
        password,
      },
    );
  }
}

module.exports = UserService;
