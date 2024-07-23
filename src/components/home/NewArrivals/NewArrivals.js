import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";

import new1 from "../../../assets/images/products/newArrival/New1.jpg";
import new2 from "../../../assets/images/products/newArrival/new2.jpg";
import new3 from "../../../assets/images/products/newArrival/new3.jpg";
import new4 from "../../../assets/images/products/newArrival/new4.jpg";
import new5 from "../../../assets/images/products/newArrival/alicia-petresc-BciCcl8tjVU-unsplash.jpg";





import nii from '../../../assets/images/nii.png';
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={new1}
            productName="Romantic Floral Dress"
            price="100.00"
            color="colors"
            badge={true}
            des="Elevate your wardrobe with our enchanting Romantic Floral Dress, designed to capture hearts and turn heads. This timeless piece is perfect for any occasion, from a casual day out to a special evening event."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={new2}
            productName="Solid Hem Halter"
            price="15.00"
            color="colors"
            badge={true}
            des="The Solid Hem Halter is a versatile piece with a classic halter neckline, perfect for any occasion. Made from high-quality, breathable fabric, it ensures comfort while maintaining a chic, timeless look"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={new3}
            productName="Women’s Party Dress"
            price="20.00"
            color="colors"
            badge={true}
            des="The Women's Party Dress features an elegant design with intricate detailing, perfect for special occasions. Its flattering silhouette and luxurious fabric ensure you make a stunning impression"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={new4}
            productName="Solid Parted Dress"
            price="15.00"
            color="colors"
            badge={false}
            des="The Solid Parted Dress boasts a sleek, sophisticated design with a unique parted detail, ideal for making a statement at any event. Its refined silhouette and high-quality fabric offer both style and comfort."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={new5}
            productName="Ripped Pants"
            price="60.00"
            color="Mixed"
            badge={false}
            des="These trendy ripped pants offer a stylish, edgy look perfect for casual outings. Made from durable, high-quality denim, they provide both comfort and a modern fit. The strategically placed rips add a fashionable touch, making these pants a must-have for any fashion-forward wardrobe."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
