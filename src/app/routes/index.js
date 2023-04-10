const router = require("express").Router();

const validateToken = require("../middlewares/token-validator");

const PlacesRouter = require("./v1/places.routes");
const UsersRouter = require("./v1/users.routes");
const SessionRouter = require("./v1/session.routes");

router.use("/v1", SessionRouter);
router.use("/v1", [PlacesRouter, UsersRouter]);
// router.use("/v1", validateToken, [(PlacesRouter, UsersRouter)]);

module.exports = router;
