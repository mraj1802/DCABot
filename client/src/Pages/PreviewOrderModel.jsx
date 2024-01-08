import React, { useEffect, useMemo, useState } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";

// Modal component
const PreviewOrderModel = ({
  isOpen,
  onClose,
  submittedData,
  onModify,
  calculatedData,
  handleCreateBot,
  loading,
}) => {
  const [ethPrice, setEthPrice] = useState(null);
  const prices = useMemo(() => [], []);
  const amounts = useMemo(() => [], []);
  const qtys = useMemo(() => [], []);
  let deviationExceeded = false;

  const calculatePrice = (deviation, basePrice) => {
    const result = basePrice - basePrice * (deviation / 100);
    return result;
  };

  const calculateDeviation = (deviation, index) => {
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
    calculatedData.length = 0;
  }, [isOpen]);

  console.log("calculatedData..................", calculatedData);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg relative h-[60vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Preview Order
            </h2>
            <button
              onClick={onClose}
              className="absolute top-3 right-5 text-2xl p-4  text-black cursor-pointer"
            >
              X
            </button>
            {submittedData && (
              <>
                <table className="my-4 w-full border-collapse border border-gray-300 bg-[#1f2937] text-white">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-0 py-0">No.</th>
                      <th className="border border-gray-300 px-1 py-1">
                        Deviation($)
                      </th>
                      <th className="border border-gray-300 px-1 py-1">
                        Price($)
                      </th>
                      <th className="border border-gray-300 px-1 py-1">
                        Average($)
                      </th>
                      <th className="border border-gray-300 px-1 py-1">
                        Target($)
                      </th>
                      <th className="border border-gray-300 px-1 py-1">Qty</th>
                      <th className="border border-gray-300 px-1 py-1">
                        Amount($)
                      </th>
                      <th className="border border-gray-300 px-1 py-1">
                        Sum(Qty)
                      </th>
                      <th className="border border-gray-300 px-1 py-1">
                        Sum($)
                      </th>
                      <th className="border border-gray-300 px-1 py-1">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(
                      { length: submittedData.maxsafetyorder },
                      (_, index) => {
                        const Deviation = calculateDeviation(
                          submittedData.safetyorderdeviation,
                          index
                        );

                        if (Deviation >= 100) {
                          deviationExceeded = true;
                          return null;
                        }
                        const basePrice = ethPrice;
                        const price = calculatePrice(Deviation, basePrice);
                        prices.push(price);
                        const average = calculateAverge(prices);
                        const target = calculateTarget(
                          average,
                          submittedData.targetprofit
                        );
                        const amount = calculateAmount(
                          submittedData.safetyordersize,
                          submittedData.safetyordervolume,
                          index
                        );
                        const qty = calculateQty(price, amount);
                        amounts.push(amount);
                        qtys.push(qty);

                        const sumamount = calculateSumAmount(
                          amounts,
                          index,
                          submittedData.baseordersize,
                          submittedData.safetyordersize
                        );
                        const sumQty = calculateSumQty(
                          qtys,
                          index,
                          submittedData.baseordersize,
                          submittedData.safetyordersize,
                          price
                        );

                        /* Array */

                        const dataEntry = {
                          no: index === 0 ? "Base Order" : index,
                          deviation: `${Deviation} %`,
                          price: `${parseFloat(price).toFixed(2)}`,
                          average: `${average}`,
                          target: `${parseFloat(target).toFixed(2)}`,
                          qty: `${
                            index === 0
                              ? (
                                  parseFloat(submittedData.baseordersize) /
                                  price
                                ).toFixed(5)
                              : index === 1
                              ? (
                                  parseFloat(submittedData.safetyordersize) /
                                  price
                                ).toFixed(5)
                              : parseFloat(qty).toFixed(5)
                          }`,
                          amount: `${
                            index === 0
                              ? parseFloat(submittedData.baseordersize).toFixed(
                                  2
                                )
                              : index === 1
                              ? parseFloat(
                                  submittedData.safetyordersize
                                ).toFixed(2)
                              : parseFloat(amount).toFixed(2)
                          }`,
                          sumQty: `${
                            index === 0
                              ? (
                                  parseFloat(submittedData.baseordersize) /
                                  price
                                ).toFixed(5)
                              : index === 1
                              ? parseFloat(
                                  parseFloat(submittedData.baseordersize) /
                                    price +
                                    parseFloat(submittedData.safetyordersize) /
                                      price
                                ).toFixed(5)
                              : parseFloat(sumQty).toFixed(5)
                          }`,
                          sumAmount: `${
                            index === 0
                              ? parseFloat(submittedData.baseordersize).toFixed(
                                  2
                                )
                              : index === 1
                              ? parseFloat(
                                  parseFloat(submittedData.baseordersize) +
                                    parseFloat(submittedData.safetyordersize)
                                ).toFixed(2)
                              : parseFloat(sumamount).toFixed(2)
                          }`,
                          type: submittedData.ordertype,
                        };
                        calculatedData.push(dataEntry);
                        return null;
                      }
                    )}

                    {calculatedData.map((dataEntry, index) => (
                      <tr key={`calculatedData_${index}`}>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.no}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.deviation}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.price}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.average}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.target}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.qty}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.amount}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.sumQty}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.sumAmount}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {dataEntry.type}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {deviationExceeded && (
                  <div className="text-red-500 text-center mt-4">
                    No other orders generated due to price deviation exceeding
                    100%.
                  </div>
                )}
              </>
            )}

            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={onModify}
                className="p-2 w-[90px] bg-blue-600 text-white rounded-md"
              >
                Modify
              </button>
              <button
                onClick={handleCreateBot}
                className="p-2 w-[90px] bg-blue-600 text-white rounded-md"
              >
                {loading ? (
                  <Oval color="#FFFFFF" height={20} width={20} />
                ) : (
                  "Create"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewOrderModel;
