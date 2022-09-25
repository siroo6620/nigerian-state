const express = require("express");
const { getState, getAllState } = require("../controller/states.controller");
const router = express.Router();

router.get("/:state", getState);
router.get("/", getAllState);

module.exports = router;
