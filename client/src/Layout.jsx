import React from 'react';

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

export default Layout;