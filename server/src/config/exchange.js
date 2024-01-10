const ccxt = require("ccxt");

const exchange = new ccxt["okx"]({
  enableRateLimit: true,
  apiKey: process.env.OKX_API_KEY,
  secret: process.env.OKX_API_SECRET,
  password: process.env.OKX_PASSWORD,
  options: { defaultType: "spot" },
});

module.exports = exchange;
