import React from 'react'

const SignIn = () => {
  return (
    <>
      
    <section class=" 2xl:py-24 xl:py-20 lg:py-14 md:py-12 dsm:py-10 sm:py-8 bg-gray-100 min-h-[900px] h-full">
        <div class="flex flex-col items-center md:px-8 dsm:px-8 px-4 py-2 mx-auto lg:py-0">
            <div class="2xl:w-[30%] xl:w-[40%] lg:w-[50%] md:w-[60%] sm:w-[90%] space-y-6 rounded-lg  text-black">
              
              <div class=" py-4 bg-white rounded-md">
                  <h1 className="text-center border-b border-[#cfdae0] text-lg text-[#2f4050] font-bold px-4 py-3">SIGN IN</h1>
                  <div className="px-6 py-3 space-y-4">
                    <div>
                    <label htmlFor="email" className="text-xs text-[#2f4050] font-bold">Email Id</label>
                    <input type="email" name="email" id="email" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="abc@gmail.com" />
                    </div>

                    <div>
                    <label htmlFor="password" className="text-xs text-[#2f4050] font-bold">Password</label>
                    <input type="password" name="password" id="password" class="border border-[#cfdae0] mt-1 rounded py-1 px-4 w-full focus:outline-none focus:border focus:border-[#2f4050]"  placeholder="******" />
                    </div>
                    </div>
                    <div class=" py-4 px-6">
                  <button className="w-full p-2 bg-[#2f4050] border border-[#2f4050] hover:bg-transparent hover:text-[#2f4050] text-white text-lg font-medium  rounded-md">Sign In</button>
              </div>
              </div>

            </div>
              
        </div>
    </section>
    </>
  )
}

export default SignIn
