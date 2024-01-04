import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()

    const handleclick=(a)=>
    {
        navigate(`/${a}`)
    }

    const handleDivClick = () => {
        window.location.href = 'https://www.symrank.com/';
      };
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
        return;
    };

  return (
    <>
    <section className=" 3xl:py-16 2xl:py-10 xl:py-12 lg:py-14 md:py-12 dsm:py-10 sm:py-8  bg-gray-100 min-h-[966px] h-full">
        <div className="flex flex-col items-center md:px-8 dsm:px-8 px-4 py-2 mx-auto lg:py-0">
            <div className="w-[25%] bg-white rounded-lg shadow-xl  md:mt-0  xl:p-0 text-black">
                    <div className=" px-12 py-10">
                    <div className="  py-3 border-b border-gray-300 hover:bg-gray-200 cursor-pointer" onClick={()=>handleclick("createbot")}>
                        <h2 className="text-base text-blue-500 px-3">
                            Create DCA Bot
                        </h2>
                    </div>
                    <div className="border-b border-gray-300  py-3 hover:bg-gray-200 cursor-pointer" onClick={()=>handleclick("managebot")}>
                        <h2 className="text-base text-blue-500  px-3">
                            Manage DCA Bots 
                        </h2>
                    </div>
                    <div className="border-b border-gray-300  py-3 hover:bg-gray-200 cursor-pointer" onClick={()=>handleclick("activebot")} >
                        <h2 className="text-base text-blue-500  px-3">
                            Active DCA Bot Deals
                        </h2>
                    </div>
                    <div className="border-b border-gray-300  py-3 hover:bg-gray-200 cursor-pointer" onClick={()=>handleclick("bothistory")} >
                        <h2 className="text-base text-blue-500  px-3">
                            DCA Bot Deals History
                        </h2>
                    </div>
                    <div className="border-b border-gray-300 py-3 hover:bg-gray-200 cursor-pointer" >
                        <h2 className="text-base text-blue-500  px-3">
                            SymRank Crypto Screener
                        </h2>
                    </div>
                    <div className="border-b border-gray-300  py-3 hover:bg-gray-200 cursor-pointer" onClick={()=>handleclick("conf")}>
                        <h2 className="text-base text-blue-500  px-3">
                            Configuration
                        </h2>
                    </div>
                    <div className="border-b border-gray-300 py-3 hover:bg-gray-200 cursor-pointer" onClick={()=>handleclick("logs")}>
                        <h2 className="text-base text-blue-500  px-3">
                            Logs
                        </h2>
                    </div>
                    <div className="py-3 hover:bg-gray-200 cursor-pointer"
                        onClick={handleLogout}
                    >
                        <h2 className="text-base text-blue-500  px-3">
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
