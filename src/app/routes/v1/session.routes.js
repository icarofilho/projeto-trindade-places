const router = require("express").Router();

const SessionController = require("../../controller/SessionController");

router.post("/session", SessionController.store);

module.exports = router;
