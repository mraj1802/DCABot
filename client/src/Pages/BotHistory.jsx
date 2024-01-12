import React, { useState } from "react";
import DetailModal from "../utils/DetailModal";
import { AiFillCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";

const Data = [
  {
    date: "2024-01-12T04:24:22.964+00:00",
    botName: "bot",
    dealID: "77b64196-7f30-4eb9-a22c-460ea100eb16",
    Pair: "BTC/USDT",
    BO: "20",
    SO: "15",
    priceDeviation: "2",
    SOStep: "1",
    TP: "2",
    Type: "LIMIT",
    startCondition: "Open new trade ASAP",
    orders: [
      {
        no: "Base Order0",
        deviation: "0",
        price: "10",
        average: "46300.00",
        target: "20",
        qty: "0.00043",
        amount: "20.00",
        sumQty: "0.00043",
        sumAmount: "20.00",
        filled: "0",
        orderID: "665894533011447812",
        SellID: "665895003079680005",
      },
      {
        no: "Base Order",
        deviation: "0",
        price: "2",
        average: "46300.00",
        target: "4",
        qty: "0.00043",
        amount: "20.00",
        sumQty: "0.00043",
        sumAmount: "20.00",
        filled: "1",
        orderID: "665894533011447812",
        SellID: "665895003079680005",
      },
    ],
  },
  {
    date: "2024-01-12T04:24:22.964+00:00",
    botName: "bot",
    dealID: "77b64196-7f30-4eb9-a22c-460ea100eb16",
    Pair: "BTC/USDT",
    BO: "20",
    SO: "15",
    priceDeviation: "2",
    SOStep: "1",
    TP: "2",
    Type: "LIMIT",
    startCondition: "Open new trade ASAP",
    orders: [
      {
        no: "Base Order1",
        deviation: "0",
        price: "3",
        average: "46300.00",
        target: "5",
        qty: "0.00043",
        amount: "20.00",
        sumQty: "0.00043",
        sumAmount: "20.00",
        filled: "1",
        orderID: "665894533011447812",
        SellID: "665895003079680005",
      },
      {
        no: "Base Order",
        deviation: "0",
        price: "1",
        average: "46300.00",
        target: "6",
        qty: "0.00043",
        amount: "20.00",
        sumQty: "0.00043",
        sumAmount: "20.00",
        filled: "1",
        orderID: "665894533011447812",
        SellID: "665895003079680005",
      },
    ],
  },
  {
    date: "2024-01-12T04:24:22.964+00:00",
    botName: "bot",
    dealID: "77b64196-7f30-4eb9-a22c-460ea100eb16",
    Pair: "BTC/USDT",
    BO: "20",
    SO: "15",
    priceDeviation: "2",
    SOStep: "1",
    TP: "2",
    Type: "LIMIT",
    startCondition: "Open new trade ASAP",
    orders: [
      {
        no: "Base Order2",
        deviation: "0",
        price: "6",
        average: "46300.00",
        target: "10",
        qty: "0.00043",
        amount: "20.00",
        sumQty: "0.00043",
        sumAmount: "20.00",
        filled: "1",
        orderID: "665894533011447812",
        SellID: "665895003079680005",
      },
      {
        no: "Base Order",
        deviation: "0",
        price: "6",
        average: "46300.00",
        target: "9",
        qty: "0.00043",
        amount: "20.00",
        sumQty: "0.00043",
        sumAmount: "20.00",
        filled: "1",
        orderID: "665894533011447812",
        SellID: "665895003079680005",
      },
    ],
  },
  {
    date: "2024-01-12T04:24:22.964+00:00",
    botName: "bot",
    dealID: "77b64196-7f30-4eb9-a22c-460ea100eb16",
    Pair: "BTC/USDT",
    BO: "20",
    SO: "15",
    priceDeviation: "2",
    SOStep: "1",
    TP: "2",
    Type: "LIMIT",
    startCondition: "Open new trade ASAP",
    orders: [
      {
        no: "Base Order3",
        deviation: "0",
        price: "2",
        average: "46300.00",
        target: "5",
        qty: "0.00043",
        amount: "20.00",
        sumQty: "0.00043",
        sumAmount: "20.00",
        filled: "1",
        orderID: "665894533011447812",
        SellID: "665895003079680005",
      },
      {
        no: "Base Order",
        deviation: "0",
        price: "7",
        average: "46300.00",
        target: "12",
        qty: "0.00043",
        amount: "20.00",
        sumQty: "0.00043",
        sumAmount: "20.00",
        filled: "1",
        orderID: "665894533011447812",
        SellID: "665895003079680005",
      },
    ],
  },
];

const BotHistory = () => {
  const [isDetailModal, setdetailmodalopen] = useState(false);
  const [detailIndex, setDetailIndex] = useState();

  const handleDetailModal = (i) => {
    setDetailIndex(i);
    setdetailmodalopen(!isDetailModal);
  };

  const DetailComponent = (
    <>
      <div className="w-full flex justify-between items-center bg-[#1f2937] text-white font-medium py-1 text-start px-3">
        <h2>Order History ETH_USDT-3J31IJI-1703842368</h2>
        <span onClick={() => setdetailmodalopen(!isDetailModal)}>
          <AiFillCloseSquare fontSize={24} />
        </span>
      </div>
      <div>
        <table className="table-auto text-center w-full">
          <thead className="text-sm font-medium">
            <tr>
              <th className="border py-2">No</th>
              <th className="border">Deviation</th>
              <th className="border">Price</th>
              <th className="border">Average</th>
              <th className="border">Target</th>
              <th className="border">Qty</th>
              <th className="border">Amount</th>
              <th className="border">SumQty</th>
              <th className="border">SumAmount</th>
              <th className="border">filled</th>
              <th className="border">orderID</th>
              <th className="border">SellID</th>
            </tr>
          </thead>
          <tbody className="text-[13px]">
            {detailIndex >= 0 &&
              Data[detailIndex].orders.map((items, index) => (
                <tr
                  key={index}
                  className="py-10 hover:bg-gray-200 cursor-pointer"
                >
                  <td className="py-1">{items.no}</td>
                  <td>{items.deviation}</td>
                  <td>{items.price}</td>
                  <td>{items.average}</td>
                  <td>{items.target}</td>
                  <td>{items.qty}</td>
                  <td>{items.amount}</td>
                  <td>{items.sumQty}</td>
                  <td>{items.sumAmount}</td>
                  <td>{items.filled}</td>
                  <td>{items.orderID}</td>
                  <td>{items.SellID}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );

  const findPercentage=(i)=>
  {
    
    const totalPrices = Data[i].orders
    .filter((el) => el.filled === "1")
    .reduce((acc, t) => acc + parseFloat(t.price), 0);

    const totalTargets = Data[i].orders
      .filter((el) => el.filled === "1")
      .reduce((acc, t) => acc + parseFloat(t.target), 0);

    const profit = totalTargets-totalPrices;
    const percentage = (profit / totalPrices) * 100;

    console.log(`Total Sum of Prices: ${totalPrices}`);
    console.log(`Total Sum of Targets: ${totalTargets}`);
    console.log(`profit: ${profit}`);
    console.log(`Percentage: ${percentage}`);

    return percentage;
  }

  return (
    <>
      <section className="">
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
                  <label htmlFor="bot" className="">
                    Bot :{" "}
                  </label>
                  <input
                    type="text"
                    className="w-28 focus:outline-none rounded-sm text-[#1f2937] px-1"
                  />
                </div>
                <div>
                  <button className="bg-gray-300 border border-gray-300 hover:opacity-70 text-[#1f2937] rounded-md text-sm py-0.5 px-3">
                    Search
                  </button>
                </div>
              </div>
              <div className="absolute top-32 left-8 text-white hover:text-gray-300">
                <Link to="/">
                  <IoHomeSharp fontSize={20} />
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
                    <th className="border">BO</th>
                    <th className="border">SO</th>
                    <th className="border">Price Deviation</th>
                    <th className="border">SO Step</th>
                    <th className="border">TP%</th>
                    <th className="border">Type</th>
                    <th className="border">Start Condition</th>
                    <th className="border">Profit</th>
                  </tr>
                </thead>

                <tbody className="text-[13px]">
                  {Data.map((items, index) => {
                    

                    return (
                      <tr
                        key={index}
                        className="py-10 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleDetailModal(index)}
                      >
                        <td className="py-3">{items.date}</td>
                        <td>{items.botName}</td>
                        <td>{items.dealID}</td>
                        <td>{items.Pair}</td>
                        <td>{items.BO}</td>
                        <td>{items.SO}</td>
                        <td>{items.priceDeviation}</td>
                        <td>{items.SOStep}</td>
                        <td>{items.TP}</td>
                        <td>{items.Type}</td>
                        <td>{items.startCondition}</td>
                        <td>{findPercentage(index)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {isDetailModal && <DetailModal childcomponent={DetailComponent} />}
    </>
  );
};

export default BotHistory;
