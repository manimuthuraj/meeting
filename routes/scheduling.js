const express = require("express");
const router = express.Router();
const controller = require("../controller/scheduling")
router.post("/schedule", controller.scheduleMetting);

module.exports = router;
