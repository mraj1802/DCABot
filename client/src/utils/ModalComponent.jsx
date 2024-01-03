import React from 'react'

const ModalComponent = ({customComponent}) => {
  return (
    <div className="w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5">
    <div className="w-[990px] gap-5 p-5 bg-white flex flex-col text-center">
     
      {customComponent}
    </div>
    </div>
  )
}

export default ModalComponent
