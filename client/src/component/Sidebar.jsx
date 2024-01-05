import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";
import { IoCreateOutline } from "react-icons/io5";
import { BiObjectsVerticalBottom } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import { GoLog } from "react-icons/go";

const Sidebar = ({ token }) => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const linkStyle = (pathname) => {
    return isActive(pathname)
      ? "bg-blue-100 border-r-2 border-blue-700 text-blue-600"
      : "";
  };

  return (
    <div className="w-[15%] 2xl:w-[16%] xl:w-[20%] lg:w-[20%] md:w-[25%] fixed border-r border-gray-200  h-full py-3">
      <div className="flex flex-col items-center py-2">
        <img
          src="/android-chrome-256x256.png"
          alt=""
          className="h-[50px] w-[50px]"
        />
        <h1 className="text-3xl font-bold">cornix</h1>
      </div>
      <div className="flex flex-col gap-4 py-5 w-[100%]">
        <Link
          to="/"
          className={`flex gap-2 items-center text-[15px] font-medium text-gray-800 hover:text-blue-500 py-3 px-6 ${linkStyle(
            "/"
          )}`}
        >
          <span>
            <IoCreateOutline fontSize={20} />
          </span>
          Create DCA Bot
        </Link>
        <Link
          to="/managebot"
          className={`flex gap-2 items-center text-[15px] font-medium text-gray-800 hover:text-blue-500 py-3 px-6 ${linkStyle(
            "/managebot"
          )}`}
        >
          <span>
            <BiObjectsVerticalBottom fontSize={20} />
          </span>
          Manage DCA Bot
        </Link>
        <Link
          to="/activebot"
          className={`flex gap-2 items-center text-[15px] font-medium text-gray-800 hover:text-blue-500 py-3 px-6 ${linkStyle(
            "/activebot"
          )}`}
        >
          <span>
            <FiCheckCircle fontSize={20} />
          </span>
          Active DCA Bot Deals
        </Link>
        <Link
          to="/hisotry"
          className={`flex gap-2 items-center text-[15px] font-medium text-gray-800 hover:text-blue-500 py-3 px-6 ${linkStyle(
            "/history"
          )}`}
        >
          <span>
            <FaHistory fontSize={16} />
          </span>
          DCA Bot Deals History
        </Link>
        <Link
          to="/conf"
          className={`flex gap-2 items-center text-[15px] font-medium text-gray-800 hover:text-blue-500 py-3 px-6 ${linkStyle(
            "/conf"
          )}`}
        >
          <span>
            <GrDocumentConfig fontSize={16} />
          </span>
          Configuration
        </Link>
        <Link
          to="/log"
          className={`flex gap-2 items-center text-[15px] font-medium text-gray-800 hover:text-blue-500 py-3 px-6 ${linkStyle(
            "/log"
          )}`}
        >
          <span>
            <GoLog fontSize={16} />
          </span>
          Logs
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
