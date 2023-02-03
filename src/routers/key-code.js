const express = require("express");
const keyCode = require("./../controllers/key-code");
const router = express.Router();

router.get("/key-code", keyCode.getKeyCode);

module.exports = router;
