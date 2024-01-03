import React from 'react'
import { AiFillCloseSquare } from "react-icons/ai";


const EditModal = ({iseditmodalopen ,setiseditmodalopen}) => {
  return (
    <div className="w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5">
    <div className="w-[80%] h-fit gap-5 bg-white flex flex-col text-center">
      <div className="w-full flex justify-between items-center bg-[#1f2937] text-white font-medium py-1 text-start px-3">
        <h2>Deal Id:</h2>
        <span onClick={()=>setiseditmodalopen(!iseditmodalopen)}><AiFillCloseSquare fontSize={24}/></span>
      </div>
      <div className="w-[20%] mx-auto flex gap-12 justify-center pb-12 ">
      <form action="" className="flex flex-col space-y-3 py-5">
            <div className="space-y-4 text-black text-start">
                <div>
                    <label htmlFor="targetprofit" className="text-xs text-gray-400 font-bold">Target Profit %</label>
                    <input type="number" name="targetprofit" id="targetprofit" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-2 w-full focus:outline-none focus:border focus:border-black" />
                </div>

                <div>
                    <label htmlFor="maxsafetyorder" className="text-xs text-gray-400 font-bold">Max Safety Orders</label>
                    <input type="number" name="maxsafetyorder" id="maxsafetyorder" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-2 w-full focus:outline-none focus:border focus:border-[#9a9ea0]"   />
                </div>
                <div className="flex gap-5">
                    <label className=" text-[#1f2937]">Last Deal:</label>
                    <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                </div>
            </div>
            <div className=" pt-5 ">
                <button className="w-full p-2 bg-[#1f2937] border border-1 border-[#1f2937] text-white  hover:text-[#1f2937] hover:bg-transparent  text-lg font-medium  rounded-md">Update Deal</button>
            </div>
        </form>
        
      </div>
    </div>
    </div>
  )
}

export default EditModal
