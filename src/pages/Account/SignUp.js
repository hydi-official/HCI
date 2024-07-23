import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoLight } from "../../assets/images";
import frame2 from "../../assets/images/heather-ford-5gkYsrH_ebY-unsplash.jpg";
import frame1 from "../../assets/images/SignIn.png";
import frame3 from "../../assets/images/SignUp.png";
import { FaArrowLeft } from 'react-icons/fa';


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  
  const navigate = useNavigate(); 

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Enter your password");
    }

    if (email && password) {
      setSuccessMsg(
        `Thank you for signing in! We are processing your access and will send additional assistance to your email at ${email}`
      );
      setEmail("");
      setPassword("");
      navigate("/"); // Navigate to the home page
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${frame2})` }}
    >
      <div className="mb-[520px] mr-[100px]">
        <img src={frame1} alt="Sign In Visual" />
      </div>
      <div className="w-full md:w-1/2 h-full flex items-center justify-center">
        {successMsg ? (
          <div className="w-full md:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/">
              {/* <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign Up
              </button> */}
            </Link>
          </div>
        ) : (
          <form className="w-[500px] md:w-[450px] h-[600px] flex flex-col items-center justify-center bg-white bg-opacity-90 p-8 rounded-lg">
             <div className="absolute top-4 left-4">
              <Link to='/'>
                <div className="bg-[#949292] p-2 text-4xl rounded-full">
                  <FaArrowLeft className="text-white" />
                </div>
              </Link>
            </div>
            <div>
              <img src={frame3} alt="Form Illustration" />
            </div>
            <div className="w-full flex flex-col gap-4">
              {/* fullname */}
            <div className="flex flex-col">
                <input
                  
                  className="w-full h-10 px-4 text-base font-medium rounded-md border  outline-none shadow-md"
                  type="email"
                  placeholder="Full Name"
                />
               
              </div>
              {/* Email */}
              <div className="flex flex-col">
                <input
                  
                  className="w-full h-10 px-4 text-base font-medium rounded-md border  outline-none shadow-md"
                  type="email"
                  placeholder="Email"
                />
               
              </div>
                {/* Phone Number */}
            <div className="flex flex-col">
                <input
                  
                  className="w-full h-10 px-4 text-base font-medium rounded-md border  outline-none shadow-md"
                  type="email"
                  placeholder="Phone Number"
                /> 
              </div>
              {/* Password */}
              <div className="flex flex-col">
                <input
                  onChange={handlePassword}
                  value={password}
                  className="w-full h-10 px-4 text-base font-medium rounded-md border outline-none shadow-md"
                  type="password"
                  placeholder="Password"
                />
                {errPassword && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    {errPassword}
                  </p>
                )}
              </div>
              {/* Email */}
              <div className="relative flex flex-col">
                <input
                  
                  className="w-full h-10 px-4 text-base font-medium rounded-md border  outline-none shadow-md pr-10"
                  type="email"
                  placeholder="Select Country"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
                  {/* Address */}
            <div className="flex flex-col">
                <input
                  
                  className="w-full h-10 px-4 text-base font-medium rounded-md border  outline-none shadow-md"
                  type="email"
                  placeholder="Address"
                /> 
              </div>
              <button
                onClick={handleSignUp}
                className="bg-primeColor hover:bg-black text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300"
              >
                Sign Up
              </button>
              <p className="text-sm text-center font-titleFont font-medium mt-4">
                Already have an account?{" "}
                <Link to="/signin">
                  <span className="hover:text-blue-600 duration-300">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
