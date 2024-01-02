const TraderModel = require("../models/traderSchema");
const Token = require("../utils/generateToken");

const TraderLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = new TraderModel({
      username,
      password,
    });
    const savedTrader = await newUser.save();
    const token = await Token({ traderID: savedTrader._id });
    console.log("token..", token);

    return res.status(200).send({
      msg: "logged successfully.",
      token: token,
      data: savedTrader,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(401).send({ mgs: "Error in login" });
  }
};
const TraderDetails = async (req, res) => {};

module.exports = { TraderLogin, TraderDetails };
