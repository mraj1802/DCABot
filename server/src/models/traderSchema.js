const { Schema, model } = require("mongoose");

const TraderSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TraderModel = model("Trader", TraderSchema);
module.exports = TraderModel;
