import React, { useState } from "react";

import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ManageBots = () => {
  const botsData = [
    {
      name: "Test",
      pair: "ETH/USDT",
      bo: 20,
      so: 45,
      maxSo: 6,
      deviation: 1.3,
      volumeScale: 1.08,
      stepScale: 1,
      tpPercentage: 1.5,
      maxDeals: "infi",
      start: "ASAP",
      sandbox: "NO",
      active: true,
    },
    {
      name: "Test",
      pair: "ETH/USDT",
      bo: 20,
      so: 45,
      maxSo: 6,
      deviation: 1.3,
      volumeScale: 1.08,
      stepScale: 1,
      tpPercentage: 1.5,
      maxDeals: "infi",
      start: "ASAP",
      sandbox: "NO",
      active: true,
    },
    {
      name: "Test",
      pair: "ETH/USDT",
      bo: 20,
      so: 45,
      maxSo: 6,
      deviation: 1.3,
      volumeScale: 1.08,
      stepScale: 1,
      tpPercentage: 1.5,
      maxDeals: "infi",
      start: "ASAP",
      sandbox: "NO",
      active: true,
    },
  ];

  return (
    <>
      <section className="-z-50 bg-gray-100 min-h-[966px] h-full">
        <div className="flex flex-col items-center py-4 px-4">
          <div className="w-full space-y-6 rounded-lg text-black">
            <div className="flex flex-col justify-center items-center gap-2  py-4 rounded-lg">
              <h1 className="text-Black text-2xl font-medium">DCA Bots</h1>
              {/* <div className="flex gap-3 items-center">
                <div className="inline-flex items-center">
                <div className="relative w-8 h-4 rounded-full cursor-pointer">
                    <input
                       id="switch-component"
                       type="checkbox"
                       className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-200  checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-600"
                       defaultChecked
                     />
                     <label
                       htmlFor="switch-component"
                       className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                    >
                       <div
                        className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                         data-ripple-dark="true"
                      ></div>
                    </label>
                   </div> 
                </div>
                <p className="text-gray-300">Show Active</p>
              </div> */}
              <div className="absolute top-20 left-8 text-white hover:text-gray-300">
                <Link to="/">
                  <IoHomeSharp fontSize={20} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-5">
              {botsData.map((bot, index) => (
                <div
                  key={index}
                  className="block max-w-[18rem] rounded-lg border border-success bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:border-success-300 dark:bg-neutral-600"
                >
                  <div className="border-b-2 border-success px-6 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50">
                    <h2 className="text-xl font-medium">{bot.name}</h2>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between p-2">
                      <span>Symbol</span>
                      <p className="text-end">{bot.pair}</p>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Amount</span>
                      <p className="text-end">{bot.volumeScale} USD</p>
                    </div>
                    <div className="flex justify-between p-2">
                      <span>Close traders</span>
                      <p className="text-end">$9.07</p>
                    </div>
                  </div>
                  {/* <div className=" border-success px-6 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50">
                    <div className="flex justify-between">
                      <div className="border-t-2 border-success px-4 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50"></div>
                      <p>Footer</p>
                      <span className="border-t-2 border-success px-6 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50"></span>
                    </div>
                    Footer
                  </div> */}

                  <div className="text-center">
                    <div className="inline-block border-t border-success mx-4 px-4 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50"></div>
                    <span className="inline-block px-4 ">CENTER</span>
                    <div className="inline-block border-t border-success  px-4 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50"></div>
                  </div>

                  {/* <p>Pair: {bot.pair}</p>
                  <p>Bo: {bot.bo}</p>
                  <p>So: {bot.so}</p>
                  <p>Max So: {bot.maxSo}</p>
                  <p>Deviation: {bot.deviation}</p>
                  <p>Volume Scale: {bot.volumeScale}</p>
                  <p>Step Scale: {bot.stepScale}</p>
                  <p>TP%: {bot.tpPercentage}</p>
                  <p>Max Deals: {bot.maxDeals}</p>
                  <p>Start: {bot.start}</p>
                  <p>Sandbox: {bot.sandbox}</p>
                  <label className="block mt-2">
                    Active:{" "}
                    <input
                      type="checkbox"
                      checked={bot.active}
                    />
                  </label> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageBots;
