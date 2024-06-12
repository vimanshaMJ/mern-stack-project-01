const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/users", controller.getUsers);
router.get("/createusers", controller.addUser);
router.get("/updateusers", controller.updateUser);
router.get("/deleteusers", controller.deleteUser);

module.exports = router;
