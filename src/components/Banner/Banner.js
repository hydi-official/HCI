// src/components/Banner.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";
import bestSellerFour from '../../assets/images/products/bestSeller/bestSellerFour.webp';

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgOne} />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgTwo} />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image imgSrc={bannerImgThree} />
          </div>
        </Link>
          <div>
            {/* ===== New Slide ===== */}
            <section className="py-4 md:py-5 lg:py-20 bg-gray-100">
              <div className="container">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-0">
                  <div className="w-full md:w-1/2  md:pl-[300px] ">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-0 ml-8">
                      Final Offer
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-0 ml-8">
                      Up to <span className="text-orange-500">50%</span> sale for all furniture items!
                    </p>
                    <Link to="/offer">
                    <button className="bg-black text-white mt-12 py-3 px-4 rounded hover:bg-gray-800 ml-8">
                      Shop Now
                    </button>
                    </Link>

                  </div>
                  <div className="md:w-1/2 flex justify-center items-center md:-ml-20">
                    <img
                      src={bestSellerFour}
                      alt="Special Offer"
                      className="w-60 h-auto "
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <Link to="/offer">
          <div>
            {/* ===== New Slide ===== */}
            <section className="py-4 md:py-5 lg:py-20 bg-gray-100">
              <div className="container">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-0">
                  <div className="w-full md:w-1/2  md:pl-[300px] ">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-0 ml-8">
                      Final Offer
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-0 ml-8">
                      Up to <span className="text-orange-500">50%</span> sale for all furniture items!
                    </p>
                    <Link to="/offer">
                    <button className="bg-black text-white mt-12 py-3 px-4 rounded hover:bg-gray-800 ml-8">
                      Shop Now
                    </button>
                    </Link>
                  </div>
                  <div className="md:w-1/2 flex justify-center items-center md:-ml-20">
                    <img
                      src={bestSellerFour}
                      alt="Special Offer"
                      className="w-60 h-auto "
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Link>
       
          <div>
            {/* ===== New Slide with uploaded content ===== */}
            <div className="relative w-full h-full">
              <img src={bestSellerFour} alt="Amazon Home Services Offer" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 p-4">
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl">
                  Get 10% off
                </h2>
                <p className="text-white text-lg md:text-xl lg:text-2xl">
                  Spa and salon home services with Prime
                </p>
                <Link to="/offer">
                  <button className="bg-black text-white mt-4 py-2 px-4 rounded hover:bg-gray-800">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        
      </Slider>
    </div>
  );
};

export default Banner;
