const router = require("express").Router();
const PlacesController = require("../../controller/PlaceController");

router.post("/places", PlacesController.store);
router.get("/places", PlacesController.index);
router.delete("/places/:id", PlacesController.destroy);
router.put("/places/:id", PlacesController.update);

module.exports = router;
