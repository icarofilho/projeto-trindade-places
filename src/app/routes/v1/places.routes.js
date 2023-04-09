const router = require("express").Router();
const PlacesController = require("../../controller/PlaceController");

router.post("/places", PlacesController.store);
router.get("/index", PlacesController.index);

module.exports = router;
