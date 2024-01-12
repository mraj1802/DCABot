import React from "react";

function Delete(handleDeleteModel, handleDeleteBot) {
  return (
    <>
      <div className="border border-red-950 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-30 z-20">
        <div className="flex flex-col gap-6 justify-center py-6 px-4 text-center bg-[#FFFFFF] dark:bg-[#FFFFFF]-800 rounded-lg shadow-3xl w-[18%]">
          <p>Do you want to closed this bot?</p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleDeleteModel(null)}
              className="text-white py-2 px-3 rounded-md bg-blue-600 border border-blue-600 hover:bg-transparent  hover:text-blue-600 text-sm font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteBot}
              className="text-white py-2 px-3 rounded-md bg-blue-600 border border-blue-600 hover:bg-transparent  hover:text-blue-600 text-sm font-medium"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Delete;
