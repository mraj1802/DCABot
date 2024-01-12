const { FetchOrderDetails, CreateOrdersLimit } = require("../API/marketAPI");
const DealModel = require("../models/dealSchema");

const sellWatchDog = async () => {
  try {
    const bots = await DealModel.find({ active: true, isStart: true });
    for (let bot of bots) {
      if (bot.orders.length > 0) {
        const data = bot.orders.filter((el) => el.filled === 1);
        console.log("bots", data);
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            if (!obj.SellID) {
              let amount = parseFloat(obj.qty);
              let price = parseFloat(obj.target);
              const sellOrderPlaced = await CreateOrdersLimit(
                bot.config["pair"],
                "limit",
                "sell",
                amount,
                price
              );

              if (sellOrderPlaced && sellOrderPlaced.id) {
                const updatedOrders = [...data];
                updatedOrders[i].SellID = sellOrderPlaced.id;

                console.log("sell updatedOrders...", updatedOrders);
                await DealModel.updateOne(
                  { _id: bot._id },
                  { $set: { orders: updatedOrders } }
                );
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
