import React from 'react'

const SignIn = () => {
  return (
    <>
       <section class=" 3xl:py-16 2xl:py-10 xl:py-12 lg:py-14 md:py-12 dsm:py-10 sm:py-8">
        <div class="flex flex-col items-center md:px-8 dsm:px-8 px-4 py-2 mx-auto lg:py-0">
        <div class="w-[30%] bg-white rounded-lg shadow-xl  md:mt-0  xl:p-0 text-black">
        <div class="px-14 py-10">
          <form class="space-y-4 md:space-y-6" action="#" className="flex flex-col gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="border-b border-b-gray-300 text-gray-900 sm:text-sm focus:outline-none focus:border-black block w-full px-2.5 py-2 "
                  placeholder="Enter Email Address"
                  required=""
                />
              </div>            
              <div>
              
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  class="border-b border-b-gray-300 text-gray-900 sm:text-sm focus:outline-none focus:border-black block w-full px-2.5 py-2"
                  required=""
                />
              </div>              
              <button
                type="submit"
                class=" w-full bg-gray-600 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg border border-gray-600 hover:bg-transparent hover:text-gray-600 px-5 py-2.5 text-center "
              >
                Login
              </button>             
          </form> 
        </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default SignIn