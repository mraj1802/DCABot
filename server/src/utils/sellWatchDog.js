const { FetchOrderDetails, SellOrders } = require("../API/marketAPI");
const BotModel = require("../models/botShcema");

const sellWatchDog = async () => {
  try {
    const bots = await BotModel.find({ active: true });
    for (let bot of bots) {
      console.log("bot", bot);
      if (bot.orders.length > 0) {
        const data = bot.orders.filter((el) => el.filled === 1);
        console.log("bots", data);
        if (data.length > 0) {
          for (let obj of data) {
            const result = await SellOrders(obj.qty, obj.target);
            if (result.status === "filled" && result.id === data.orderID) {
              await BotModel.updateOne(
                { _id: bot._id, "orders.orderNo": bot.orders.orderNo },
                { $set: { "orders.$.filled": 1 } }
              );
              console.log("result...", result);
            }
          }
        }
        // if (data !== null || data !== undefined) {
        //   //   const result = await FetchOrderDetails(
        //   //     bot.exchange,
        //   //     data.orderID,
        //   //     bot.config["pairs"]
        //   //   );

        //   //selling the data;

        //
        // }
        console.log("order data not filled.");
      }
    }
  } catch (error) {
    console.log("error in watch dog.", error);
  }
};

module.exports = sellWatchDog;
