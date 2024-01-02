import React from 'react'

const ManageBots = () => {
  return (
    <>
        <section class="py-6 bg-gray-100 min-h-[966px] h-full">
        <div class="flex flex-col items-center  px-8 py-2">
            <div class="w-full space-y-6 rounded-lg  text-black">
                <div class="flex flex-col justify-center items-center gap-2 bg-[#2f4050] py-4 rounded-lg">
                    <h1 className="text-white text-2xl font-medium">DCA Bots</h1>
                    <div className="flex gap-3 items-center">
                        <div class="inline-flex items-center">
                            <div class="relative w-8 h-4 rounded-full cursor-pointer">
                            <input id="switch-component" type="checkbox"
                                class="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-200  checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-600"
                                defaultChecked />
                            <label htmlFor="switch-component"
                                class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900">
                                <div class="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                                data-ripple-dark="true"></div>
                            </label>
                            </div>
                        </div>
                        <p className="text-white">Show Active</p>

                    </div>
                </div>

                <div className="">
                <table className="table-auto text-center w-full">
                        <thead className="text-sm font-medium">
                        <tr className="bg-gray-300">
                            <th className="border py-2">Bot Name</th>
                            <th className="border">Pair</th>
                            <th className="border">Bo</th>
                            <th className="border">So</th>
                            <th className="border">Max So</th>
                            <th className="border">Deviation</th>
                            <th className="border">Volume Scale</th>
                            <th className="border">Step Scale</th>
                            <th className="border">TP%</th>
                            <th className="border">Max Deals</th>
                            <th className="border">Start</th>
                            <th className="border">Sandbox</th>
                            <th className="border">Active</th>
                        </tr>
                        </thead>
                        <tbody className="bg-gray-100 text-[13px]">
                            <tr className="py-10 hover:bg-gray-200 cursor-pointer">
                                <td className="py-2">Test</td>
                                <td>ETH/USDT</td>
                                <td>20</td>
                                <td>45</td>
                                <td>6</td>
                                <td>1.3</td>
                                <td>1.08</td>
                                <td>1</td>
                                <td>1.5</td>
                                <td>infi</td>
                                <td>ASAP</td>
                                <td>NO</td>
                                <td className="flex justify-center items-center">
                                <label class="relative flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer"/>
                                <div class="w-10 h-5 bg-gray-300 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:start-[1px] border-gray-600 after:bg-gray-400 after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                                </label>
                                </td>
                            </tr>                           
                        </tbody>
                    </table>
                       
                </div>
            </div>
              
        </div>
    </section>
    </>
  )
}

export default ManageBots
