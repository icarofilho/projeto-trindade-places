const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../database/models/user.model");

const {
  env: { JWT_SECRET },
} = process;

module.exports.store = async (req, res) => {
  try {
    const {
      body: { username, password },
    } = req;

    const user = await User.findOne({ where: { username: username } });

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(404).send({ message: "Usuário ou Senha invalido" });
    }

    if (isValid) {
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "15m" });
      res.status(200).send({ token });
      return;
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
    return;
  }
};
