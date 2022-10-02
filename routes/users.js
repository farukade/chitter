var express = require("express");
const { userController } = require("../controllers/user");
var router = express.Router();

/* User signup */
router.post("/signup", userController.signup);

/* User signup */
router.post("/signin", userController.signin);

module.exports = router;
