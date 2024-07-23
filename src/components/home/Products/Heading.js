import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const Heading = ({ heading }) => {
  return (
    <div className="flex items-center text-3xl font-semibold pt-4 text-[#180948] ml-2">
      {/* <Link to="/">
        <div className="bg-[#949292] p-2 rounded-full mr-2 text-[20px]">
          <FaArrowLeft className="text-white" />
        </div>
      </Link> */}
      <span>{heading}</span>
    </div>
  );
};

export default Heading;
