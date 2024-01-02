import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import CreateDcaBot from './Pages/CreateDcaBot'
import ManageBots from './Pages/ManageBots'

const AllRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/createbot" element={<CreateDcaBot/>}/>
        <Route path="/managebot" element={<ManageBots/>}/>
    </Routes>
  
  )
}

export default AllRouter
