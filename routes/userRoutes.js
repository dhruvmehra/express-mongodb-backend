var express = require("express");
var router = express.Router();

const UserController = require("../controllers/userController");

// User routes
router.post("/", UserController.createUser);
router.get("/:id", UserController.getUser);

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
