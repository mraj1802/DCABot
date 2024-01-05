import React from 'react'
import { MdEdit } from "react-icons/md";


const ActiveBot = () => {
  return (
    <>
        <section className="py-6 bg-gray-100 min-h-[966px] h-full">
            <div className="flex flex-col items-center  px-8 py-2">
                <div className="w-full space-y-6 rounded-lg  text-black">
                    <div className="flex flex-col justify-center items-center gap-2 bg-[#1f2937] py-4 rounded-lg">
                        <h1 className="text-white text-2xl font-medium">Active DCA Bot Deals</h1>
                        <div className="flex gap-6 items-center text-gray-300">
                            <p className="">In Deals: $60.28</p>
                            <p className="">Deals: 3</p>
                            <p className="">Active P/L:<span className="text-green-600">$NaN</span></p>
                        </div>
                    </div>

                    <div className="">
                    <table className="table-auto text-center w-full">
                        <thead className="text-sm font-medium">
                        <tr className="bg-gray-300">
                            <th className="border py-2">Bot Name</th>
                            <th className="border">Deals ID</th>
                            <th className="border">Pair</th>
                            <th className="border">Duration</th>
                            <th className="border">Price</th>
                            <th className="border">Price Target</th>
                            <th className="border">Volume </th>
                            <th className="border">Profit</th>
                            <th className="border">Profit %</th>
                            <th className="border">TP</th>
                            <th className="border">Safety Orders</th>
                            <th className="border">Deals</th>
                            <th className="border"></th>
                            
                        </tr>
                        </thead>
                        <tbody className="bg-gray-100 text-[13px]">
                            <tr className="py-10 hover:bg-gray-200 cursor-pointer">
                                <td className="py-2">Test</td>
                                <td>ETH-USDT-637DOEL-1704184049</td>
                                <td>ETH/USDT</td>
                                <td>2h 28m 13s</td>
                                <td>$2397</td>
                                <td>$20</td>
                                <td>$0.15</td>
                                <td>1.5%</td>
                                <td>0/6</td>
                                <td>2/infi</td>
                                <td>ASAP</td> 
                                <td>
                                    <span><MdEdit/></span>
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

export default ActiveBot
