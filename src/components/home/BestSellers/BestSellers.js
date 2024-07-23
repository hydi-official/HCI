import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

import best1 from "../../../assets/images/products/bestSeller/best1.jpg";
import best2 from "../../../assets/images/products/bestSeller/best2.jpg";
import best3 from "../../../assets/images/products/bestSeller/best3.jpg";
import best4 from "../../../assets/images/products/bestSeller/best4.jpg";
import new5 from "../../../assets/images/products/newArrival/alicia-petresc-BciCcl8tjVU-unsplash.jpg";



const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={best1}
          productName="Flower Base"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Elegant flower base perfect for showcasing your favorite blooms. Ideal for adding a touch of nature to any room"
        />
        <Product
          _id="1012"
          img={new5}
          productName="Ripped Pants"
            price="60.00"
            color="Mixed"
            badge={false}
            des="These trendy ripped pants offer a stylish, edgy look perfect for casual outings. Made from durable, high-quality denim, they provide both comfort and a modern fit. The strategically placed rips add a fashionable touch, making these pants a must-have for any fashion-forward wardrobe."
          />
        <Product
          _id="1013"
          img={best3}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Trendy ripped pants offering a stylish, casual look with a touch of edge. Perfect for a laid-back, fashionable outfit."
        />
        <Product
          _id="1014"
          img={best4}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="Spacious and durable travel bag designed for convenience on the go. Ideal for carrying essentials with style and ease."
        />
      </div>
    </div>
  );
};

export default BestSellers;
