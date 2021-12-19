const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports.userController = {
  signUpUser: async (req, res) => {
    const { name, login, password } = req.body;
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
    if (!name) {
      return res.status(400).json({
        error: "Введите имя",
      });
    }
    if (!login) {
      return res.status(400).json({
        error: "Введите логин",
      });
    }
    if (!password) {
      return res.status(400).json({
        error: "Введите пароль",
      });
    }
    try {
      const user = await User.create({
        name,
        login,
        password: hash,
      });
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  loginUser: async (req, res) => {
    const { login, password } = req.body;
    const candidate = await User.findOne({ login });
    if (!candidate) {
      return res.status(400).json({
        error: "Неверный логин",
      });
    }
    const valid = await bcrypt.compare(password, candidate.password);
    if (!valid) {
      return res.status(401).json({
        error: "Неверный пароль",
      });
    }
    const payload = {
      _id: candidate._id,
      login: candidate.login,
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });
    return res.json({ token, candidate });
  },
};
