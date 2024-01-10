const express = require("express");
const {
  TraderLogin,
  TraderSignUp,
} = require("../controllers/traderController");
const router = express.Router();

router.post("/login", TraderLogin);
router.post("/signup", TraderSignUp);

module.exports = router;
