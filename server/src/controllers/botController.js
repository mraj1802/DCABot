const {
  FetchBalance,
  CreateOrdersLimit,
  CreateOrdersMarket,
} = require("../API/marketAPI");
const BotModel = require("../models/botShcema");
const exchange = require("../config/exchange");

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

const startBot = async (req, res) => {
  const { id } = req.params;
  let side = "buy";
  //let updatedOrders = [];
  try {
    const botStart = await BotModel.findOneAndUpdate(
      { _id: id },
      { $set: { active: true } },
      { new: true }
    );
    if (!botStart) {
      return res
        .status(401)
        .json({ msg: "Error in bot start.", data: botStart });
    }
    if (
      botStart.config["ordertype"] === "Limit" ||
      botStart.config["ordertype"] === "limit"
    ) {
      for (let i = 0; i < botStart.orders.length; i++) {
        let order = botStart.orders[i];
        let amount = parseFloat(order.qty);
        let price = parseFloat(order.price);
        const orders = await CreateOrdersLimit(
          exchange,
          botStart.config["pairs"],
          "limit",
          side,
          amount,
          price
        );
        console.log("order id if........................", orders.id);
        if (orders && orders.id) {
          const updatedOrders = [...botStart.orders];
          updatedOrders[i].orderID = orders.id;
          // Update the entire orders array in the bot document
          console.log("updatedOrders...", updatedOrders);
          await BotModel.updateOne(
            { _id: botStart._id },
            { $set: { orders: updatedOrders } }
          );
        }
      }
    } else {
      for (let i = 0; i < botStart.orders.length; i++) {
        let order = botStart.orders[i];
        let amount = parseFloat(order.qty);
        let price = parseFloat(order.price);
        if (i === 0) {
          const orders = await CreateOrdersMarket(
            exchange,
            botStart.config["pairs"],
            "market",
            side,
            amount
          );
          console.log("order market id if........................", orders.id);
          if (orders && orders.id) {
            const updatedOrders = [...botStart.orders];
            updatedOrders[i].orderID = orders.id;
            // Update the entire orders array in the bot document
            console.log("updatedOrders...", updatedOrders);
            await BotModel.updateOne(
              { _id: botStart._id },
              { $set: { orders: updatedOrders } }
            );
          }
        } else {
          const orders = await CreateOrdersLimit(
            exchange,
            botStart.config["pairs"],
            "limit",
            side,
            amount,
            price
          );
          console.log("order market id if........................", orders.id);
          if (orders && orders.id) {
            const updatedOrders = [...botStart.orders];
            updatedOrders[i].orderID = orders.id;
            // Update the entire orders array in the bot document
            console.log("updatedOrders...", updatedOrders);
            await BotModel.updateOne(
              { _id: botStart._id },
              { $set: { orders: updatedOrders } }
            );
          }
        }
      }
    }
    return res.status(200).json({ msg: "Bot started Successfully." });
  } catch (error) {
    console.log("Error in startBot bot", error.message);
    return res.status(500).send({ data: "Error in startBot bot." });
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

module.exports = {
  createBot,
  disableBot,
  getBalance,
  getAllBot,
  getActiveBot,
  startBot,
};
