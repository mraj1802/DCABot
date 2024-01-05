import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

const Layout = ({ children, token }) => {
  return (
    <>
      <div className="h-full min-h-screen">
        <div className="flex h-full min-h-screen">
          {token && (
            <div className="w-[260px]">
              <Sidebar token={token} />
            </div>
          )}

          <div className="w-full ">
            {token && <Header token={token} />}

            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
