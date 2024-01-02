const { Schema, model } = require("mongoose");

const BotSchema = new Schema(
  {
    active: Boolean,
    botName: { type: String, required: true },
    config: Object,
    date: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BotModel = model("Bot", BotSchema);
module.exports = BotModel;

// expiresAt: { type: Date, default: Date.now, expires: "1m" }, // Set the expiration time (e.g., 5 minutes)