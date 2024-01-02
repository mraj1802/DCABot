import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()

    const handleclick=(a)=>
    {
        navigate(`/${a}`)
    }

  return (
    <>
    <section class=" 3xl:py-16 2xl:py-10 xl:py-12 lg:py-14 md:py-12 dsm:py-10 sm:py-8  bg-gray-100 min-h-[966px] h-full">
        <div class="flex flex-col items-center md:px-8 dsm:px-8 px-4 py-2 mx-auto lg:py-0">
            <div class="w-[25%] bg-white rounded-lg shadow-xl  md:mt-0  xl:p-0 text-black">
                <div class="  px-12 py-10">
                <div className="  py-3 border-b border-gray-300 hover:bg-gray-200 cursor-pointer" onClick={()=>handleclick("createbot")}>
                    <h2 className="text-base text-blue-500">
                        Create DCA Bot
                    </h2>
                </div>
                <div className="border-b border-gray-300  py-3 hover:bg-gray-200 cursor-pointer" onClick={()=>handleclick("managebot")}>
                    <h2 className="text-base text-blue-500">
                        Manage DCA Bots 
                    </h2>
                </div>
                <div className="border-b border-gray-300  py-3 hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-base text-blue-500">
                        Active DCA Bot Deals
                    </h2>
                </div>
                <div className="border-b border-gray-300  py-3 hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-base text-blue-500">
                        DCA Bot Deals History
                    </h2>
                </div>
                <div className="border-b border-gray-300 py-3 hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-base text-blue-500">
                        SymRank Crypto Screener
                    </h2>
                </div>
                <div className="border-b border-gray-300  py-3 hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-base text-blue-500">
                        Configuration
                    </h2>
                </div>
                <div className="border-b border-gray-300 py-3 hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-base text-blue-500">
                        Logs
                    </h2>
                </div>
                <div className="border-b border-gray-300  py-3 hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-base text-blue-500">
                        Log Out
                    </h2>
                </div>
                
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Home
