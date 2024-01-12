import React from "react";
import { MdOutlineClose } from "react-icons/md";

const EditModal = ({
  isEditModalOpen,
  setEditModalOpen,
  updateDealData,
  setUpdateDealData,
  handleUpdate,
}) => {
  // const handleUpdate=(e)=>
  // {
  //   e.preventDefault()
  //   // console.log("valueee",e.target.elements.targetprofit.value)
  //   setUpdateDealData(e.target.elements.targetprofit.value)
  //   setEditModalOpen(false)
  // }

  return (
    <div className="w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5">
      <div className="2xl:w-[25%] xl:w-[30%] lg:w-[35%] md:w-[50%] sm:w-[90%] h-fit gap-5 bg-white flex flex-col text-center rounded-md shadow-lg">
        <div className="w-full flex justify-end items-center  text-white font-medium pt-3 text-start px-3">
          {/* <h2>Deal Id:</h2> */}
          <span onClick={() => setEditModalOpen(!isEditModalOpen)}>
            <MdOutlineClose className="text-gray-700" fontSize={22} />
          </span>
        </div>
        <div className="px-20 mx-auto flex gap-12 justify-center pb-12 ">
          <form
            onSubmit={handleUpdate}
            className="flex flex-col space-y-2 py-2"
          >
            <div className=" text-black text-start">
              <div>
                <label
                  htmlFor="targetprofit"
                  className="text-xs text-gray-400 font-bold"
                >
                  Target Profit %
                </label>
                <input
                  type="number"
                  name="targetprofit"
                  id="targetprofit"
                  className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-2 w-full focus:outline-none focus:border focus:border-black"
                />
              </div>

              {/* <div>
                    <label htmlFor="maxsafetyorder" className="text-xs text-gray-400 font-bold">Max Safety Orders</label>
                    <input type="number" name="maxsafetyorder" id="maxsafetyorder" className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-2 w-full focus:outline-none focus:border focus:border-[#9a9ea0]"   />
                </div> */}
              {/* <div className="flex gap-5">
                    <label className=" text-[#1f2937]">Last Deal:</label>
                    <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                </div> */}
            </div>
            <div className=" pt-5 ">
              <button className="w-full p-2 bg-blue-600 border border-1 border-blue-600 text-white  hover:text-blue-600 hover:bg-transparent  text-lg font-medium  rounded-md">
                Update Deal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
