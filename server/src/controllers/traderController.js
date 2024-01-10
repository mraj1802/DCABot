const bcrypt = require("bcrypt");
const TraderModel = require("../models/traderSchema");
const Token = require("../utils/generateToken");

const TraderLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const isChecked = await TraderModel.findOne({ username });
    if (!isChecked) {
      return res.status(400).json({
        msg: "Trader Not Found.",
      });
    }
    const validPassword = await bcrypt.compare(password, isChecked.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Invalid Password.",
      });
    }
    const token = await Token({ traderID: isChecked._id });

    return res.status(200).send({
      msg: "logged successfully.",
      token: token,
    });
  } catch (error) {
    console.log("error in login", error);
    return res.status(401).send({ mgs: "Error in login" });
  }
};

const TraderSignUp = async (req, res) => {
  const { username, password, email } = req.body;
  console.log(username, password, email);
  try {
    const existTrader = await TraderModel.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (existTrader) {
      return res
        .status(401)
        .json({ status: 401, msg: "Trader Already SignUp." });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new TraderModel({
      email,
      username,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(200).json({
      msg: "Sign Up successfully.",
    });
  } catch (error) {
    console.log("error in sign up", error);
    return res.status(401).send({ mgs: "Error in sign up." });
  }
};

module.exports = { TraderLogin, TraderSignUp };
