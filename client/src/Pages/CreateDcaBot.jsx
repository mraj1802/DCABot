import React from 'react'

const CreateDcaBot = () => {
  return (
      <>
        <section className=" 3xl:py-16 2xl:py-10 xl:py-12 lg:py-14 md:py-12 dsm:py-10 sm:py-8 bg-gray-100">
          <div className="flex flex-col items-center md:px-8 dsm:px-8 px-4 py-2 mx-auto lg:py-0">
            <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[80%] sm:w-[90%] space-y-6 rounded-lg text-black p-8 bg-[#1f2937]">
              <h1 className="text-center border-b border-[#9a9ea0] text-xl text-gray-200 font-bold px-4 pb-4">CREATE DCA BOT</h1>

              <form action="" className="flex flex-col gap-5">

                <div className="grid grid-cols-2 gap-10 text-white">
                  <div>
                    <label htmlFor="botname" className="text-xs text-gray-400 font-bold">Bot name</label>
                    <input type="text" name="botname" id="botname" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Bot Name" />
                  </div>

                  <div>
                    <label htmlFor="pairs" className="text-xs text-gray-400 font-bold">Pairs</label>
                    <select name="pairs" id="pairs" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1.5 px-4 w-full focus:outline-none focus:border focus:border-white">
                      <option className="text-black">Pairs</option>
                      <option className="text-black">udt/sf</option>
                    </select>
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-10 text-white">
                  <div>
                    <label htmlFor="baseordersize" className="text-xs text-gray-400 font-bold">Base Order Size</label>
                    <input type="number" name="baseordersize" id="baseordersize" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Base Order Size" />                  </div>
                  <div>
                    <div>
                      <label htmlFor="safetyordersize" className="text-xs text-gray-400 font-bold">Safety Order Size</label>
                      <input type="number" name="safetyordersize" id="safetyordersize" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Safety Order Size" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10 text-white">
                  <div>
                    <label htmlFor="maxsafetyorder" className="text-xs text-gray-400 font-bold">Max Safety Orders</label>
                    <input type="number" name="maxsafetyorder" id="maxsafetyorder" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Max Safety Orders" />
                  </div>
                  <div>
                    <label htmlFor="safetyorderprice" className="text-xs text-gray-400 font-bold">Safety Order Price Deviation</label>
                    <input type="number" name="safetyorderprice" id="safetyorderprice" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Safety Order Price Deviation" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10 text-white">
                  <div>
                    <label htmlFor="safetyordervolume" className="text-xs text-gray-400 font-bold">Safety Order Volume Scale</label>
                    <input type="number" name="safetyordervolume" id="safetyordervolume" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Safety Order Volume Scale" />
                  </div>

                  <div>
                    <label htmlFor="safetyorderstep" className="text-xs text-gray-400 font-bold">Safety Order Step Scale</label>
                    <input type="number" name="safetyorderstep" id="safetyorderstep" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Safety Order Step Scale" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10 text-white">
                  <div>
                    <label htmlFor="targetprofit" className="text-xs text-gray-400 font-bold">Target Profit</label>
                    <input type="number" name="targetprofit" id="targetprofit" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white" value="" placeholder="Enter Target Profit %" />
                  </div>

                  <div>
                    <label htmlFor="maxdeals" className="text-xs text-gray-400 font-bold">Max Deals</label>
                    <input type="number" name="maxdeals" id="maxdeals" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Max Deals" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10 text-white">
                  <div>
                    <label htmlFor="maxpairsdeal" className="text-xs text-gray-400 font-bold">Max Pairs Deals</label>
                    <input type="number" name="maxpairsdeal" id="maxpairsdeal" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Max Pairs Deals" />
                  </div>

                  <div>
                    <label htmlFor="minimumvol" className="text-xs text-gray-400 font-bold">Minimum 24h Volume</label>
                    <input type="number" name="minimumvol" id="minimumvol" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Minimum 24h Volume / in Million" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10 text-white">
                  <div>
                    <label htmlFor="cooldowndeals" className="text-xs text-gray-400 font-bold">Cooldown Between Deals</label>
                    <input type="number" name="cooldowndeals" id="cooldowndeals" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="Enter Cooldown Between Deals / in Seconds" />
                  </div>

                  <div>
                    <label htmlFor="ordertype" className="text-xs text-gray-400 font-bold">Order Type</label>
                    <select name="ordertype" id="ordertype" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1.5 px-4 w-full focus:outline-none focus:border focus:border-white">
                      <option className="text-black">MARKET</option>
                      <option className="text-black">LIMIT</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10 text-white">
                  <div>
                    <label htmlFor="ordertype" className="text-xs text-gray-400 font-bold">Start Condition</label>
                    <select name="ordertype" id="ordertype" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1.5 px-4 w-full focus:outline-none focus:border focus:border-white">
                      <option className="text-black">Open new trade ASAP</option>
                      <option className="text-black">Manually/Api</option>
                    </select>
                  </div>

                  <div className="flex flex-col justify-center">
                    <label htmlFor="ordertype" className="text-xs text-gray-400 font-bold py-2">Enabled</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                </div>

                <div className=" py-4">
                  <button className="w-full p-2 bg-blue-600 border border-blue-600 hover:bg-transparent  text-white text-lg font-medium  rounded-md">Preview Bot</button>
                </div>
              </form>


            </div>

          </div>
        </section>
      </>
  )
}

export default CreateDcaBot