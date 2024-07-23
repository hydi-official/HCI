import React from "react";
import Heading from "../../components/home/Products/Heading";
import Product from "../../components/home/Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../assets/images/index";
import im1 from "../../assets/images/products/footwear/martin-katler-Y4fKN-RlMV4-unsplash.jpg"
import im2 from "../../assets/images/products/footwear/mojtaba-fahiminia-t4g1gctAaKk-unsplash.jpg"
import im3 from "../../assets/images/products/footwear/alex-quezada-qAyOt0aGsCo-unsplash.jpg"
import im4 from "../../assets/images/products/footwear/loita-george-spHPsH1qxvA-unsplash.jpg"


const Accessories = () => {
  return (
    <div className="w-full pb-16">
      <Heading heading="Footwear" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        <Product
          _id="100001"
          img={im1}
          productName="Men's Grey Footwear"
          price="44.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100002"
          img={im2}
          productName="Low Dunks"
          price="250.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100003"
          img={im3}
          productName="Gray Boots"
          price="80.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100004"
          img={im4}
          productName="Black Jordans"
          price="60.00"
          color="Mixed"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
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

export default Accessories;