const router = require("express").Router();
const PlacesRouter = require("./v1/places.routes");
const UsersRouter = require("./v1/users.routes");

router.use("/v1", [PlacesRouter, UsersRouter]);

module.exports = router;
