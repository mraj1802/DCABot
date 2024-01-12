import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import CreateDcaBot from "./Pages/CreateDcaBot";
import ManageBots from "./Pages/ManageBots";
import ActiveBot from "./Pages/ActiveBot";
import BotHistory from "./Pages/BotHistory";
import Configuration from "./Pages/Configuration";
import Logs from "./Pages/Logs";
import LiveLogs from "./Pages/LiveLogs";
import SignUp from "./Pages/SignUp";

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateDcaBot />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/managebot" element={<ManageBots />} />
      <Route path="/activebot" element={<ActiveBot />} />
      <Route path="/history" element={<BotHistory />} />
      <Route path="/conf" element={<Configuration />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/logs/livelogs" element={<LiveLogs />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AllRouter;
