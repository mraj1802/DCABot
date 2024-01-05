import React, { useEffect, useRef, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOutSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
const Header = () => {
  const [isDropdown, setisDropdown] = useState(false);
  const [isuserDropdown, setuserDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const userdropdownRef = useRef(null);
  const navigate = useNavigate();
  const handleDropdown = () => {
    setisDropdown(!isDropdown);
  };
  const handleuserDropdown = () => {
    setuserDropdown(!isuserDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
    return;
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setisDropdown(false);
    }
  };
  const handleClickOutsideuser = (event) => {
    if (
      userdropdownRef.current &&
      !userdropdownRef.current.contains(event.target)
    ) {
      setuserDropdown(false);
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
        <div className="z-50 relative w-[150px]" ref={dropdownRef}>
          <button
            className="w-full flex justify-between gap-1 items-center py-1.5 px-4 font-medium bg-blue-600 text-white rounded-md text-base"
            onClick={handleDropdown}
          >
            USDT -Bal{" "}
            <span>
              {" "}
              <RxCaretDown />
            </span>
          </button>

          {isDropdown && (
            <>
              <div className="absolute bg-white z-50 top-12 right-0 left-0  p-2 py-3 px-2  border border-gray-200 shadow-xl rounded-md text-black font-normal">
                <ul className="flex flex-col gap-3 cursor-pointer px-2">
                  <li className="hover:text-blue-600">USDT -Bal</li>
                  <li className="hover:text-blue-600">USDT -Bal</li>
                  <li className="hover:text-blue-600">USDT -Bal</li>
                  <li className="hover:text-blue-600">USDT -Bal</li>
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

          {isuserDropdown && (
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
