import React, { useEffect, useMemo, useState } from "react";
import PreviewOrderModel from "./PreviewOrderModel";
import Select, { components } from "react-select";
import { SiEthereum } from "react-icons/si";
import { SiBitcoinsv } from "react-icons/si";
import axios from "axios";
import "../custom.css";

const CreateDcaBot = () => {

  const initialFormData = {
    botName: "",
    pair: "",
    baseOrder: "",
    safetyOrd: "",
    maxSafetyOrd: "",
    priceDeviation: "",
    volume: "",
    type: "MARKET",
    startCondition: "Open new trade ASAP",
  };

  const [calculatedData, setCalculatedData] = useState([]);
  const [formData, setFormData] = useState({ ...initialFormData });
  const [submittedData, setSubmittedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState(pair[0]);

  const pair = [
    {
      value: "BTC/USDT",
      label: "BTC/USDT",
      icon: <SiBitcoinsv className="text-yellow-500 text-lg" />,
    },
    {
      value: "ETH/USDT",
      label: "ETH/USDT",
      icon: <SiEthereum className="text-gray-800 text-lg" />,
    },
  ];

  const Option = (props) => (
      <components.Option {...props} className="bg-red-300">
        <div className="flex items-center gap-2 h-3">
          {props.data.icon}
          {props.data.label}
        </div>
      </components.Option>
  );

  const SingleValue = ({ children, ...props }) => (
      <components.SingleValue {...props}>
        <div className="flex items-center gap-2 focus:outline-none">
          {selectedPair.icon}
          {children}
        </div>
      </components.SingleValue>
  );

  const handleChange = (value) => {
    setSelectedPair(value);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      pair: selectedPair.value,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8080/api/bot/orderlist', formData);
    setCalculatedData(res.data.orderList);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setCalculatedData([]);
    setIsModalOpen(false);
  };

  const handleModify = () => {
    setCalculatedData([]);
    setIsModalOpen(false);
  };

  return (
      <>
        <section className=" 3xl:py-16 2xl:py-10 xl:py-12 lg:py-14 md:py-12 dsm:py-10 sm:py-8 ">
          <div className="flex flex-col items-center md:px-8 dsm:px-8 px-4 py-2 mx-auto lg:py-0">
            <div className="2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[80%] sm:w-[90%] space-y-6 rounded-lg border border-gray-300 shadow-md text-black p-8 ">
              <h1 className="text-center border-b border-[#9a9ea0] text-xl text-gray-700 font-bold px-4 pb-4">
                CREATE DCA BOT
              </h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-10 ">
                  <div>
                    <label
                        htmlFor="botName"
                        className="text-xs text-gray-400 font-bold"
                    >
                      Bot name
                    </label>
                    <input
                        type="text"
                        name="botName"
                        id="botName"
                        value={formData.botName}
                        onChange={handleInputChange}
                        className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                        placeholder="Enter Bot Name"
                    />
                  </div>

                  <div>
                    <label
                        htmlFor="pair"
                        className="text-xs text-gray-400 font-bold"
                    >
                      pair
                    </label>
                    <Select
                        className="custom-select"
                        value={selectedPair}
                        options={pair}
                        autoFocus
                        onChange={handleChange}
                        classNames={{
                          control: (state) =>
                              state.isFocused ? "border-red-600" : "border-green-300",
                        }}
                        styles={{
                          singleValue: (base) => ({
                            ...base,
                            display: "flex",
                            alignItems: "center",

                          })
                        }}
                        components={{
                          Option,
                          SingleValue,
                        }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10 ">
                  <div>
                    <label
                        htmlFor="baseOrder"
                        className="text-xs text-gray-400 font-bold"
                    >
                      Base Order Size
                    </label>
                    <input
                        type="number"
                        name="baseOrder"
                        id="baseOrder"
                        value={formData.baseOrder}
                        onChange={handleInputChange}
                        className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                        placeholder="Enter Base Order Size"
                    />{" "}
                  </div>
                  <div>
                    <div>
                      <label
                          htmlFor="safetyOrd"
                          className="text-xs text-gray-400 font-bold"
                      >
                        Safety Order Size
                      </label>
                      <input
                          type="number"
                          name="safetyOrd"
                          id="safetyOrd"
                          value={formData.safetyOrd}
                          onChange={handleInputChange}
                          className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                          placeholder="Enter Safety Order Size"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10 ">
                  <div>
                    <label
                        htmlFor="maxSafetyOrd"
                        className="text-xs text-gray-400 font-bold"
                    >
                      Max Safety Orders
                    </label>
                    <input
                        type="number"
                        name="maxSafetyOrd"
                        id="maxSafetyOrd"
                        value={formData.maxSafetyOrd}
                        onChange={handleInputChange}
                        className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                        placeholder="Enter Max Safety Orders"
                    />
                  </div>
                  <div>
                    <label
                        htmlFor="priceDeviation"
                        className="text-xs text-gray-400 font-bold"
                    >
                      Safety Order Price Deviation
                    </label>
                    <input
                        type="number"
                        name="priceDeviation"
                        id="priceDeviation"
                        value={formData.priceDeviation}
                        onChange={handleInputChange}
                        className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                        placeholder="Enter Safety Order Price Deviation"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <label
                        htmlFor="safetyOrderVolume"
                        className="text-xs text-gray-400 font-bold"
                    >
                      Safety Order Volume Scale
                    </label>
                    <input
                        type="number"
                        name="safetyOrderVolume"
                        id="safetyOrderVolume"
                        value={formData.safetyOrderVolume}
                        onChange={handleInputChange}
                        className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                        placeholder="Enter Safety Order Volume Scale"
                    />
                  </div>

                  <div>
                    <label
                        htmlFor="safetyOrderStep"
                        className="text-xs text-gray-400 font-bold"
                    >
                      Safety Order Step Scale
                    </label>
                    <input
                        type="number"
                        name="safetyOrderStep"
                        id="safetyOrderStep"
                        value={formData.safetyOrderStep}
                        onChange={handleInputChange}
                        className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                        placeholder="Enter Safety Order Step Scale"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <label
                        htmlFor="targetProfit"
                        className="text-xs text-gray-400 font-bold"
                    >
                      Target Profit
                    </label>
                    <input
                        type="number"
                        name="targetProfit"
                        id="targetProfit"
                        value={formData.targetProfit}
                        onChange={handleInputChange}
                        className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                        placeholder="Enter Target Profit %"
                    />
                  </div>
                  <div>
                    <label
                        htmlFor="type"
                        className="text-xs text-gray-400 font-bold"
                    >
                      Order Type
                    </label>
                    <select
                        name="type"
                        id="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1.5 px-4 w-full focus:outline-none focus:border focus:border-black"
                    >
                      <option className="text-black">MARKET</option>
                      <option className="text-black">LIMIT</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-10 ">
                  <div>
                    <label
                        htmlFor="startCondition"
                        className="text-xs text-gray-400 font-bold"
                    >
                      Start Condition
                    </label>
                    <select
                        name="startCondition"
                        id="startCondition"
                        value={formData.startCondition}
                        onChange={handleInputChange}
                        className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1.5 px-4 w-full focus:outline-none focus:border focus:border-black"
                    >
                      <option className="text-black">Open new trade ASAP</option>
                      <option className="text-black">Manually/Api</option>
                    </select>
                  </div>
                </div>
                <div className=" py-4">
                  <button className="w-full p-2 text-white bg-blue-600 border border-blue-600 hover:bg-transparent  hover:text-blue-600 text-lg font-medium  rounded-md">
                    Preview Bot
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <PreviewOrderModel
            isOpen={isModalOpen}
            onClose={closeModal}
            submittedData={submittedData}
            onModify={handleModify}
            calculateData={calculatedData}
        />
      </>
  );
};

export default CreateDcaBot;