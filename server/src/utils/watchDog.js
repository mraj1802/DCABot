const { FetchOrderDetails } = require("../API/marketAPI");
const BotModel = require("../models/botShcema");
const DealModel = require("../models/dealSchema");

const watchDog = async () => {
  try {
    const bots = await BotModel.find({ active: true });
    for (let bot of bots) {
      if (bot.orders.length > 0) {
        const data = bot.orders.filter((el) => el.filled !== 1);
        console.log("bots", data);
        if (data.length > 0) {
          for (let obj of data) {
            const result = await FetchOrderDetails(
              obj.orderID,
              bot.config["pair"]
            );
            if (result.status === "closed" && result.id === obj.orderID) {
              await BotModel.updateOne(
                { _id: bot._id, "orders.orderID": result.id },
                { $set: { "orders.$.filled": 1 } }
              );
              await DealModel.updateOne(
                { dealId: bot.dealId, "orders.orderID": result.id },
                { $set: { "orders.$.filled": 1 } }
              );
              console.log(
                "result................................................."
              );
            }
          }
        }
        console.log("data restart again after sometime.");
      }
    }
  } catch (error) {
    console.log("error in watch dog.", error);
  }
};

module.exports = watchDog;
