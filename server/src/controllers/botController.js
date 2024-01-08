const FetchBalance = require("../API/marketAPI");
const BotModel = require("../models/botShcema");
const ccxt = require("ccxt");

let options = { defaultType: "spot" };
const exchange = new ccxt["okx"]({
  enableRateLimit: true,
  apiKey: process.env.OKX_API_KEY,
  secret: process.env.OKX_API_SECRET,
  password: process.env.OKX_PASSWORD,
  options: options,
});

//it will activate Test modes
exchange.setSandboxMode(true);

const createBot = async (req, res) => {
  const { config, orders } = req.body;
  try {
    if (!config && !orders) {
      return res.status(404).send({ msg: "invalid data." });
    }
    const newBot = new BotModel({
      config,
      orders,
    });
    await newBot.save();
    return res.status(200).send({ msg: "Bot created successfully." });
  } catch (error) {
    console.log("Error in creating bot", error.message);
    return res.status(500).send({ data: "Error in creating bot." });
  }
};

const getBalance = async (req, res) => {
  const { coin } = req.params;
  try {
    if (coin) {
      const x = await FetchBalance(exchange, coin);
      return res
        .status(200)
        .send({ msg: "balance fetched successfully.", balance: x });
    }
  } catch (error) {
    console.log("Error in getting the balance", error);
    return res.status(401).send({ mgs: "Error in getting the balance." });
  }
};

const getAllBot = async (req, res) => {
  try {
    const AllBot = await BotModel.find();
    if (AllBot.length > 0) {
      return res
        .status(200)
        .send({ msg: "Bot fetched successfully.", data: AllBot });
    }
    return res.status(401).send({ mgs: "Bot not present." });
  } catch (error) {
    console.log("Error in getting all bot", error);
    return res.status(401).send({ mgs: "Error in getting all bot." });
  }
};

const getActiveBot = async (req, res) => {
  try {
    const ActiveBot = await BotModel.find({ active: true });
    if (ActiveBot.length > 0) {
      return res
        .status(200)
        .send({ msg: "Active Bot fetched successfully.", data: ActiveBot });
    }
    return res.status(401).send({ mgs: "Bot not present." });
  } catch (error) {
    console.log("Error in getting Active bot", error);
    return res.status(401).send({ mgs: "Error in getting Active bot." });
  }
};

const disableBot = async (req, res) => {
  // Your logic for disabling bot goes here
};

module.exports = { createBot, disableBot, getBalance, getAllBot, getActiveBot };
