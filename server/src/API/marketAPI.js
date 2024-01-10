const exchange = require("../config/exchange");
//fetched balance .
const FetchBalance = async (exchange, coin) => {
  try {
    const ex = await exchange.fetchBalance();
    const balance = ex[coin];
    return balance;
  } catch (error) {
    console.log("error in fetchbalance.", error);
  }
};

//fetched order details.
const FetchOrderDetails = async (exchange, id, symbol) => {
  console.log("data...", exchange, id, symbol);
  try {
    const orderDetails = await exchange.fetchOrder(id, symbol);
    return orderDetails;
  } catch (error) {
    console.log("error in FetchOrderDetails.", error);
  }
};

const MarketLoader = async (exchange) => {
  try {
    const loadexchange = await exchange.loadMarkets();
    if (loadexchange) {
      return true;
    }
  } catch (error) {
    console.log("error in MarketLoader.", error);
  }
};

//fetched real price of pairs.
const MarketTrigger = async (exchange, pairs) => {
  try {
    let tigger = await exchange.fetchTicker(pairs);
    let latestPrice = tigger.last;
    return latestPrice;
  } catch (error) {
    console.log("error in MarketTrigger.", error);
  }
};

const CreateOrdersLimit = async (
  exchange,
  symbol,
  orderType,
  side,
  amount,
  price
) => {
  try {
    console.log("order", symbol, orderType, side, amount, price);
    const order = await exchange.createOrder(
      symbol,
      orderType,
      side,
      amount,
      price
    );

    return order;
  } catch (error) {
    console.error("Error creating order of limit:", error.message);
    throw error;
  }
};

const CreateOrdersMarket = async (
  exchange,
  symbol,
  orderType,
  side,
  amount
) => {
  try {
    console.log("order", symbol, orderType, side, amount);
    const order = await exchange.createOrder(symbol, orderType, side, amount);
    return order;
  } catch (error) {
    console.error("Error creating order of market:", error.message);
    throw error;
  }
};

const CancelOrders = async () => {};

const SellOrders = async (qty, price) => {
  try {
    console.log("qty, price", qty, price);
    const ex = await exchange.fetchBalance();
    const order = await exchange.createOrder(pair, "limit", "sell", qty, price);
    console.log("ex...", ex.USDT);
    console.log("order...", order);
    return order;
  } catch (error) {
    console.log("Error in selling order", error);
    return res.status(401).send({ mgs: "Error in selling order." });
  }
};

module.exports = {
  FetchBalance,
  FetchOrderDetails,
  MarketLoader,
  MarketTrigger,
  CreateOrdersMarket,
  CreateOrdersLimit,
  SellOrders,
};
