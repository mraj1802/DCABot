import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { IoCloseSharp, IoHomeSharp } from "react-icons/io5";
import { GrStatusDisabledSmall } from "react-icons/gr";
import EditModal from "../utils/EditModal";
import ModalComponent from "../utils/ModalComponent";
import { AiFillCloseSquare } from "react-icons/ai";
import DetailModal from "../utils/DetailModal";
import { Link } from "react-router-dom";

const ActiveBot = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCloseModal, setIsCloseModalOpen] = useState(false);
  const [isDisableModal, setIsDisableModalOpen] = useState(false);
  const [isDetailModal, setDetailModalOpen] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  const closeDealComponent = (
    <>
      <div className="text-start flex flex-col gap-4">
        <p>Cancel deal ETH_USDT-637DOEL-1704184049?</p>
        <p>This will cancel and remove the active deal from any further trading without selling any assets already bought from previous orders</p>
        <div className="flex gap-3 items-center">
            <input
            type="checkbox"
            name="maxsafetyorder"
            id="maxsafetyorder"
            onChange={handleChange}
            className=" bg-transparent border border-[#9a9ea0] rounded px-2  focus:outline-none focus:border focus:border-[#9a9ea0]"
            />
            <label htmlFor="maxsafetyorder" className="text-base font-medium">
            Check the box to confirm <span className="text-red-600">CANCEL</span> deal
            </label>
        </div>
      </div>
      <div className="w-full flex justify-end gap-6">
      <button disabled={!isChecked} className={`${!isChecked ? "opacity-60" : "hover:bg-transparent hover:text-red-600"} px-8 py-2 bg-red-600 border border-1 border-red-600 text-white font-medium rounded-md  `}
      onClick={() => setIsCloseModalOpen(!isCloseModal)}>
          Close Deal
        </button>
        <button
          className="px-8 py-2 bg-[#1f2937] border border-1 border-[#1f2937] text-white rounded-md hover:text-[#1f2937] hover:bg-transparent "
          onClick={() => setIsCloseModalOpen(!isCloseModal)}
        >
          Cancel
        </button>{" "}
      </div>
    </>
  );
  const DisableDealComponent = (
    <>
      <div className="text-start">
        <p>
          Disable test? Current deals will continue running until they complete.
        </p>
      </div>
      <div className="w-full flex justify-end gap-6">
        <button className="px-8 py-2 bg-red-600 border border-1 border-red-600 text-white font-medium rounded-md hover:text-red-600 hover:bg-transparent "
        onClick={() => setIsDisableModalOpen(!isDisableModal)}>
          Disable Bot
        </button>
        <button
          className="px-8 py-2 bg-[#1f2937] border border-1 border-[#1f2937] text-white font-medium rounded-md hover:text-[#1f2937] hover:bg-transparent "
          onClick={() => setIsDisableModalOpen(!isDisableModal)}
        >
          Cancel
        </button>
      </div>
    </>
  );

  const DetailComponent = 
    (
        <>
            <div className="w-full flex justify-between items-center bg-[#1f2937] text-white font-medium py-1 text-start px-3">
            <h2>Order History ETH_USDT-637DOEL-1704184049</h2>
            <span onClick={()=>setDetailModalOpen(!isDetailModal)}><AiFillCloseSquare fontSize={24}/></span>
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
            <div className="flex flex-col justify-center items-center gap-2 bg-[#1f2937] py-4 rounded-lg">
              <h1 className="text-white text-2xl font-medium">
                Active DCA Bot Deals
              </h1>
              <div className="flex gap-6 items-center text-gray-300">
                <p className="">In Deals : $60.28</p>
                <p className="">Deals: 3</p>
                <p className="">
                  Active P/L : <span className="text-green-600">$NaN</span>
                </p>
              </div>
              <div className="absolute top-20 left-8 text-white hover:text-gray-300" >
                <Link to="/">
                <IoHomeSharp  fontSize={20}/>
                </Link>
              </div>
            </div>

            <div>
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
                  <tr className="py-10 hover:bg-gray-200 cursor-pointer" >
                    <td className="py-2" onClick={() => setDetailModalOpen(!isDetailModal)}>Test</td>
                    <td onClick={() => setDetailModalOpen(!isDetailModal)}>ETH-USDT-637DOEL-1704184049</td>
                    <td>ETH/USDT</td>
                    <td onClick={() => setDetailModalOpen(!isDetailModal)}>2h 28m 13s</td>
                    <td onClick={() => setDetailModalOpen(!isDetailModal)}>$2397</td>
                    <td onClick={() => setDetailModalOpen(!isDetailModal)}>$20</td>
                    <td onClick={() => setDetailModalOpen(!isDetailModal)}>$0.15</td>
                    <td onClick={() => setDetailModalOpen(!isDetailModal)}>1.5%</td>
                    <td onClick={() => setDetailModalOpen(!isDetailModal)}>0/6</td>
                    <td onClick={() => setDetailModalOpen(!isDetailModal)}>2/infi</td>
                    <td onClick={() => setDetailModalOpen(!isDetailModal)}>ASAP</td>
                    <td className=" flex items-center">
                      <div className="w-full flex items-center justify-between text-sm">
                        <span>
                          <MdEdit  onClick={() => setIsEditModalOpen(!isEditModalOpen)}/>
                        </span>
                        <span
                          className="text-lg font-extrabold"
                        >
                          <IoCloseSharp onClick={() => setIsCloseModalOpen(!isCloseModal)}/>
                        </span>
                        {/* <span><TbMoneybag fill/></span> */}
                        {/* <span className="font-bold">$+</span> */}
                        <span>
                          <GrStatusDisabledSmall onClick={() => setIsDisableModalOpen(!isDisableModal)}/>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {isEditModalOpen && (
        <EditModal
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />
      )}
      {isCloseModal && <ModalComponent customComponent={closeDealComponent} />}
      {isDisableModal && (
        <ModalComponent customComponent={DisableDealComponent} />
      )}
       {isDetailModal && <DetailModal childcomponent={DetailComponent}/>}

    </>
  );
};

export default ActiveBot;
