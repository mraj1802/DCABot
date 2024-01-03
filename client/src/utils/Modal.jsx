import React from 'react'

const Modal = ({isModalOpen, setisModalOpen}) => {
    const handleModal=()=>
    {
        setisModalOpen(!isModalOpen)
    }
  return (
    <div className="w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5">
    <div className="w-[600px] gap-5 py-12 bg-white flex flex-col text-center">
      <h2>Do You Want To Change?</h2>
      <div className="w-full flex gap-12 justify-center">
        <button
          className="px-10 py-3 bg-[#1f2937] border border-1 border-[#1f2937] text-white rounded-md hover:text-[#1f2937] hover:bg-transparent "
        >
          Yes
        </button>
        <button
          className="px-10 py-3 bg-[#1f2937] border border-1 border-[#1f2937] text-white rounded-md hover:text-[#1f2937] hover:bg-transparent "
          onClick={handleModal}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default Modal
