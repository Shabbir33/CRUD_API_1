const express = require("express");
const User = require("../models/User");
const controller = require("../controller/controller");

const router = express.Router();

router.route("/").get(controller.getUsers).post(controller.addUser);

router.route("/:id").get(controller.getSingleUser) .delete(controller.deleteUser).patch(controller.updateUser);

module.exports = router;