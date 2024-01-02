require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDb connected Successfully.");
    return conn;
  } catch (error) {
    console.log("MongoDb error", error);
  }
};

module.exports = connect;
