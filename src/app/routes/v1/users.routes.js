const router = require("express").Router();
const UserController = require("../../controller/UserController");

router.post("/user", UserController.store);
router.get("/users", UserController.index);
// router.get("/places", UserController.index);
// router.delete("/places/:id", UserController.destroy);
// router.put("/places/:id", UserController.update);

module.exports = router;
