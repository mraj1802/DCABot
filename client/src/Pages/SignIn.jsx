import React from 'react'

const SignIn = () => {
  return (
    <>
      
    <section class=" 2xl:py-24 xl:py-20 lg:py-14 md:py-12 dsm:py-10 sm:py-8 bg-gray-100 min-h-[966px] h-full">
        <div class="flex flex-col items-center md:px-8 dsm:px-8 px-4 py-2 mx-auto lg:py-0">
            <div class="2xl:w-[30%] xl:w-[40%] lg:w-[50%] md:w-[60%] sm:w-[90%] space-y-6 rounded-lg  text-black">
              
              <div class=" bg-[#1f2937] rounded-md px-6 py-3 ">
                  <h1 className="text-center border-b border-[#9a9ea0] text-xl text-gray-200 font-bold px-4 py-3">SIGN IN</h1>
                  <form action="" className="space-y-3 py-5">
                    <div className="space-y-4 text-white">
                      <div>
                      <label htmlFor="email" className="text-xs text-gray-400 font-bold">Email Id</label>
                      <input type="email" name="email" id="email" class="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="abc@gmail.com" />
                      </div>

                      <div>
                      <label htmlFor="password" className="text-xs text-gray-400 font-bold">Password</label>
                      <input type="password" name="password" id="password" class="bg-transparent border border-[#9a9ea0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-white"  placeholder="******" />
                      </div>
                    </div>
                    <div class=" pt-5 ">
                      <button className="w-full p-2 bg-blue-600 border border-blue-600 hover:bg-transparent  text-white text-lg font-medium  rounded-md">Sign In</button>
                  </div>
                  </form>
              </div>

            </div>
              
        </div>
    </section>
    </>
  )
}

export default SignIn
