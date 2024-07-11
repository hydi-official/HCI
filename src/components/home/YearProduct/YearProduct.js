import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";
import { bestSellerFour } from "../../../assets/images";
const YearProduct = () => {
  return (
      <div className="w-full h-90 mb-20 bg-gray-100 relative font-titleFont">
        <Image
          className=" object-cover hidden md:inline-block"
          imgSrc={bestSellerFour}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <Link to="/shop">

          <ShopNow />
          </Link>

        </div>
      </div>
  );
};

export default YearProduct;
