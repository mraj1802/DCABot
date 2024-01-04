import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const LiveLogs = () => {
  return (
    <>
      <section className=" bg-gray-100 min-h-[966px] h-full">
        <div className="flex flex-col items-center py-4 px-4">
            <div className="w-full space-y-6 rounded-lg  text-black">
                <div className="flex flex-col justify-center items-center gap-3 bg-[#1f2937] py-4 rounded-lg">
                    <h1 className="text-white text-2xl font-medium">SymBot Realtime Logs</h1>
                    <div className="absolute top-10 left-8 text-white hover:text-gray-300" >
                      <Link to="/">
                      <IoHomeSharp  fontSize={20}/>
                      </Link>
                  </div>
                </div>
                <div className="bg-gray-200 border-t border-l border-r border-gray-300 text-sm">
                    <li className="list-none py-2 px-2 border-b border-gray-300 hover:bg-gray-300">2024-01-03T11:33:04.346Z Pair: ETH/USDT Last Price: $2333.58 DCA Price: $2366.64 Target: $2402.14 Next Order: $2300.93 Profit: -1.40%</li>
                    <li className="list-none py-2 px-2 border-b border-gray-300 hover:bg-gray-300">2024-01-03T11:33:04.346Z Pair: ETH/USDT Last Price: </li>
                    <li className="list-none py-2 px-2 border-b border-gray-300 hover:bg-gray-300">2024-01-03T11:33:04.346Z Pair: ETH/USDT Last Price: $2333.58 DCA Price: $2366.64 Target:</li>
                </div>
               
            </div>
                
        </div>
        </section> 
    </>
  )
}

export default LiveLogs
