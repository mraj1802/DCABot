import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import SignIn from "./Pages/SignIn";

const Layout = ({ children, token }) => {
  return (
    <>
    {token ? (
      <>
        <div className="h-full min-h-screen">
        <div className="flex h-full min-h-screen">
          {token && (
            <div className="w-[15%] 2xl:w-[16%] xl:w-[20%] lg:w-[20%] md:w-[25%] hidden 2xl:!flex xl:flex lg:flex md:flex sm:hidden">
              <Sidebar token={token} />
            </div>
          )}

          <div className="w-full 2xl:w-[84%] xl:w-[80%] lg:w-[80%] md:w-[75%]">
            {token && <Header token={token} />}
            <div className="mt-20">

            {children}
            </div>
          </div>
        </div>
        </div>
      </>
    ) : <SignIn/>
    }
      
    </>
  );
};

export default Layout;
