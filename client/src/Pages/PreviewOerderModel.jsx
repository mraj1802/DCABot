import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

// Modal component
const PreviewOrderModel = ({ isOpen, onClose, submittedData, onModify }) => {
    const [ethPrice, setEthPrice] = useState(null);
    const prices = useMemo(() => [], []);
    // const [prices, setPrices] = useState([]);
    const amounts = useMemo(() => [], []);
    const qtys = useMemo(() => [], []);

    const calculatePrice = (deviation, basePrice) => {
        const result = basePrice - basePrice * (deviation / 100);
        return result;
    };

    const calculateDeviation = (deviation, index) => {
        return deviation * index;
    };

    const calculateaverge = (prices) => {
        let sum = 0;
        const averages = prices.map((price, index) => {
            const numericPrice = parseFloat(price);
            sum += numericPrice;
            const average = sum / (index + 1);
            console.log(`Average at index ${index}: ${average.toFixed(2)}`);
            return average;
        });

        console.log("Final Average:", averages[averages.length - 1]);
        return isNaN(averages[averages.length - 1])
            ? "0.00"
            : averages[averages.length - 1].toFixed(2);
    };

    const calculatetarget = (average, target) => {
        const result = parseFloat(average) + average * (target / 100);
        return result;
    };

    const calculateamount = (safetyorder, volume, index) => {
        let result = safetyorder * volume;

        for (let i = 1; i <= index - 2; i++) {
            result *= volume;
        }
        return result;
    };

    const calculateqty = (price, amount) => {
        const result = parseFloat(amount) / price;
        return result;
    };

    const calculatesumamount = (
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

    const calculatesumqty = (qtys, index, baseorder, safetyorder, price) => {
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
    }, []);

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
                            <table className="my-4 w-full border-collapse border border-gray-300 bg-[#1f2937] text-white">
                                <thead>
                                <tr>
                                    <th className="border border-gray-300 px-0 py-0">No.</th>
                                    <th className="border border-gray-300 px-1 py-1">
                                        Deviation
                                    </th>
                                    <th className="border border-gray-300 px-1 py-1">Price</th>
                                    <th className="border border-gray-300 px-1 py-1">
                                        Average
                                    </th>
                                    <th className="border border-gray-300 px-1 py-1">Target</th>
                                    <th className="border border-gray-300 px-1 py-1">Qty</th>
                                    <th className="border border-gray-300 px-1 py-1">
                                        Amount($)
                                    </th>
                                    <th className="border border-gray-300 px-1 py-1">
                                        Sum(Qty)
                                    </th>
                                    <th className="border border-gray-300 px-1 py-1">Sum($)</th>
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
                                        const baseprice = ethPrice;
                                        const price = calculatePrice(Deviation, baseprice);
                                        prices.push(price);
                                        const average = calculateaverge(prices);
                                        const target = calculatetarget(
                                            average,
                                            submittedData.targetprofit
                                        );
                                        const amount = calculateamount(
                                            submittedData.safetyordersize,
                                            submittedData.safetyordervolume,
                                            index
                                        );
                                        const qty = calculateqty(price, amount);
                                        amounts.push(amount);
                                        qtys.push(qty);

                                        const sumamount = calculatesumamount(
                                            amounts,
                                            index,
                                            submittedData.baseordersize,
                                            submittedData.safetyordersize
                                        );
                                        const sumqty = calculatesumqty(
                                            qtys,
                                            index,
                                            submittedData.baseordersize,
                                            submittedData.safetyordersize,
                                            price
                                        );

                                        return (
                                            <tr key={`safetyorder_${index}`}>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {index + 1}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {Deviation} %
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    ${parseFloat(price).toFixed(2)}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {" "}
                                                    ${average}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {" "}
                                                    ${parseFloat(target).toFixed(2)}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    $
                                                    {index === 0
                                                        ? (
                                                            parseFloat(submittedData.baseordersize) /
                                                            price
                                                        ).toFixed(5)
                                                        : index === 1
                                                            ? (
                                                                parseFloat(submittedData.safetyordersize) /
                                                                price
                                                            ).toFixed(5)
                                                            : parseFloat(qty).toFixed(5)}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    $
                                                    {index === 0
                                                        ? parseFloat(submittedData.baseordersize).toFixed(
                                                            2
                                                        )
                                                        : index === 1
                                                            ? parseFloat(
                                                                submittedData.safetyordersize
                                                            ).toFixed(2)
                                                            : parseFloat(amount).toFixed(2)}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    $
                                                    {index === 0
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
                                                            : parseFloat(sumqty).toFixed(5)}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    $
                                                    {index === 0
                                                        ? parseFloat(submittedData.baseordersize).toFixed(
                                                            2
                                                        )
                                                        : index === 1
                                                            ? parseFloat(
                                                                parseFloat(submittedData.baseordersize) +
                                                                parseFloat(submittedData.safetyordersize)
                                                            ).toFixed(2)
                                                            : parseFloat(sumamount).toFixed(2)}
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {submittedData.ordertype}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                                </tbody>
                            </table>
                        )}
                        <div className="flex justify-end mt-4 space-x-4">
                            <button
                                onClick={onModify}
                                className="p-2 bg-blue-600 text-white rounded-md"
                            >
                                Modify
                            </button>
                            <button
                                // onClick={onCreate}
                                className="p-2 bg-blue-600 text-white rounded-md"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PreviewOrderModel;
