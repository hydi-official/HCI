import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import frame2 from "../../assets/images/heather-ford-5gkYsrH_ebY-unsplash.jpg";
import frame1 from "../../assets/images/SignIn.png";
import frame3 from "../../assets/images/formie.png";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${frame2})` }} >
        <div className="mb-[520px] mr-[100px]"> 
          <img src={frame1}/>
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
          <form className="w-[500px] md:w-[450px] h-[500px] flex flex-col items-center justify-center bg-white bg-opacity-90 p-8 rounded-lg">
           
            <div className=""> 
          <img src={frame3}/>
        </div>
            <div className="w-full flex flex-col gap-4">
              {/* Email */}
              <div className="flex flex-col">
                <label className="font-titleFont text-base font-semibold text-gray-600">Email</label>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full h-10 px-4 text-base font-medium rounded-md border border-gray-400 outline-none"
                  type="email"
                  placeholder="john@example.com"
                />
                {errEmail && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    {errEmail}
                  </p>
                )}
              </div>
              {/* Password */}
              <div className="flex flex-col">
                <label className="font-titleFont text-base font-semibold text-gray-600">Password</label>
                <input
                  onChange={handlePassword}
                  value={password}
                  className="w-full h-10 px-4 text-base font-medium rounded-md border border-gray-400 outline-none"
                  type="password"
                  placeholder="Enter your password"
                />
                {errPassword && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    {errPassword}
                  </p>
                )}
              </div>
              <Link to='/'>
              <button
                className="bg-primeColor hover:bg-black text-white cursor-pointer w-full text-base font-medium h-10 rounded-md duration-300"
              >
                Sign In
              </button>
              </Link>
              <p className="text-sm text-center font-titleFont font-medium mt-4">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="hover:text-blue-600 duration-300">
                    Sign Up
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

export default SignIn;
