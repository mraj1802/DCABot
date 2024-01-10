import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Configuration = () => {
  return (
    <>
      <section className=" bg-gray-100 min-h-[966px] h-full">
        <div className="flex flex-col items-center py-4 px-4">
          <div className="w-full space-y-6 rounded-lg  text-black">
            <div className="flex justify-center items-center gap-2 bg-[#1f2937] py-4 rounded-lg">
              <h1 className="text-white text-2xl font-medium">Configuration</h1>
              <div className="absolute top-10 left-8 text-white hover:text-gray-300">
                <Link to="/">
                  <IoHomeSharp fontSize={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Configuration;
