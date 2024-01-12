const {
  FetchBalance,
  CreateOrdersLimit,
  CreateOrdersMarket,
  CancelOrders,
} = require("../API/marketAPI");
const BotModel = require("../models/botShcema");
const exchange = require("../config/exchange");
const {
  calculateAverage,
  calculateAmount,
  calculateSumAmount,
  calculateSumQty,
} = require("../utils/calculation");
const DealModel = require("../models/dealSchema");
const { v4: uuidv4 } = require("uuid");
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
      dealId: uuidv4(),
    });
    await newBot.save();
    return res.status(200).send({ msg: "Bot created successfully." });
  } catch (error) {
    console.log("Error in creating bot", error.message);
    return res.status(500).send({ msg: "Error in creating bot." });
  }
};

const startBot = async (req, res) => {
  const { id } = req.params;
  let side = "buy";
  let dealsData;
  try {
    const botStart = await BotModel.findOneAndUpdate(
      { _id: id },
      { $set: { active: true } },
      { new: true }
    );

    //here we saved selling collection when bot start.
    const deals = await DealModel.findOne({ dealId: botStart["dealId"] });
    if (!deals) {
      const newDeals = new DealModel({
        active: botStart["active"],
        config: botStart["config"],
        orders: botStart["orders"],
        dealId: botStart["dealId"],
        exchange: botStart["exchange"],
        isStart: true,
      });
      dealsData = await newDeals.save();
    }
    console.log("dealdata........", dealsData);

    if (!botStart) {
      return res
        .status(401)
        .json({ msg: "Error in bot start.", data: botStart });
    }
    console.log("botStart.config", botStart.config["type"]);
    if (
      botStart.config["type"] === "LIMIT" ||
      botStart.config["type"] === "limit"
    ) {
      console.log("inside the limit for loop.");
      for (let i = 0; i < botStart.orders.length; i++) {
        let order = botStart.orders[i];
        let amount = parseFloat(order.qty);
        let price = parseFloat(order.price);
        const orders = await CreateOrdersLimit(
          botStart.config["pair"],
          "limit",
          side,
          amount,
          price
        );
        console.log("order limit id if........................", orders.id);
        if (orders && orders.id) {
          const updatedOrders = [...botStart.orders];
          updatedOrders[i].orderID = orders.id;
          // Update the entire orders array in the bot document
          console.log("updatedOrders...", updatedOrders);
          await BotModel.updateOne(
            { _id: botStart._id },
            { $set: { orders: updatedOrders } }
          );
          await DealModel.updateOne(
            { _id: dealsData._id },
            { $set: { orders: updatedOrders } }
          );
        }
      }
    } else {
      console.log("inside the market for loop.");

      for (let i = 0; i < botStart.orders.length; i++) {
        let order = botStart.orders[i];
        let amount = parseFloat(order.qty);
        let price = parseFloat(order.price);
        if (i === 0) {
          const orders = await CreateOrdersMarket(
            botStart.config["pair"],
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
            await DealModel.updateOne(
              { _id: dealsData._id },
              { $set: { orders: updatedOrders } }
            );
          }
        } else {
          const orders = await CreateOrdersLimit(
            botStart.config["pair"],
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
            await DealModel.updateOne(
              { _id: dealsData._id },
              { $set: { orders: updatedOrders } }
            );
          }
        }
      }
    }
    return res.status(200).json({ msg: "Bot started Successfully." });
  } catch (error) {
    console.log("Error in startBot bot", error.message);
    return res.status(500).send({ msg: "Error in startBot bot." });
  }
};

