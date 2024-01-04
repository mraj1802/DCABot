import React from 'react'
// import Header from './component/Header'

const Layout = ({children}) => {
  return (
    <>
    <div className="h-full min-h-screen">

    {/* <Header/> */}
      {children}
    </div>
    </>
  )
}

export default Layout
