import React, {useState} from "react";

const PreviewOrderModel = ({ isOpen, onClose,onModify,calculateData }) => {
    const deviationValues = calculateData.map(entry => parseFloat(entry.deviation));
    const deviationExceeded = deviationValues.some(value => value >= 100);

    const handleCreateBot = () => {
        console.log("in handleCreateBot");
    }

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
                    <>
                      <table className="my-4 w-full border-collapse border border-gray-300 bg-[#1f2937] text-white">
                        <thead>
                        <tr>
                          <th className="border border-gray-300 px-0 py-0">No.</th>
                          <th className="border border-gray-300 px-1 py-1">
                            Deviation
                          </th>
                          <th className="border border-gray-300 px-1 py-1">
                            Price ($)
                          </th>
                          <th className="border border-gray-300 px-1 py-1">
                            Average ($)
                          </th>
                          <th className="border border-gray-300 px-1 py-1">
                            Target ($)
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
                        {calculateData.map((dataEntry, index) => {
                          if (deviationExceeded && parseFloat(dataEntry.deviation) >= 100) {
                            return null;
                          }
                          return(
                            <tr key={`data${index}`}>
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
                          );
                        })}
                        </tbody>
                      </table>
                      {deviationExceeded && (
                          <div className="text-red-500 text-center mt-4">
                            No other orders generated due to price deviation exceeding
                            100%.
                          </div>
                      )}
                    </>
                <div className="flex justify-end mt-4 space-x-4">
                  <button
                      onClick={onModify}
                      className="p-2 bg-blue-600 text-white rounded-md"
                  >
                    Modify
                  </button>
                  <button
                      onClick={handleCreateBot}
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