const getBalance = async (req, res) => {
  const { coin } = req.params;
  try {
    if (coin) {
      const x = await FetchBalance(coin);
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
    return res.status(401).send({ msg: "Bot not present." });
  } catch (error) {
    console.log("Error in getting all bot", error);
    return res.status(401).send({ msg: "Error in getting all bot." });
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

const deleteBot = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const deletedBot = await BotModel.findById(id);

    if (!deletedBot) {
      return res.status(404).json({ msg: "Bot not found." });
    }

    let success = true;

    for (let i = 0; i < deletedBot.orders.length; i++) {
      let order = deletedBot.orders[i];

      if (order.filled !== 1) {
        const result = await CancelOrders(
          order.orderID,
          deletedBot.config.pair
        );

        if (!result) {
          success = false;
          console.log("Failed to cancel order:", order.orderID);
        }
      }
    }

    if (success) {
      await BotModel.findByIdAndDelete(id);
      return res.status(200).json({ msg: "Bot deleted successfully." });
    } else {
      return res.status(500).json({ msg: "Error in deleting orders." });
    }
  } catch (error) {
    console.log("Error in delete bot.", error);
    return res.status(500).json({ msg: "Error in delete bot." });
  }
};

const disableBot = async (req, res) => {
  // Your logic for disabling bot goes here
};

const getOrder = async (req, res) => {
  const {
    botName,
    pair,
    maxSafetyOrd,
    priceDeviation,
    targetProfit,
    safetyOrd,
    safetyOrderStep,
    baseOrder,
    type,
    startCondition,
  } = req.body;

  let prices = [];
  let amounts = [];
  let qtys = [];
  let calculatedData = [];
  try {
    let data = {
      botName: botName,
      pair: pair,
      maxSafetyOrd: maxSafetyOrd,
      deviation: priceDeviation,
      targetProfit: targetProfit,
      safetyOrder: safetyOrd,
      volume: safetyOrderStep,
      baseOrder: baseOrder,
      type: type,
      condition: startCondition,
    };

    const ticker = await exchange.fetchTicker(data.pair);
    let basePrice = ticker.last;
    console.log("basePrice", basePrice);

    for (let index = 0; index < data.maxSafetyOrd; index++) {
      let Deviation = data.deviation * index;
      let price = basePrice - basePrice * (Deviation / 100);
      prices.push(price);
      let average = calculateAverage(prices);
      const target = parseFloat(average) + average * (data.targetProfit / 100);
      const amount = calculateAmount(data.safetyOrder, data.volume, index);
      amounts.push(amount);

      const qty = amount / price;
      qtys.push(qty);
      const sumAmount = calculateSumAmount(
        amounts,
        index,
        data.baseOrder,
        data.safetyOrder
      );
      const sumQty = calculateSumQty(
        qtys,
        index,
        data.baseOrder,
        data.safetyOrder,
        price
      );
      const dataEntry = {
        no: index === 0 ? "Base Order" : index,
        deviation: `${Deviation} %`,
        price: price,
        average: average,
        target: target,
        qty: `${
          index === 0
            ? (parseFloat(data.baseOrder) / price).toFixed(5)
            : index === 1
            ? (parseFloat(data.safetyOrder) / price).toFixed(5)
            : parseFloat(qty).toFixed(5)
        }`,
        amount: `${
          index === 0
            ? parseFloat(data.baseOrder).toFixed(2)
            : index === 1
            ? parseFloat(data.safetyOrder).toFixed(2)
            : amount.toFixed(2)
        }`,
        sumQty: `${
          index === 0
            ? (parseFloat(data.baseOrder) / price).toFixed(5)
            : index === 1
            ? data.baseOrder / price +
              parseFloat(data.safetyOrder) / price.toFixed(5)
            : sumQty.toFixed(5)
        }`,
        sumAmount: `${
          index === 0
            ? parseFloat(data.baseOrder).toFixed(2)
            : index === 1
            ? (
                parseFloat(data.baseOrder) + parseFloat(data.safetyOrder)
              ).toFixed(2)
            : parseFloat(sumAmount).toFixed(2)
        }`,
        type: data.type,
        filled: 0,
      };
      calculatedData.push(dataEntry);
    }
    res.status(200).json({
      orderList: calculatedData,
    });
  } catch (err) {
    console.log("error", err);
    res.status(400).json({
      error: err,
    });
  }
};

module.exports = {
  createBot,
  disableBot,
  getBalance,
  getAllBot,
  getActiveBot,
  getOrder,
  startBot,
  deleteBot,
};
