const FetchBalance = require("../API/marketAPI");
const BotModel = require("../models/botShcema");
const ccxt = require("ccxt");

let exchange;

exchange = new ccxt.pro["okx"]({
  // enableRateLimit: true,
  apiKey: process.env.OKX_API_KEY,
  secret: process.env.OKX_API_SECRET,
  password: process.env.OKX_PASSWORD,
});
exchange.setSandboxMode(true);  //It will activate Test modes

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

const getOrder = async (req, res) => {
  console.log("in getOrders", req.body);
  let prices = [];
  let amounts = [];
  let qtys = [];
  let calculatedData = [];
  try {
    let data = {
      botName: req.body.botName,
      pair: req.body.pair,
      maxSafetyOrd: req.body.maxSafetyOrd,
      deviation: req.body.priceDeviation,
      targetProfit: req.body.targetProfit,
      safetyOrder: req.body.safetyOrd,
      volume: req.body.volume,
      baseOrder: req.body.baseOrder,
      type:req.body.type,
      condition: req.body.condition
    };

    // const ticker = await exchange.fetchTicker(data.pair);
    // let basePrice = ticker.last;

    let basePrice = 2000;
    console.log("basePrice", basePrice)

    const calculateAverage = (prices) => {
      let sum = 0;
      const averages = prices.map((price, index) => {
        const numericPrice = parseFloat(price);
        sum += numericPrice;
        return sum / (index + 1);
      });
      return isNaN(averages[averages.length - 1])
          ? "0.00"
          : averages[averages.length - 1].toFixed(2);
    };

    const calculateAmount = (safetyOrder, volume, index) => {
      let result = safetyOrder * volume;
      for (let i = 1; i <= index - 2; i++) {
        result *= volume;
      }
      return result;
    };

    const calculateSumAmount = (
        amounts,
        currentIndex,
        baseOrder,
        safetyOrder
    ) => {
      let sum = 0;
      for (let i = 2; i <= currentIndex; i++) {
        const numericAmount = parseFloat(amounts[i]);
        const previousAdd = parseFloat(baseOrder) + parseFloat(safetyOrder);
        sum += i === 2 ? numericAmount + previousAdd : numericAmount;
      }
      return sum.toFixed(2);
    };

    const calculateSumQty = (qtys, index, baseOrder, safetyOrder, price) => {
      let sum = 0;
      for (let i = 2; i <= index; i++) {
        const numericQty = parseFloat(qtys[i].toFixed(5));
        const previousAdd =
            baseOrder / (price + safetyOrder) / price.toFixed(5);
        sum +=
            i === 2 ? parseFloat(parseFloat(numericQty) + parseFloat(previousAdd)) : parseFloat(numericQty);
      }
      return sum;
    };
    
    for (let index = 0; index < data.maxSafetyOrd; index++) {
      let Deviation = data.deviation * index;
      let price = basePrice - basePrice * (Deviation / 100);
      prices.push(price);
      let average = calculateAverage(prices);
      const target = parseFloat(average) + average * (data.targetProfit / 100);
      const amount = calculateAmount(data.safetyOrder, data.volume, index);
      amounts.push(amount);

      console.log("both", amount, price)

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
                    ? parseFloat(data.baseOrder + parseFloat(data.safetyOrder)).toFixed(2)
                    : parseFloat(sumAmount).toFixed(2)
        }`,
        type: data.type,
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
}

module.exports = { createBot, disableBot, getBalance, getAllBot, getActiveBot, getOrder};