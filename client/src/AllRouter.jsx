import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import CreateDcaBot from './Pages/CreateDcaBot'
import ManageBots from './Pages/ManageBots'
import ActiveBot from './Pages/ActiveBot'
import BotHistory from './Pages/BotHistory'
import Configuration from './Pages/Configuration'
import Logs from './Pages/Logs'
import LiveLogs from './Pages/LiveLogs'

const AllRouter = ({token}) => {
  return (
    <Routes>
        <Route path="/" element={<Home token={token}/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/createbot" element={<CreateDcaBot/>}/>
        <Route path="/managebot" element={<ManageBots/>}/>
        <Route path="/activebot" element={<ActiveBot/>}/>
        <Route path="/bothistory" element={<BotHistory/>}/>
        <Route path="/conf" element={<Configuration/>}/>
        <Route path="/logs" element={<Logs/>}/>
        <Route path="/logs/livelogs" element={<LiveLogs/>}/>
    </Routes>
  
  )
}

export default AllRouter
