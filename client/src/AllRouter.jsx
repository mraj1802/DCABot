import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'

const AllRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
    </Routes>
  
  )
}

export default AllRouter
