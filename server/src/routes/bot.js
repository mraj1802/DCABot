const express = require("express");
const {
  createBot,
  getBalance,
  getAllBot,
  getActiveBot,
  getOrder
} = require("../controllers/botController");
const router = express.Router();

router.post("/create", createBot);
router.get("/pair/balance/:coin", getBalance);
router.get("/all", getAllBot);
router.get("/all/active", getActiveBot);
router.post("/orderlist", getOrder);

module.exports = router;
