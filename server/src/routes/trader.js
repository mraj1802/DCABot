const express = require("express");
const { TraderLogin } = require("../controllers/traderController");
const router = express.Router();

router.post("/login", TraderLogin);

module.exports = router;
