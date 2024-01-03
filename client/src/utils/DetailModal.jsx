import React from 'react'

const DetailModal = ({childcomponent}) => {
  return (
    <>
      <div className="w-full fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-20 p-5 ">
        <div className="w-[90%] h-[60%] gap-5 bg-white flex flex-col text-center">
            {childcomponent}
        </div>
        </div>
    </>
  )
}

export default DetailModal
