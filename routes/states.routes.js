const express = require("express");
const { getState } = require("../controller/states.controller");
const router = express.Router();

router.get("/", getState);

module.exports = router;
