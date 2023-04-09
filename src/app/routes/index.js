const router = require("express").Router();
const PlacesRouter = require("./v1/places.routes");

router.use("/v1", [PlacesRouter]);

module.exports = router;
