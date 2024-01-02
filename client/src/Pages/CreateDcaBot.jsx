import React from 'react'

const CreateDcaBot = () => {
  return (
    <>
      <section class=" 3xl:py-16 2xl:py-10 xl:py-12 lg:py-14 md:py-12 dsm:py-10 sm:py-8 bg-gray-100">
        <div class="flex flex-col items-center md:px-8 dsm:px-8 px-4 py-2 mx-auto lg:py-0">
            <div class="2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[80%] sm:w-[90%] space-y-6 rounded-lg  text-black">
              
              <div class=" py-4 bg-white rounded-md">
                  <h1 className="border-b border-[#cfdae0] text-lg text-[#2f4050] font-bold px-4 py-3">Bot Name</h1>
                  <div className="px-2 py-3">
                    <label htmlFor="botname" className="text-xs text-[#2f4050] font-bold">Bot name</label>
                    <input type="text" name="botname" id="botname" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050] focus:outline-none focus:border focus:border-[#2f4050] focus:outline-none focus:border focus:border-[#2f4050] "  placeholder="Enter Bot Name" />
                  </div>
              
              </div>

              <div class=" py-4 bg-white rounded-md">
                  <h1 className="border-b border-[#cfdae0] text-lg text-[#2f4050] font-bold px-4 py-3">Pairs</h1>
                  <div className="px-2 py-3">
                    <label htmlFor="pairs" className="text-xs text-[#2f4050] font-bold">Pairs</label>
                    {/* <input type="text" name="botname" id="botname" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]" value="" placeholder="Enter Bot Name" /> */}
                    <select name="pairs" id="pairs" className="border border-[#cfdae0] mt-1 rounded py-2 px-4 w-full bg-white focus:outline-none focus:border focus:border-[#2f4050]">
                  <option value="">Pairs</option>
                  <option value="">udt/sf</option>
                </select>
                  </div>
              </div>

              <div class=" py-4 bg-white rounded-md">
                  <h1 className="border-b border-[#cfdae0] text-lg text-[#2f4050] font-bold px-4 py-3">Base Order</h1>
                  <div className="px-2 py-3">
                    <label htmlFor="baseordersize" className="text-xs text-[#2f4050] font-bold">Base Order Size</label>
                    <input type="number" name="baseordersize" id="baseordersize" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Base Order Size" />
                  </div>
              
              </div>
              
              <div class=" py-4 bg-white rounded-md">
                  <h1 className="border-b border-[#cfdae0] text-lg text-[#2f4050] font-bold px-4 py-3">Safety Order </h1>
                  <div className="px-2 py-3 space-y-4">
                    <div>
                    <label htmlFor="safetyordersize" className="text-xs text-[#2f4050] font-bold">Safety Order Size</label>
                    <input type="number" name="safetyordersize" id="safetyordersize" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Safety Order Size" />
                    </div>

                    <div>
                    <label htmlFor="maxsafetyorder" className="text-xs text-[#2f4050] font-bold">Max Safety Orders</label>
                    <input type="number" name="maxsafetyorder" id="maxsafetyorder" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Max Safety Orders" />
                    </div>
                    
                    <div>
                    <label htmlFor="safetyorderprice" className="text-xs text-[#2f4050] font-bold">Safety Order Price Deviation</label>
                    <input type="number" name="safetyorderprice" id="safetyorderprice" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Safety Order Price Deviation" />
                    </div>

                    <div>
                    <label htmlFor="safetyordervolume" className="text-xs text-[#2f4050] font-bold">Safety Order Volume Scale</label>
                    <input type="number" name="safetyordervolume" id="safetyordervolume" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Safety Order Volume Scale" />
                    </div>
                    
                    <div>
                    <label htmlFor="safetyorderstep" className="text-xs text-[#2f4050] font-bold">Safety Order Step Scale</label>
                    <input type="number" name="safetyorderstep" id="safetyorderstep" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Safety Order Step Scale" />
                    </div>

                  </div>
              
              </div>
             
              <div class=" py-4 bg-white rounded-md">
                <h1 className="border-b border-[#cfdae0] text-lg text-[#2f4050] font-bold px-4 py-3">Profit</h1>
                <div className="px-2 py-3">
                  <label htmlFor="targetprofit" className="text-xs text-[#2f4050] font-bold">Target Profit</label>
                  <input type="number" name="targetprofit" id="targetprofit" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]" value="" placeholder="Enter Target Profit %" />
                </div>
            
              </div>

              <div class=" py-4 bg-white rounded-md">
                <h1 className="border-b border-[#cfdae0] text-lg text-[#2f4050] font-bold px-4 py-3">Safety Order </h1>
                <div className="px-2 py-3 space-y-4">
                  <div>
                  <label htmlFor="maxdeals" className="text-xs text-[#2f4050] font-bold">Max Deals</label>
                  <input type="number" name="maxdeals" id="maxdeals" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Max Deals" />
                  </div>

                  <div>
                  <label htmlFor="maxpairs" className="text-xs text-[#2f4050] font-bold">Max Pairs</label>
                  <input type="number" name="maxpairs" id="maxpairs" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Max Pairs" />
                  </div>
                  
                  <div>
                  <label htmlFor="maxpairsdeal" className="text-xs text-[#2f4050] font-bold">Max Pairs Deals</label>
                  <input type="number" name="maxpairsdeal" id="maxpairsdeal" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Max Pairs Deals" />
                  </div>

                  <div>
                  <label htmlFor="minimumvol" className="text-xs text-[#2f4050] font-bold">Minimum 24h Volume</label>
                  <input type="number" name="minimumvol" id="minimumvol" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Minimum 24h Volume / in Million" />
                  </div>
                  
                  <div>
                  <label htmlFor="cooldowndeals" className="text-xs text-[#2f4050] font-bold">Cooldown Between Deals</label>
                  <input type="number" name="cooldowndeals" id="cooldowndeals" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="Enter Cooldown Between Deals / in Seconds" />

                  </div>

                </div>
            
              </div>

              <div class=" py-4 bg-white rounded-md">
                  <h1 className="border-b border-[#cfdae0] text-lg text-[#2f4050] font-bold px-4 py-3">Order</h1>
                  <div className="px-2 py-3">
                    <label htmlFor="ordertype" className="text-xs text-[#2f4050] font-bold">Order Type</label>
                    <select name="ordertype" id="ordertype" className="border border-[#cfdae0] mt-1 rounded py-2 px-4 w-full bg-white focus:outline-none focus:border focus:border-[#2f4050]">
                      <option value="">MARKET</option>
                      <option value="">LIMIT</option>
                    </select>
                  </div>
              </div>

              <div class=" py-4 bg-white rounded-md">
                  <h1 className="border-b border-[#cfdae0] text-lg text-[#2f4050] font-bold px-4 py-3">Condition</h1>
                  <div className="px-2 py-3">
                    <label htmlFor="ordertype" className="text-xs text-[#2f4050] font-bold">Start Condition</label>
                    <select name="ordertype" id="ordertype" className="border border-[#cfdae0] mt-1 rounded py-2 px-4 w-full bg-white focus:outline-none focus:border focus:border-[#2f4050]">
                      <option value="">Open new trade ASAP</option>
                      <option value="">Manually/Api</option>
                    </select>
                  </div>
              </div>

              <div class=" py-4 bg-white rounded-md">
                  <h1 className="flex items-center text-lg text-[#2f4050] font-bold px-4 py-2">Enabled
                  <span className="px-6">
                  {/* <div class="inline-flex items-center"> */}
                    <div class="relative w-8 h-4 rounded-full cursor-pointer">
                      <input id="switch-component" type="checkbox"
                        class="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-200 bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                        defaultChecked />
                      <label htmlFor="switch-component"
                        class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900">
                        <div class="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                          data-ripple-dark="true"></div>
                      </label>
                    </div>
                  {/* </div> */}
                  </span>
                  </h1>
              
              </div>

              <div class=" py-4">
                  <button className="w-full p-2 bg-[#2f4050] border border-[#2f4050] hover:bg-transparent hover:text-[#2f4050] text-white text-lg font-medium  rounded-md">Preview Bot</button>
              </div>

            </div>
              
        </div>
    </section>
    </>
  )
}

export default CreateDcaBot
