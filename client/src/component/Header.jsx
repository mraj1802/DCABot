import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {  useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { SiTether } from "react-icons/si";
import { SiEthereum } from "react-icons/si";
import { SiBitcoinsv } from "react-icons/si";

const Header = () => {
  const coinData=[
    {name:"BTC",icon:<SiBitcoinsv className="text-yellow-500"/>,bal:"12345"},
    {name:"USDT",icon:<SiTether className="text-green-500"/>,bal:"12"},
    {name:"ETH",icon:<SiEthereum className="text-gray-700"/>,bal:"5676777"},
  ]
  const [isDropdown, setIsDropdown] = useState(false);
  const [isUserDropdown, setUserDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const dropdownRef = useRef(null);
  const userdropdownRef = useRef(null);
  const navigate = useNavigate();


  const handleSelect = (index) => {
    setSelectedValue(index);
    setIsDropdown(false);
  };

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };
  const handleuserDropdown = () => {
    setUserDropdown(!isUserDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
    return;
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdown(false);
    }
  };
  const handleClickOutsideuser = (event) => {
    if (
      userdropdownRef.current &&
      !userdropdownRef.current.contains(event.target)
    ) {
      setUserDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideuser);
    return () => {
      window.removeEventListener("click", handleClickOutsideuser);
    };
  }, []);

  return (
    <div className="border-b border-gray-200 flex justify-end items-center py-3 px-10">
      <div className="flex  items-center gap-3">
        <div className="z-50 relative w-[130px]" ref={dropdownRef}>
          <button
            className="w-full flex justify-between gap-3 items-center  px-4 font-medium  text-black rounded-md text-base"
            onClick={handleDropdown}
          >
          <div className="flex flex-col text-[12px]">
            <div className="flex items-center gap-2 text-sm">
            <span>{coinData[selectedValue].icon}</span>{coinData[selectedValue].name}
            </div>
            <p className="text-start">Bal {coinData[selectedValue].bal}</p>
          </div>
            <span className="text-base text-black">
      
              <AiFillCaretDown/>
            </span>
          </button>

          {isDropdown && (
            <>
              <div className="absolute bg-white z-50 top-14 right-0 left-0  p-2 py-3 px-2  border border-gray-200 shadow-xl rounded-md text-black font-normal">
                <ul className="flex flex-col gap-3 cursor-pointer px-2">
                  {coinData.map((item,index)=>
                  <>
                    <li onClick={() => handleSelect(index)} className="flex items-center gap-2 hover:text-blue-600"><span className="text-lg">{item.icon}</span>{item.name} </li>
                  </>)}
                 </ul>
              </div>
            </>
          )}
        </div>
        <div className="relative" ref={userdropdownRef}>
          <div onClick={handleuserDropdown}>
            <FaUser
              fontSize={20}
              className="text-gray-800 hover:opacity-80 transition-transform transform hover:scale-110 duration-100 ease-in-out"
            />
          </div>

          {isUserDropdown && (
            <>
              <div className="absolute bg-white top-10 right-0 w-32 p-2 py-3 px-2  border border-gray-200 shadow-xl rounded-md text-black font-normal">
                <ul className="flex flex-col gap-3 cursor-pointer px-2">
                  <li
                    className="hover:text-blue-600 flex gap-1 items-center"
                    onClick={handleLogout}
                  >
                    <span>
                      <MdLogout />
                    </span>
                    Logout
                  </li>
                </ul>
              </div>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
