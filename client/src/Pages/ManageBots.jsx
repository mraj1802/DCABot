import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiTimer } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Toast } from "../utils/toast";
import EditModal from "../utils/EditModal";
import DeleteModal from "../utils/DeleteModal";

const ManageBots = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);
  const [updateDealData, setUpdateDealData] = useState();
  // const [isConfirm, setConfirm] = useState(false);
  const [bots, setBots] = useState([]);

  const handleEditClick = (bot) => {
    setSelectedBot(bot);
    // console.log("selected edit bot",bot)
    setEditModalOpen(true);
  };

  const handleDeleteClick = (bot) => {
    setSelectedBot(bot);
    setDeleteModal(true);
  };

  const closeModal = () => {
    setEditModalOpen(false);
    setSelectedBot(null);
  };

  const fetchAllBot = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/bot/all");
      if (res.status === 200) {
        setBots(res.data.data);
      }
    } catch (error) {
      console.log("error in fetchAllBot function.", error);
    }
  };

  const handleStartBot = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8080/api/bot/start/${id}`);
      if (res.status === 200) {
        fetchAllBot();
        Toast.success(res.data.msg);
      }
    } catch (error) {
      Toast.error(error.response.data.msg);
      console.log("error in the handle start bot.", error);
    }
  };

  const handleDeleteBot = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/bot/delete/${id}`
      );
      if (res.status === 200) {
        fetchAllBot();
        Toast.success(res.data.msg);
      }
    } catch (error) {
      fetchAllBot();
      Toast.error(error.response.data.msg);
      console.log("error in the handle start bot.", error);
    }
  };

  useEffect(() => {
    fetchAllBot();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("valueee update", e.target.elements.targetprofit.value);
    console.log("selected bot",selectedBot)
    setUpdateDealData(e.target.elements.targetprofit.value);
    setEditModalOpen(false);
  };

  const handleDelete = async() => {
   console.log("selected delete bot",selectedBot._id)
   setDeleteModal(false)
   try {
    const res = await axios.delete(
      `http://localhost:8080/api/bot/delete/${selectedBot._id}`
    );
    if (res.status === 200) {
      fetchAllBot();
      Toast.success(res.data.msg);
      setSelectedBot(null)
    }
  } catch (error) {
    fetchAllBot();
    Toast.error(error.response.data.msg);
    console.log("error in the handle start bot.", error);
  }
  };
  return (
    <>
      <section className="flex flex-col items-center py-6 px-4">
        <div className="w-full space-y-6 rounded-lg text-black">
          {/* <div className="flex flex-col justify-center items-center gap-2  py-6 rounded-lg"> */}
          {/* <h1 className="text-Black text-2xl font-medium">DCA Bots</h1> */}
          {/* <div className="flex gap-3 items-center">
                <div className="inline-flex items-center">
                <div className="relative w-8 h-4 rounded-full cursor-pointer">
                    <input
                       id="switch-component"
                       type="checkbox"
                       className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-200  checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-600"
                       defaultChecked
                     />
                     <label
                       htmlFor="switch-component"
                       className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                    >
                       <div
                        className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                         data-ripple-dark="true"
                      ></div>
                    </label>
                   </div> 
                </div>
                <p className="text-gray-300">Show Active</p>
              </div> */}
          {/* </div> */}
          {bots.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-5">
              {bots &&
                bots?.map((bot, index) => (
                  <div
                    key={index}
                    className="block max-w-[35rem] rounded-lg border border-success bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:border-success-300"
                  >
                    <div className="border-b-2 border-success px-6 py-3 text-neutral-600 dark:border-success-300 dark:text-neutral-50 relative">
                      <div className="flex justify-between">
                        <h2 className="text-xl font-medium ml-3">
                          {bot.config["botName"]}
                        </h2>
                        <p className="mt-7 text-base">created: {bot.date}</p>
                      </div>

                      <div className="absolute top-0 right-0 flex items-center space-x-4 pr-3 pt-2 pb-2 text-2xl">
                        {/* <span className="text-gray-500 cursor-pointer">
                        <CiTimer />
                      </span> */}

                        <div className="flex gap-3 items-center">
                          <div className="inline-flex items-center">
                            <div className="relative w-8 h-4 rounded-full cursor-pointer">
                              <input
                                type="checkbox"
                                id={`switch-component-${bot._id}`}
                                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-200  checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:before:bg-blue-600"
                                checked={bot.active}
                                onChange={() => handleStartBot(bot._id)}
                              />
                              <label
                                htmlFor={`switch-component-${bot._id}`}
                                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                              >
                                <div
                                  className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                                  data-ripple-dark="true"
                                ></div>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* <span className=" cursor-pointer text-green-600">
                        <CiEdit />
                      </span> */}
                        <div
                          className="group relative"
                          onClick={() => handleEditClick(bot)}
                        >
                          <span className="hidden group-hover:block bg-gray-500 text-white text-sm p-3 rounded-md absolute top-6 right-0 ">
                            Edit Bot
                          </span>
                          <span className="cursor-pointer text-green-600">
                            <CiEdit />
                          </span>
                        </div>

                        <div
                          className="group relative"
                          //  onClick={() => handleDeleteBot(bot._id)}
                          onClick={() => handleDeleteClick(bot)}
                        >
                          <span className="hidden group-hover:block bg-gray-500 text-white text-sm p-3 rounded-md absolute top-6 right-0 ">
                            Delete Bot
                          </span>
                          <span className="cursor-pointer text-red-600">
                            <MdDelete />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="cursor-pointer"
                      // onClick={() => handleCardClick(bot)}
                    >
                      <div className="p-5 ml-1">
                        <div className="flex justify-between p-2">
                          <span>Symbol</span>
                          <p className="text-end">{bot.config["pair"]}</p>
                        </div>
                        <div className="flex justify-between p-2">
                          <span>Amount</span>
                          <p className="text-end">
                            {bot.config["safetyOrderVolume"]} USD
                          </p>
                        </div>
                        <div className="flex justify-between p-2">
                          <span>Close Deals</span>
                          <p className="text-end">$9.07</p>
                        </div>
                        <div className="flex justify-between p-2">
                          <span>Total Deals</span>
                          <p className="text-end">{bot.orders.length}</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex items-center">
                          <div className="flex-1 border-t border-gray-300"></div>
                          <div className="mx-2 text-gray-500">Active Trade</div>
                          <div className="flex-1 border-t border-gray-300"></div>
                        </div>

                        <div className="flex p-3 text-sm">
                          <div className="flex-1 border-l-0 "></div>
                          <div className="flex flex-col justify-between items-center p-2 m-2 w-1/3">
                            <span className="text-gray-500 text-xs">
                              Last Entry filled
                            </span>
                            <p className="text-center text-gray-900"># 3/10</p>
                            <div className="flex items-center">
                              <span className="mr-2">
                                <CiTimer />
                              </span>
                              <p className="text-center text-gray-700">
                                4 hours ago
                              </p>
                            </div>
                          </div>

                          <div className="flex-1 border-l pl-2 border-gray-300"></div>
                          <div className="flex flex-col justify-between items-center p-2 m-2 w-1/3">
                            <span className="text-gray-500 text-xs">
                              Next Entry
                            </span>
                            <p className="text-center text-green-600">
                              (4.13%)
                            </p>
                            <p className="text-center text-gray-500">$65.44</p>
                          </div>
                          <div className="flex-1 border-l px-2  border-gray-300"></div>
                          <div className="flex flex-col justify-between items-center p-2 m-2 w-1/3">
                            <span className="text-gray-500 text-xs">
                              Take Profit
                            </span>
                            <p className="text-center text-red-600">(-1.94%)</p>
                            <p className="text-center text-gray-500">$61.36</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="w-[20%] m-auto flex justify-center items-center h-screen ">
              <p className="text-4xl">Bot Not Found.</p>
            </div>
          )}
        </div>
      </section>

      {/* {isEditModalOpen && selectedBot && (
        <div className="fixed top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center inset-0  bg-black bg-opacity-50">
          <div className="bg-gray-100 p-8 w-[30%] h-full overflow-y-auto fixed right-0">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-medium text-neutral-600">
                {selectedBot.name}
              </h2>
              <button
                onClick={closeModal}
                className="text-xl text-black cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )} */}
      {isEditModalOpen && (
        <EditModal
          isEditModalOpen={isEditModalOpen}
          setEditModalOpen={setEditModalOpen}
          updateDealData={updateDealData}
          setUpdateDealData={setUpdateDealData}
          handleUpdate={handleUpdate}
        />
      )}
      {isDeleteModal && (
        <DeleteModal
          isDeleteModal={isDeleteModal}
          setDeleteModal={setDeleteModal}
          // setConfirm={setConfirm}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};

export default ManageBots;
