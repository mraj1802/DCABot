const { Schema, model } = require("mongoose");

const DealSchema = new Schema(
  {
    active: Boolean,
    dealId: { type: String, unique: true },
    exchange: String,
    date: { type: Date, default: Date.now() },
    status: { type: Number, default: 0 },
    config: Object,
    orders: Object,
    dealCount: { type: Number, default: 0 },
    isStart: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const DealModel = model("Deal", DealSchema);

module.exports = DealModel;
