const UserService = require("../services/UserService")
const { JWT } = require('../auth/authJWT');

const UserController = {
  async login (req, res) {
    const { email, password } = req.body;
    const user = await UserService.login(email, password);
    if (!user) return res.status(401).json({ message: 'User not exist' });
    const token = JWT(user);
    res.status(200).json({ token });
  },

  async register (req, res) {
    await UserService.register(req.body);
    res.status(201).json({ message: 'User Created' });
  },
}

module.exports = UserController;
