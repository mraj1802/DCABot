const jwt = require("jsonwebtoken");

const Token = async ({ traderID }) => {
  const token = jwt.sign({ traderID: traderID }, process.env.JWT_SECRET, {
    expiresIn: "1day",
  });
  return token;
};

module.exports = Token;
