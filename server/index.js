require("dotenv").config();
const cron = require("node-cron");
const connectDB = require("../server/src/config/db");
const mongoose = require("mongoose");
const express = require("express");
const { Server } = require("socket.io");
const HandleSocketConnection = require("../server/src/socket/connection");
const cors = require("cors");
const traderRouter = require("./src/routes/trader");
const botRouter = require("./src/routes/bot");
const watchDog = require("./src/utils/watchDog");
const sellWatchDog = require("./src/utils/sellWatchDog");
const PORT = 8080 || process.env.PORT;
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
mongoose.set("strictQuery", false);

app.use("/api", traderRouter);
app.use("/api/bot", botRouter);

cron.schedule("* * * * * * *", async () => {
  try {
    //watchDog();
    //sellWatchDog();
  } catch (error) {
    console.error("Error in cron job method:", error);
  }
});

connectDB();

const server = app.listen(PORT, () => {
  console.log(`server connected at the port ${PORT}`);
});

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "*",
    methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    credentials: false,
    maxHttpBufferSize: 1e6,
  },
  pingInterval: 10000,
  pingTimeout: 5000,
});

//here we creating the socket connection.
HandleSocketConnection(io);
