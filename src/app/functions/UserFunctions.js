const User = require("../../database/models/user.model");

module.exports.store = async (req, res) => {
  const { name, email, username, password } = req.body;
  console.log(name, email, username, password);
  try {
    const user = await User.create({
      name: name,
      email: email,
      username: username,
      password: password,
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
  const users = await User.findAll();
  res.status(200).send({ msg: "hello world" });
  return;
};
module.exports.show = async (req, res) => {};
module.exports.update = async (req, res) => {};
module.exports.destroy = async (req, res) => {};
