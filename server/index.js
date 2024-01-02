require("dotenv").config();
const connectDB = require("../server/src/config/db");
const mongoose = require("mongoose");
const express = require("express");
const { Server } = require("socket.io");
const HandleSocketConnection = require("../server/src/socket/connection");
const cors = require("cors");
const traderRouter = require("./src/routes/trader");
const PORT = 8080 || process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);

app.use("/api", traderRouter);


connectDB();
const server = app.listen(PORT, () => {
  console.log(`server connected at the port ${PORT}`);
});

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

//here we creating the socket connection.
HandleSocketConnection(io);
