import React from "react";
import Heading from "../../components/home/Products/Heading";
import Product from "../../components/home/Products/Product";
import wig2 from "../../assets/images/shopbyorder/grailify-9Ch-39ZNDk0-unsplash.jpg";
import wig3 from "../../assets/images/shopbyorder/karsten-winegeart-6Uz8LaZPZsE-unsplash.jpg";
import wig4 from "../../assets/images/shopbyorder/mahaan-mehranii-kTegU2zb2tA-unsplash.jpg";
import wig5 from "../../assets/images/shopbyorder/joecalih-kFtTXa5ZS1Q-unsplash.jpg"
const Nike = () => {
  return (
    <div className="w-full pb-16">
      <Heading heading="Nike" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        <Product
          _id="100001"
          img={wig5}
          productName="Nike Tops"
          price="44.00"
          color="Black"
          badge={true}
          des="Nike tops blend performance and style effortlessly. Made with high-quality, breathable fabrics, they offer comfort and durability for any activity. With sleek designs and innovative features, these tops are perfect for workouts or casual wear, making them an essential addition to any active wardrobe."
        />
        <Product
          _id="100002"
          img={wig2}
          productName="Nike Joggers"
          price="250.00"
          color="Black"
          badge={true}
          des="Nike joggers provide the perfect combination of comfort and style. Made from premium, breathable materials, they offer a relaxed fit with an adjustable waistband. Ideal for workouts or casual wear, these joggers feature sleek designs and functional pockets, making them a versatile addition to any wardrobe."
        />
        <Product
          _id="100003"
          img={wig3}
          productName="Nike shoes"
          price="80.00"
          color="Mixed"
          badge={true}
          des="Nike shoes offer unparalleled comfort, style, and performance. Crafted with innovative technology and premium materials, they provide excellent support and durability for various activities. With a wide range of designs and colors, these versatile shoes are perfect for both athletic pursuits and everyday wear, making them a must-have for any footwear collection."
        />
        <Product
          _id="100004"
          img={wig4}
          productName="Nike Jackets"
          price="60.00"
          color="Mixed"
          badge={false}
          des="Nike jackets combine cutting-edge design with superior comfort and functionality. Crafted from high-quality materials, they provide excellent warmth and protection against the elements. Featuring sleek styles and innovative details, these jackets are perfect for both athletic and casual wear, making them an essential addition to any wardrobe."
        />

      </div>
    </div>
  );
};

export default Nike;