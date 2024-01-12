import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { Toast, ToastComponent } from "../utils/toast";
const SignIn = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8080/api/login", state);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        Toast.success(res.data.msg);
        setLoading(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        Toast.error("Login failed.");
        setLoading(false);
      }
    } catch (error) {
      console.log("error in login", error);
      Toast.error(error.response.data.msg);
      setLoading(false);
    }
  };
  return (
    <>
      <section className="flex justify-center h-screen items-center 2xl:py-36 xl:py-12 lg:py-14 md:py-12 dsm:py-10 sm:py-8">
        <div className="w-full flex flex-col items-center px-2 py-2 mx-auto lg:py-0">
          <div className="2xl:w-[26%] xl:w-[40%] lg:w-[55%] md:w-[70%] sm:w-[95%] border border-gray-300 rounded-lg shadow-xl md:mt-0 xl:p-0 text-black">
            <div className="px-14 py-10">
              <form
                action="#"
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="border-b border-b-gray-300 text-gray-900 sm:text-sm focus:outline-none focus:border-black block w-full px-2.5 py-2 "
                    placeholder="Enter username Address"
                    required
                    value={state.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    className="border-b border-b-gray-300 text-gray-900 sm:text-sm focus:outline-none focus:border-black block w-full px-2.5 py-3"
                    required
                    value={state.password}
                    onChange={handleChange}
                  />
                  <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                    {show ? (
                      <BsEyeFill
                        className="text-xl cursor-pointer"
                        onClick={() => setShow(!show)}
                      />
                    ) : (
                      <BsEyeSlashFill
                        className="text-xl cursor-pointer"
                        onClick={() => setShow(!show)}
                      />
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 flex justify-center items-center bg-blue-600 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg border border-blue-600 hover:bg-transparent hover:text-blue-600 px-5 py-3 text-center "
                >
                  {loading ? (
                    <Oval color="#FFFFFF" height={20} width={20} />
                  ) : (
                    "Login"
                  )}
                </button>
                <div className="w-[80%] m-auto text-left">
                  You don't have the account{" "}
                  <Link to={"/signup"} className="text-blue-500">
                    {" "}
                    click here.
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ToastComponent />
    </>
  );
};

export default SignIn;
