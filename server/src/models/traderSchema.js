const { Schema, model } = require("mongoose");

const TraderSchema = new Schema(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    expiresAt: { type: Date, default: Date.now(), expires: "1d" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TraderModel = model("Trader", TraderSchema);
module.exports = TraderModel;
