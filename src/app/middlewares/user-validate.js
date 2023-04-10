const yup = require("yup");

module.exports = async function validateUser(req, res, next) {
  const {
    body: { name, email, username, password },
  } = req;

  try {
    const userSchema = yup.object({
      name: yup.string().min(3).required(),
      email: yup.string().email().required(),
      username: yup.string().min(3).required(),
      password: yup.string().min(6).required(),
    });

    await userSchema.validateSync({
      name: name,
      email: email,
      username: username,
      password: password,
    });

    next();
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};
