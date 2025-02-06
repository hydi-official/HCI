import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import contactImage from "../../assets/images/tele.png";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // Error Messages
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = (e) => {
    e.preventDefault();

    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else if (!EmailValidation(email)) {
      setErrEmail("Enter a Valid Email");
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }

    if (clientName && email && EmailValidation(email) && messages) {
      toast.success(
        `Thank you, ${clientName}. Your message has been received successfully! Further details will be sent to ${email}.`,
        { position: "top-right", autoClose: 5000 }
      );

      // Clear fields after submission
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };

  return (
    <div className="max-w-container mx-auto px-4 py-8">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      <ToastContainer />
      <div className="flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="w-full md:w-1/3 pr-4">
          <form className="pb-20">
            <h1 className="font-titleFont font-semibold text-3xl">
              Fill up a Form
            </h1>
            <div className="py-6 flex flex-col gap-6">
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Name
                </p>
                <input
                  onChange={handleName}
                  value={clientName}
                  className="w-full py-1 border-b-2 px-2 text-base font-medium outline-none focus-within:border-primeColor"
                  type="text"
                  placeholder="Enter your name here"
                />
                {errClientName && (
                  <p className="text-red-500 text-sm font-semibold mt-1 px-2">
                    {errClientName}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Email
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full py-1 border-b-2 px-2 text-base font-medium outline-none focus-within:border-primeColor"
                  type="email"
                  placeholder="Enter your email here"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm font-semibold mt-1 px-2">
                    {errEmail}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Messages
                </p>
                <textarea
                  onChange={handleMessages}
                  value={messages}
                  cols="30"
                  rows="3"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium outline-none focus-within:border-primeColor resize-none"
                  placeholder="Enter your messages here"
                ></textarea>
                {errMessages && (
                  <p className="text-red-500 text-sm font-semibold mt-1 px-2">
                    {errMessages}
                  </p>
                )}
              </div>
              <button
                onClick={handlePost}
                className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
              >
                Post
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center ml-12 mb-12">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
