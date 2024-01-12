const express = require("express");
const {
  createBot,
  getBalance,
  getAllBot,
  getActiveBot,
  startBot,
  getOrder,
  deleteBot,
} = require("../controllers/botController");
const router = express.Router();

router.post("/create", createBot);
router.get("/pair/balance/:coin", getBalance);
router.get("/all", getAllBot);
router.get("/all/active", getActiveBot);
router.get("/start/:id", startBot);
router.post("/orderlist", getOrder);
router.delete("/delete/:id", deleteBot);

module.exports = router;
