import React, { useEffect, useMemo, useState } from "react";
import PreviewOrderModel from "./PreviewOrderModel";
import Select, { components } from "react-select";
import { SiEthereum } from "react-icons/si";
import { SiBitcoinsv } from "react-icons/si";
import "../custom.css";
import axios from "axios";
import bot from "../config/bot.json";

const CreateDcaBot = () => {
  const [ethPrice, setEthPrice] = useState(null);
  const prices = useMemo(() => [], []);
  const amounts = useMemo(() => [], []);
  const qtys = useMemo(() => [], []);
  let deviationExceeded = false;
  const [calculatedData, setCalculatedData] = useState([]);
  const [loading, setLoading] = useState(false);

  const initialFormData = {
    botName: "",
    pairs: "" || bot["pairs"],
    baseOrderSize: "" || bot["baseOrderSize"],
    safetyOrderSize: "" || bot["safetyOrderSize"],
    maxSafetyOrder: "" || bot["maxSafetyOrder"],
    safetyOrderDeviation: "" || bot["safetyOrderDeviation"],
    safetyOrderVolume: "" || bot["safetyOrderVolume"],
    safetyOrderStep: "" || bot["safetyOrderStep"],
    targetProfit: "" || bot["targetProfit"],
    orderType: "" || bot["orderType"],
    startCondition: "" || bot["startCondition"],
    filled: 0,
  };

  console.log("bot....", bot);

  const calculatePrice = (deviation, basePrice) => {
    console.log("price...", deviation, basePrice);
    const result = basePrice - basePrice * (deviation / 100);
    return result;
  };

  const calculateDeviation = (deviation, index) => {
    console.log("deviation...", deviation, index);
    return deviation * index;
  };

  const calculateAverge = (prices) => {
    let sum = 0;
    const averages = prices.map((price, index) => {
      const numericPrice = parseFloat(price);
      sum += numericPrice;
      const average = sum / (index + 1);
      return average;
    });

    return isNaN(averages[averages.length - 1])
      ? "0.00"
      : averages[averages.length - 1].toFixed(2);
  };

  const calculateTarget = (average, target) => {
    const result = parseFloat(average) + average * (target / 100);
    return result;
  };

  const calculateAmount = (safetyorder, volume, index) => {
    let result = safetyorder * volume;

    for (let i = 1; i <= index - 2; i++) {
      result *= volume;
    }
    return result;
  };

  const calculateQty = (price, amount) => {
    const result = parseFloat(amount) / price;
    return result;
  };

  const calculateSumAmount = (
    amounts,
    currentIndex,
    baseorder,
    safetyorder
  ) => {
    let sum = 0;
    for (let i = 2; i <= currentIndex; i++) {
      const numericAmount = parseFloat(amounts[i]);
      const previousadd = parseFloat(baseorder) + parseFloat(safetyorder);
      sum += i === 2 ? numericAmount + previousadd : numericAmount;
    }
    return sum.toFixed(2);
  };

  const calculateSumQty = (qtys, index, baseorder, safetyorder, price) => {
    let sum = 0;
    for (let i = 2; i <= index; i++) {
      const numericQty = parseFloat(qtys[i].toFixed(5));
      const previousadd = parseFloat(
        parseFloat(baseorder) / price + parseFloat(safetyorder) / price
      ).toFixed(5);
      sum +=
        i === 2
          ? parseFloat(parseFloat(numericQty) + parseFloat(previousadd))
          : parseFloat(numericQty);
    }
    return sum;
  };

  // All calculation

  const calculateDcaBotData = async (formData, selectedPair) => {
    console.log("form data inside calculation----------", formData);
    for (let index = 0; index < formData.maxsafetyorder; index++) {
      const Deviation = calculateDeviation(
        formData.safetyorderdeviation,
        index
      );

      if (Deviation >= 100) {
        deviationExceeded = true;
        continue;
      }
      const basePrice = ethPrice;
      const price = calculatePrice(Deviation, basePrice);
      prices.push(price);
      const average = calculateAverge(prices);
      const target = calculateTarget(average, formData.targetprofit);
      const amount = calculateAmount(
        formData.safetyordersize,
        formData.safetyordervolume,
        index
      );
      const qty = calculateQty(price, amount);
      amounts.push(amount);
      qtys.push(qty);

      const sumamount = calculateSumAmount(
        amounts,
        index,
        formData.baseordersize,
        formData.safetyordersize
      );
      const sumQty = calculateSumQty(
        qtys,
        index,
        formData.baseordersize,
        formData.safetyordersize,
        price
      );

      console.log("dataEntry", Deviation, price);

      /* Array */
      const dataEntry = {
        no: index === 0 ? "Base Order" : index,
        deviation: `${Deviation} %`,
        price: `${parseFloat(price).toFixed(2)}`,
        average: `${average}`,
        target: `${parseFloat(target).toFixed(2)}`,
        qty: `${
          index === 0
            ? (parseFloat(formData.baseordersize) / price).toFixed(5)
            : index === 1
            ? (parseFloat(formData.safetyordersize) / price).toFixed(5)
            : parseFloat(qty).toFixed(5)
        }`,
        amount: `${
          index === 0
            ? parseFloat(formData.baseordersize).toFixed(2)
            : index === 1
            ? parseFloat(formData.safetyordersize).toFixed(2)
            : parseFloat(amount).toFixed(2)
        }`,
        sumQty: `${
          index === 0
            ? (parseFloat(formData.baseordersize) / price).toFixed(5)
            : index === 1
            ? parseFloat(
                parseFloat(formData.baseordersize) / price +
                  parseFloat(formData.safetyordersize) / price
              ).toFixed(5)
            : parseFloat(sumQty).toFixed(5)
        }`,
        sumAmount: `${
          index === 0
            ? parseFloat(formData.baseordersize).toFixed(2)
            : index === 1
            ? parseFloat(
                parseFloat(formData.baseordersize) +
                  parseFloat(formData.safetyordersize)
              ).toFixed(2)
            : parseFloat(sumamount).toFixed(2)
        }`,
        type: formData.ordertype,
      };
      console.log("dataEntry", dataEntry);
      calculatedData.push(dataEntry);
    }

    return calculatedData;
  };

  // Fetch the real-time price of Ethereum on component mount
  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coincap.io/v2/assets/ethereum"
        );
        // setEthPrice(response.data.ethereum.usd);
        setEthPrice(response.data.data.priceUsd);
      } catch (error) {
        console.error("Error fetching Ethereum price:", error);
      }
    };

    fetchEthPrice();
    prices.length = 0;
  }, [prices]);

  console.log("calculate data..........", calculatedData);

  const pairs = [
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

  const [formData, setFormData] = useState({ ...initialFormData });
  const [submittedData, setSubmittedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPair, setSelectedPair] = useState(pairs[0]);

  const handleChange = (value) => {
    setSelectedPair(value);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      pairs: selectedPair.value,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const calculatedData = await calculateDcaBotData(
      { ...formData },
      selectedPair
    );

    console.log("Submitted Data:", formData);
    console.log("Calculated Data:", calculatedData);
    setCalculatedData(calculatedData);

    // setCalculatedData(calculatedData);
    setSubmittedData({ ...formData });
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

  const handleCreateBot = async () => {
    const obj = {
      config: { ...formData },
      orders: calculatedData,
    };
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/bot/create", obj);
      console.log(res);
      if (res.status === 200) {
        setLoading(false);
        alert(res.data.msg);
        return;
      }
    } catch (error) {
      console.log("error in creating bot", error);
      setLoading(false);
    }
  };

  console.log("calculatedData", calculatedData);
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
                    htmlFor="pairs"
                    className="text-xs text-gray-400 font-bold"
                  >
                    Pairs
                  </label>
                  <Select
                    className="custom-select"
                    value={selectedPair}
                    options={pairs}
                    autoFocus
                    onChange={handleChange}
                    classNames={{
                      control: (state) =>
                        state.isFocused ? "border-red-600" : "border-green-300",
                    }}
                    // styles={{
                    //   singleValue: (base) => ({
                    //     ...base,
                    //     display: "flex",
                    //     alignItems: "center",

                    //   })
                    // }}
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
                    htmlFor="baseOrderSize"
                    className="text-xs text-gray-400 font-bold"
                  >
                    Base Order Size
                  </label>
                  <input
                    type="number"
                    name="baseOrderSize"
                    id="baseOrderSize"
                    value={formData.baseOrderSize}
                    onChange={handleInputChange}
                    className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                    placeholder="Enter Base Order Size"
                  />{" "}
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="safetyOrderSize"
                      className="text-xs text-gray-400 font-bold"
                    >
                      Safety Order Size
                    </label>
                    <input
                      type="number"
                      name="safetyOrderSize"
                      id="safetyOrderSize"
                      value={formData.safetyOrderSize}
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
                    htmlFor="maxSafetyOrder"
                    className="text-xs text-gray-400 font-bold"
                  >
                    Max Safety Orders
                  </label>
                  <input
                    type="number"
                    name="maxSafetyOrder"
                    id="maxSafetyOrder"
                    value={formData.maxSafetyOrder}
                    onChange={handleInputChange}
                    className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                    placeholder="Enter Max Safety Orders"
                  />
                </div>
                <div>
                  <label
                    htmlFor="safetyOrderDeviation"
                    className="text-xs text-gray-400 font-bold"
                  >
                    Safety Order Price Deviation
                  </label>
                  <input
                    type="number"
                    name="safetyOrderDeviation"
                    id="safetyOrderDeviation"
                    value={formData.safetyOrderDeviation}
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

                {/*<div>
                  <label
                    htmlFor="maxDeals"
                    className="text-xs text-gray-400 font-bold"
                  >
                    Max Deals
                  </label>
                  <input
                    type="number"
                    name="maxDeals"
                    id="maxDeals"
                    value={formData.maxDeals}
                    onChange={handleInputChange}
                    className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                    placeholder="Enter Max Deals"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="maxPairsDeal"
                    className="text-xs text-gray-400 font-bold"
                  >
                    Max Pairs Deals
                  </label>
                  <input
                    type="number"
                    name="maxPairsDeal"
                    id="maxPairsDeal"
                    value={formData.maxPairsDeal}
                    onChange={handleInputChange}
                    className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                    placeholder="Enter Max Pairs Deals"
                  />
                </div>

                <div>
                  <label
                    htmlFor="minimumVol"
                    className="text-xs text-gray-400 font-bold"
                  >
                    Minimum 24h Volume
                  </label>
                  <input
                    type="number"
                    name="minimumVol"
                    id="minimumVol"
                    value={formData.minimumVol}
                    onChange={handleInputChange}
                    className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                    placeholder="Enter Minimum 24h Volume / in Million"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label
                    htmlFor="coolDownDeals"
                    className="text-xs text-gray-400 font-bold"
                  >
                    Cooldown Between Deals
                  </label>
                  <input
                    type="number"
                    name="coolDownDeals"
                    id="coolDownDeals"
                    value={formData.coolDownDeals}
                    onChange={handleInputChange}
                    className="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-black"
                    placeholder="Enter Cooldown Between Deals / in Seconds"
                  />
                </div>*/}

                <div>
                  <label
                    htmlFor="orderType"
                    className="text-xs text-gray-400 font-bold"
                  >
                    Order Type
                  </label>
                  <select
                    name="orderType"
                    id="orderType"
                    value={formData.orderType}
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
        handleCreateBot={handleCreateBot}
        calculateData={calculatedData}
        loading={loading}
      />
    </>
  );
};

export default CreateDcaBot;
