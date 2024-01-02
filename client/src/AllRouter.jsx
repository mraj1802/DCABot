import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import CreateDcaBot from './Pages/CreateDcaBot'
import ManageBots from './Pages/ManageBots'
import ActiveBot from './Pages/ActiveBot'

const AllRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/createbot" element={<CreateDcaBot/>}/>
        <Route path="/managebot" element={<ManageBots/>}/>
        <Route path="/activebot" element={<ActiveBot/>}/>
    </Routes>
  
  )
}

export default AllRouter
