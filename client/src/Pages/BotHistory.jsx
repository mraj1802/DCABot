import React, { useState } from 'react'
import DetailModal from '../utils/DetailModal';
import { AiFillCloseSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';

const BotHistory = () => {
    const [isDetailModal, setdetailmodalopen] = useState(false);


    const DetailComponent = 
    (
        <>
            <div className="w-full flex justify-between items-center bg-[#1f2937] text-white font-medium py-1 text-start px-3">
            <h2>Order History ETH_USDT-3J31IJI-1703842368</h2>
            <span onClick={()=>setdetailmodalopen(!isDetailModal)}><AiFillCloseSquare fontSize={24}/></span>
            </div>
            <div>
            <table className="table-auto text-center w-full">
                <thead className="text-sm font-medium">
                  <tr className="">
                    <th className="border py-1"></th>
                    <th className="border">Date</th>
                    <th className="border">Price</th>
                    <th className="border">Qty</th>
                    <th className="border">Amount</th>
                    <th className="border">Sum(qty)</th>
                    <th className="border">Sum($)</th>
                  </tr>
                </thead>
                <tbody className="text-[13px]">
                  <tr className="py-10 hover:bg-gray-200 cursor-pointer" >
                    <td className="py-1">2</td>
                    <td>2024-01-02 05:14 PM</td>
                    <td>$2384.41</td>
                    <td>0.018872</td>
                    <td>$45.2</td>
                    <td>0.02715</td>
                    <td>$65.29</td>
                  </tr>
                </tbody>
              </table>
            </div>
     
        </>
    )

  return (
    <>
      <section className=" bg-gray-100 min-h-[966px] h-full">
        <div className="flex flex-col items-center py-4 px-4">
          <div className="w-full space-y-6 rounded-lg  text-black">
            <div className="flex flex-col justify-center items-center gap-4 bg-[#1f2937] py-4 rounded-lg">
              <h1 className="text-white text-2xl font-medium">
                DCA Bot Deals History
              </h1>
              <div className="flex gap-6 items-center text-gray-300">
                <p className="">
                    Total P/L : <span className="text-green-600">$2.01</span>
                </p>
                <p className="">Deals: 6</p>
              </div>
              <div className="text-gray-300 flex gap-4">
                <div className="flex gap-1">
                    <label htmlFor="bot" className="">Bot : </label>
                    <input type="text" className="w-28 focus:outline-none rounded-sm text-[#1f2937] px-1"/>
                </div>
                <div>
                    <button className="bg-gray-300 border border-gray-300 hover:opacity-70 text-[#1f2937] rounded-md text-sm py-0.5 px-3">Search</button>
                </div>
              </div>
              <div className="absolute top-32 left-8 text-white hover:text-gray-300" >
                <Link to="/">
                <IoHomeSharp  fontSize={20}/>
                </Link>
              </div>
            </div>

            <div>
              <table className="table-auto text-center w-full">
                <thead className="text-sm font-medium">
                  <tr className="bg-gray-300">
                    <th className="border py-2">Date</th>
                    <th className="border">Bot Name</th>
                    <th className="border">Deal ID</th>
                    <th className="border">Pair</th>
                    <th className="border">Duration</th>
                    <th className="border">Profit</th>
                    <th className="border">Profit %</th>
                    <th className="border">Safety Orders</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-100 text-[13px]">
                  <tr className="py-10 hover:bg-gray-200 cursor-pointer" onClick={() => setdetailmodalopen(!isDetailModal)}>
                    <td className="py-2">2023-12-29 03:09 PM</td>
                    <td>ETH9</td>
                    <td>ETH-USDT-637DOEL-1704184049</td>
                    <td>ETH/USDT</td>
                    <td>28m 13s</td>
                    <td>$0.47</td>
                    <td>$1.9</td>
                    <td>$1</td> 
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {isDetailModal && <DetailModal childcomponent={DetailComponent}/>}
    </>
  )
}

export default BotHistory
