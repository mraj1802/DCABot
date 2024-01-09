const { FetchOrderDetails } = require("../API/marketAPI");
const BotModel = require("../models/botShcema");

const watchDog = async () => {
  try {
    const bots = await BotModel.find({ active: true });
    for (let bot of bots) {
      console.log("bot", bot);
      if (bot.orders.length > 0) {
        const data = bot.orders.filter((el) => el.filled !== 1);
        console.log("bots", data);
        if (data !== null || data !== undefined) {
          const result = await FetchOrderDetails(
            bot.exchange,
            data.orderID,
            bot.config["pairs"]
          );
          if (result.status === "filled" && result.id === data.orderID) {
            await BotModel.updateOne(
              { _id: bot._id, "orders.orderNo": bot.orders.orderNo },
              { $set: { "orders.$.filled": 1 } }
            );
            console.log("result...", result);
          }
        }
        console.log("data not present");
      }
    }
  } catch (error) {
    console.log("error in watch dog.", error);
  }
};

module.exports = watchDog;
