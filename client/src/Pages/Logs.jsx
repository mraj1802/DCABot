import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Logs = () => {
  return (
    <>
       <section className=" bg-gray-100 min-h-[966px] h-full">
        <div className="flex flex-col items-center py-4 px-4">
            <div className="w-full space-y-6 rounded-lg  text-black">
                <div className="flex flex-col justify-center items-center gap-3 bg-[#1f2937] py-4 rounded-lg">
                    <h1 className="text-white text-2xl font-medium">SymBot Logs</h1>
                    <Link to="livelogs" className="text-blue-400 cursor-pointer list-none">View Live Logs</Link>
                    <div className="absolute top-20 left-8 text-white hover:text-gray-300" >
                      <Link to="/">
                      <IoHomeSharp  fontSize={20}/>
                      </Link>
                  </div>
                </div>
                <div className="2xl:w-[25%] xl:w-[25%] lg:w-[30%] md:w-[50%] sm:w-[90%]  mx-auto bg-white rounded-lg shadow-xl  md:mt-0  xl:p-0 text-black ">
                    <div className="h-[800px] px-4 py-8 overflow-y-scroll">
                    <div className="  py-3 border-b border-gray-300 hover:bg-gray-200 cursor-pointer rounded-md">
                        <li className="flex justify-between text-[16px] px-3">
                            <p className="text-blue-500 ">2024-01-03.log</p>
                            <p>2.26M</p>
                        </li>
                    </div>
                    <div className="  py-3 border-b border-gray-300 hover:bg-gray-200 cursor-pointer rounded-md">
                        <li className="flex justify-between text-[16px] px-3">
                            <p className="text-blue-500 ">2024-01-03.log</p>
                            <p>2.26M</p>
                        </li>
                    </div>
                    <div className="  py-3 border-b border-gray-300 hover:bg-gray-200 cursor-pointer rounded-md">
                        <li className="flex justify-between text-[16px] px-3">
                            <p className="text-blue-500 ">2024-01-03.log</p>
                            <p>2.26M</p>
                        </li>
                    </div>
                    <div className="  py-3 border-b border-gray-300 hover:bg-gray-200 cursor-pointer rounded-md">
                        <li className="flex justify-between text-[16px] px-3">
                            <p className="text-blue-500 ">2024-01-03.log</p>
                            <p>2.26M</p>
                        </li>
                    </div>
                    <div className="  py-3 border-b border-gray-300 hover:bg-gray-200 cursor-pointer rounded-md">
                        <li className="flex justify-between text-[16px] px-3">
                            <p className="text-blue-500 ">2024-01-03.log</p>
                            <p>2.26M</p>
                        </li>
                    </div>
                    <div className="  py-3 border-b border-gray-300 hover:bg-gray-200 cursor-pointer rounded-md">
                        <li className="flex justify-between text-[16px] px-3">
                            <p className="text-blue-500 ">2024-01-03.log</p>
                            <p>2.26M</p>
                        </li>
                    </div>
                   
                    
                    
                    
                </div>
            </div>
               
            </div>
                
        </div>
        </section>
    </>
  )
}

export default Logs
