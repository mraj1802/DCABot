// const { CreateOrdersLimit } = require("../API/marketAPI");
// const DealModel = require("../models/dealSchema");

// const SellOrders = async (pair, amount, price) => {
//   const orders = await CreateOrdersLimit(pair, "limit", "sell", amount, price);
//   console.log("selling order limit id if........................", orders.id);
//   if (orders && orders.id) {
//     const updatedOrders = [...bot.orders];
//     updatedOrders[i].SellID = orders.id;
//     // Update the entire orders array in the bot document
//     console.log("sell updatedOrders...", updatedOrders);
//     await DealModel.updateOne(
//       { _id: bot._id },
//       { $set: { orders: updatedOrders } }
//     );
//   }
// };

// module.exports = SellOrders;
