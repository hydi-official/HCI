import React from "react";
import Heading from "../../components/home/Products/Heading";
import Product from "../../components/home/Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../assets/images/index";
import new1 from "../../assets/images/products/newArrival/New1.jpg";
import new2 from "../../assets/images/products/newArrival/new2.jpg";
import new3 from "../../assets/images/products/newArrival/new3.jpg";
import new4 from "../../assets/images/products/newArrival/new4.jpg";
import new5 from "../../assets/images/products/newArrival/alicia-petresc-BciCcl8tjVU-unsplash.jpg";

const Miscellaneous = () => {
  return (
    <div className="w-full pb-16">
      <Heading heading="Dresses" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        <Product
          _id="100001"
          img={new1}
          productName="Romantic Floral Dress"
          price="100.00"
          color="colors"
          badge={true}
          des="Elevate your wardrobe with our enchanting Romantic Floral Dress, designed to capture hearts and turn heads. This timeless piece is perfect for any occasion, from a casual day out to a special evening event."
        />
        <Product
          _id="100002"
          img={new2}
          productName="Solid Hem Halter"
            price="15.00"
            color="colors"
            badge={true}
            des="The Solid Hem Halter is a versatile piece with a classic halter neckline, perfect for any occasion. Made from high-quality, breathable fabric, it ensures comfort while maintaining a chic, timeless look"
          />
        <Product
          _id="100003"
          img={new3}
          productName="Women’s Party Dress"
            price="20.00"
            color="colors"
            badge={true}
            des="The Women's Party Dress features an elegant design with intricate detailing, perfect for special occasions. Its flattering silhouette and luxurious fabric ensure you make a stunning impression"
          />
        <Product
          _id="100004"
          img={new4}
          productName="Solid Parted Dress"
          price="15.00"
          color="colors"
          badge={false}
          des="The Solid Parted Dress boasts a sleek, sophisticated design with a unique parted detail, ideal for making a statement at any event. Its refined silhouette and high-quality fabric offer both style and comfort."
        />
        {/* <Product
          _id="100005"
          img={newArrTwo}
          productName="Funny toys for babies"
          price="60.00"
          color="Mixed"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />

<Product
          _id="100001"
          img={newArrOne}
          productName="Round Table Clock"
          price="44.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100002"
          img={newArrTwo}
          productName="Smart Watch"
          price="250.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100003"
          img={newArrThree}
          productName="Cloth Basket"
          price="80.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100004"
          img={newArrFour}
          productName="Funny toys for babies"
          price="60.00"
          color="Mixed"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100005"
          img={newArrTwo}
          productName="Funny toys for babies"
          price="60.00"
          color="Mixed"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        /> */}
      </div>
    </div>
  );
};

export default Miscellaneous;