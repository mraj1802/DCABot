const { Schema, model } = require("mongoose");

const BotSchema = new Schema(
  {
    active: { type: Boolean, default: false },
    dealId: { type: String, unique: true },
    config: Object,
    orders: Object,
    date: { type: Date, default: Date.now() },
    exchange: { type: String, default: "okx" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BotModel = model("Bot", BotSchema);
module.exports = BotModel;
