const { store: storeSession } = require("../functions/SessionFunctions");

class SessionController {
  async store(req, res) {
    await storeSession(req, res);
  }
}

module.exports = new SessionController();
