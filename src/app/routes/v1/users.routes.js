const router = require("express").Router();
const UserController = require("../../controller/UserController");
const validateUser = require("../../middlewares/user-validate");

router.post("/user", validateUser, UserController.store);
router.get("/users", UserController.index);

module.exports = router;
