import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DeleteModal = ({isDeleteModal,setDeleteModal,setConfirm,handleDelete}) => {
  return (
    <div className="w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5">
      <div className="w-full 2xl:w-[25%] xl:w-[30%] lg:w-[35%] md:w-[40%] sm:w-[90%] p-6  bg-white flex flex-col items-center gap-6 rounded-md shadow-lg">
        <h1 className="text-base font-medium">Sure You Want To Delete?</h1>
        <div className="flex gap-9">
          <button className="p-2 bg-blue-600 border border-blue-600 hover:bg-transparent hover:text-blue-600 text-white px-9 rounded-md" onClick={()=>setDeleteModal(!isDeleteModal)}>Cancel</button>
          <button className="p-2 bg-red-600 border border-red-600 hover:bg-transparent hover:text-red-600 text-white px-9 rounded-md" onClick={handleDelete}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
