const { Schema, model } = require("mongoose");

const DealSchema = new Schema(
  {
    active: Boolean,
    canceled: Boolean,
    panicSell: Boolean,
    botId: String,
    botName: String,
    dealId: { type: String, unique: true },
    exchange: String,
    pair: String,
    market: String,
    date: Date,
    status: Number,
    config: Object,
    sellData: Object,
    orders: Object,
    isStart: Number,
    dealCount: Number,
    dealMax: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const DealModel = model("Deal", DealSchema);

module.exports = DealModel;
