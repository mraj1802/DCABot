import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/login", state);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        alert("logged successful.");
        navigate("/createbot");
      } else {
        alert("logging failed");
      }
    } catch (error) {
      console.log("error in login", error);
    }
  };
  return (
    <>
      <section class=" 2xl:py-36 xl:py-12 lg:py-14 md:py-12 dsm:py-10 sm:py-8">
        <div class="flex flex-col items-center px-2 py-2 mx-auto lg:py-0">
          <div class="2xl:w-[30%] xl:w-[40%] lg:w-[55%] md:w-[70%] sm:w-[95%] border border-gray-300 rounded-lg shadow-xl  md:mt-0  xl:p-0 text-black">
            <div class="px-14 py-10">
              <form
                class="space-y-4 md:space-y-6"
                action="#"
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="email"
                    name="username"
                    id="username"
                    class="border-b border-b-gray-300 text-gray-900 sm:text-sm focus:outline-none focus:border-black block w-full px-2.5 py-2 "
                    placeholder="Enter username Address"
                    required=""
                    value={state.username}
                    onChange={handleChange}
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
                    value={state.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  class=" w-full bg-blue-600 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg border border-blue-600 hover:bg-transparent hover:text-blue-600 px-5 py-2.5 text-center "
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
