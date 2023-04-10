const User = require("../../database/models/user.model");
const bcrypt = require("bcrypt");

module.exports.store = async (req, res) => {
  const { name, email, username, password } = req.body;
  const salt = 10;
  const hash = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({
      name: name,
      email: email,
      username: username,
      password: hash,
    });

    return res
      .status(201)
      .send({ msg: `Usuário com ID ${user.id} criado com sucesso.` });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
    return;
  }
};
module.exports.index = async (_, res) => {
  const users = await User.findAll({
    attributes: ["id", "name", "email", "username"],
  });
  res.status(200).send(users);
  return;
};
