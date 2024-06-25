import React from "react";
import { Link } from "react-router-dom";
import {
  bestSellerThree,
  bestSellerTwo,
  bestSellerOne
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="container mx-auto py-10 md:py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-1/2 lg:w-1/2 h-auto">
        <Link to="/shop">
          <div className="relative w-full h-full">
            <img src={bestSellerThree} alt="Phones Sale" className="w-[400px] h-[400px] object-cover" />
            <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75">
              <h2 className="text-black text-2xl md:text-3xl lg:text-4xl">
                Phones Sale
              </h2>
              <p className="text-black text-lg md:text-xl lg:text-2xl">
                Up to <span className="text-orange-500">30%</span> sale for all phones!
              </p>
              <button className="bg-black text-white mt-4 py-2 px-4 rounded hover:bg-gray-800">
                Shop Now
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <div className="relative w-full h-full">
              <img src={bestSellerOne} alt="Electronics Sale" className="w-[400px] h-[400px] object-cover" />
              <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75">
                <h2 className="text-black text-2xl md:text-3xl lg:text-4xl">
                  Electronics Sale
                </h2>
                <p className="text-black text-lg md:text-xl lg:text-2xl">
                  Up to <span className="text-orange-500">70%</span> sale for all electronics!
                </p>
                <button className="bg-black text-white mt-4 py-2 px-4 rounded hover:bg-gray-800">
                  Shop Now
                </button>
              </div>
            </div>
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <div className="relative w-full h-full">
              <img src={bestSellerTwo} alt="Furniture Sale" className="w-[400px] h-[400px] object-cover" />
              <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75">
                <h2 className="text-black text-2xl md:text-3xl lg:text-4xl">
                  Furniture Sale
                </h2>
                <p className="text-black text-lg md:text-xl lg:text-2xl">
                  Up to <span className="text-orange-500">50%</span> sale for all furniture items!
                </p>
                <button className="bg-black text-white mt-4 py-2 px-4 rounded hover:bg-gray-800">
                  Shop Now
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
