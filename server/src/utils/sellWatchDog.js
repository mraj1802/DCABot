const {
  FetchOrderDetails,
  CreateOrdersLimit,
  FetchBalance,
} = require("../API/marketAPI");
const DealModel = require("../models/dealSchema");

const sellWatchDog = async () => {
  try {
    const bots = await DealModel.find({ active: true, isStart: true });
    console.log("getting all the actives bots array here..........", bots);
    for (let bot of bots) {
      console.log(
        "getting all the actives single bots here..............",
        bots
      );
      if (bot.orders.length > 0) {
        console.log("enter into the bot if present.....", bot.orders.length);
        const data = bot.orders.filter((el) => el.filled === 1);
        console.log("filled bots here.................................", data);
        if (data.length > 0) {
          console.log("enter into data.length.");
          for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            console.log("enter into data.length........................", obj);
            if (!obj.SellID) {
              console.log("selll id ni hai data..........", obj);
              let amount = parseFloat(obj.qty);
              let price = parseFloat(obj.target);
              const pair = bot.config["pair"];
              const pairArray = pair.split("/");
              const baseCurrency = pairArray[0];
              console.log("baseCurrency.....", baseCurrency);
              const balance = await FetchBalance(baseCurrency);
              console.log("res.......", balance);
              if (balance.free > amount) {
                const sellOrderPlaced = await CreateOrdersLimit(
                  bot.config["pair"],
                  "limit",
                  "sell",
                  amount,
                  price
                );

                if (sellOrderPlaced && sellOrderPlaced.id) {
                  const updatedOrders = [...bot.orders];
                  updatedOrders[i].SellID = sellOrderPlaced.id;

                  console.log("sell updatedOrders...", updatedOrders);
                  await DealModel.updateOne(
                    { _id: bot._id },
                    { $set: { orders: updatedOrders } }
                  );
                }
              } else {
                console.log("Insufficient balance.......");
              }
            } else {
              const result = await FetchOrderDetails(
                obj.SellID,
                bot.config["pair"]
              );
              if (result.status === "closed" && result.id === obj.SellID) {
                await DealModel.updateOne(
                  { _id: bot._id, "orders.SellID": result.id },
                  { $set: { "orders.$.status": 1 } }
                );
                console.log(
                  "result................................................."
                );
              }
            }
          }
        }
        console.log("Sell watch dog executed successfully.");
      }
    }
  } catch (error) {
    console.log("error in sell watch dog.", error);
  }
};

module.exports = sellWatchDog;
