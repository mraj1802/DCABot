import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section class=" 3xl:py-16 2xl:py-10 xl:py-12 lg:py-14 md:py-12 dsm:py-10 sm:py-8">
        <div class="flex flex-col items-center md:px-8 dsm:px-8 px-4 py-2 mx-auto lg:py-0">
            <div class="w-[30%] bg-white rounded-lg shadow-xl  md:mt-0  xl:p-0 text-black">
                <div class="px-14 py-10">
                <div className=" text-center py-2 border-b border-gray-300 hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-base text-blue-500">
                        Create DCA Bot
                    </h2>
                </div>
                <div className="border-b border-gray-300 text-center py-2 hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-base text-blue-500">
                        Manage DCA Bots
                    </h2>
                </div>
                <div className="border-b border-gray-300 text-center py-2 hover:bg-gray-200 cursor-pointer">
                    <h2 className="text-base text-blue-500">
                        sm:max-w-md
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
