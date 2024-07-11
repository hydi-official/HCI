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
import HeroSectionImage from "../../assets/images/banner/HeroSectionImage.jpg";
const Banner = () => {
  // const [dotActive, setDocActive] = useState(0);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   beforeChange: (prev, next) => {
  //     setDocActive(next);
  //   },
  //   appendDots: (dots) => (
  //     <div
  //       style={{
  //         position: "absolute",
  //         top: "50%",
  //         left: "7%",
  //         transform: "translateY(-50%)",
  //       }}
  //     >
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </div>
  //   ),
  //   customPaging: (i) => (
  //     <div
  //       style={
  //         i === dotActive
  //           ? {
  //               width: "30px",
  //               color: "#262626",
  //               borderRight: "3px #262626 solid",
  //               padding: "8px 0",
  //               cursor: "pointer",
  //             }
  //           : {
  //               width: "30px",
  //               color: "transparent",
  //               borderRight: "3px white solid",
  //               padding: "8px 0",
  //               cursor: "pointer",
  //             }
  //       }
  //     >
  //       0{i + 1}
  //     </div>
  //   ),
  //   responsive: [
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         dots: true,
  //         appendDots: (dots) => (
  //           <div
  //             style={{
  //               position: "absolute",
  //               top: "50%",
  //               left: "2%",
  //               transform: "translateY(-50%)",
  //             }}
  //           >
  //             <ul style={{ margin: "0px" }}> {dots} </ul>
  //           </div>
  //         ),
  //         customPaging: (i) => (
  //           <div
  //             style={
  //               i === dotActive
  //                 ? {
  //                     width: "25px",
  //                     color: "#262626",
  //                     borderRight: "3px #262626 solid",
  //                     cursor: "pointer",
  //                     fontSize: "12px",
  //                   }
  //                 : {
  //                     width: "25px",
  //                     color: "transparent",
  //                     borderRight: "3px white solid",
  //                     cursor: "pointer",
  //                     fontSize: "12px",
  //                   }
  //             }
  //           >
  //             0{i + 1}
  //           </div>
  //         ),
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="relative h-[440px] bg-cover bg-center" style={{ backgroundImage: `url(${HeroSectionImage})` }}>
    <div className="p-6">
      <h1 className="text-2xl font-syncopate font-medium  mb-4 text-left text-[#180948]">Welcome to</h1>
      <h2 className="text-6xl md:text-[100] font-syncopate  font-bold mb-12 text-left text-[#180948]">Kenan Amani</h2>
      <Link to='/shop'>
      <button className="bg-[#180948] hover:bg-purple-900 text-white font-bold py-2 px-6 rounded mt-8 text-left">
        Shop Now
      </button>
      </Link>
    </div>
  </div>
  );
};

export default Banner;
