const {
  store: storePlace,
  index: indexPlace,
} = require("../functions/PlaceFunctions");

class PlaceController {
  async store(req, res) {
    await storePlace(req, res);
  }

  async index(req, res) {
    await indexPlace(req, res);
  }
}

module.exports = new PlaceController();
