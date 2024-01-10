require("dotenv").config();
const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  const AuthToken = req.header("Authorization");
  if (!AuthToken || !AuthToken.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ msg: "Access denied. No valid token provided." });
  }
  const token = AuthToken.split(" ")[1];
  try {
    const decodedTrader = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decodedTrader", decodedTrader);
    if (Date.now() >= decodedTrader.exp) {
      return res.status(500).json({ msg: "Token Expired." });
    }
    req.traderID = decodedTrader;
    next();
  } catch (error) {
    console.log("error in middleware", error);
    return res.status(401).json({ error: "Invalid token credential." });
  }
};

module.exports = isAuth;
