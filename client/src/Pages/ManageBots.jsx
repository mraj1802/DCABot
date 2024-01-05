import React, { useState } from 'react'
import ModalComponent from '../utils/ModalComponent';
import { IoHomeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const ManageBots = () => {
    const [isModalOpen, setisModalOpen] = useState(false);

    const handlemodal=()=>
    {
        setisModalOpen(!isModalOpen)
    }


    const enableDisableComp = (
        <>
          <div className="text-start">
            <p>
              Enable test? 
            </p>
          </div>
          <div className="w-full flex justify-end gap-6">
            <button className="px-8 py-2 bg-green-600 border border-1 border-green-600 text-white font-medium rounded-md hover:text-green-600 hover:bg-transparent "
             onClick={() => setisModalOpen(!isModalOpen)}>
              Enable Bot
            </button>
            <button
              className="px-8 py-2 bg-[#1f2937] border border-1 border-[#1f2937] text-white font-medium rounded-md hover:text-[#1f2937] hover:bg-transparent "
              onClick={() => setisModalOpen(!isModalOpen)}
            >
              Cancel
            </button>
          </div>
        </>
      );
  return (
    <>
        <section className="-z-50 bg-gray-100 min-h-[966px] h-full">
        <div className="flex flex-col items-center py-4 px-4">
            <div className="w-full space-y-6 rounded-lg  text-black">
                <div className="flex flex-col justify-center items-center gap-2 bg-[#1f2937] py-4 rounded-lg">
                    <h1 className="text-white text-2xl font-medium">DCA Bots</h1>
                    <div className="flex gap-3 items-center">
                        <div className="inline-flex items-center">
                            <div className="relative w-8 h-4 rounded-full cursor-pointer">
                            <input id="switch-component" type="checkbox"
                                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-200  checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-600"
                                defaultChecked />
                            <label htmlFor="switch-component"
                                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900">
                                <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                                data-ripple-dark="true"></div>
                            </label>
                            </div>
                        </div>
                        <p className="text-gray-300">Show Active</p>

                    </div>
                    <div className="absolute top-20 left-8 text-white hover:text-gray-300" >
                    <Link to="/">
                    <IoHomeSharp  fontSize={20}/>
                    </Link>
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
                                <td className="flex justify-center items-center py-2">
                                    <label className="relative  cursor-pointer" >
                                    <input type="checkbox" value="" className="sr-only peer" onChange={handlemodal}/>
                                    <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:start-[1px] border-gray-600 after:bg-gray-400 after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                                    </label>
                                </td>
                            </tr>                           
                                                     
                        </tbody>
                    </table>
                        
                </div>
            </div>
                
        </div>
        </section>
        {isModalOpen && <ModalComponent customComponent={enableDisableComp}/>}
    </>
  )
}

export default ManageBots
