const {
  store: storePlace,
  index: indexPlace,
  destroy: destroyPlace,
} = require("../functions/PlaceFunctions");

class PlaceController {
  async store(req, res) {
    await storePlace(req, res);
  }

  async index(req, res) {
    await indexPlace(req, res);
  }

  async destroy(req, res) {
    await destroyPlace(req, res);
  }
}

module.exports = new PlaceController();
