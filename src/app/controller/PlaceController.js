const {
  store: storePlace,
  index: indexPlace,
  destroy: destroyPlace,
  update: updatePlace,
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
  async update(req, res) {
    await updatePlace(req, res);
  }
}

module.exports = new PlaceController();
