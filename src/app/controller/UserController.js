const {
  store: storeUser,
  index: indexUser,
} = require("../functions/UserFunctions");

class UserController {
  async store(req, res) {
    await storeUser(req, res);
  }
  async index(req, res) {
    await indexUser(req, res);
  }
}

module.exports = new UserController();
