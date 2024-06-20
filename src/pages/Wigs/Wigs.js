import React from "react";
import Heading from "../../components/home/Products/Heading";
import Product from "../../components/home/Products/Product";
import wig2 from "../../assets/images/donald-teel-kzyCcIgE2m4-unsplash.jpg";
import wig3 from "../../assets/images/valerie-elash-XUT7V_md7sc-unsplash.jpg";
import wig4 from "../../assets/images/vladimir-yelizarov-0XfjLwiI1sk-unsplash.jpg";
import wig5 from "../../assets/images/joey-nicotra-erGcMFMaYGk-unsplash.jpg"
const Wigs = () => {
  return (
    <div className="w-full pb-16">
      <Heading heading="Wigs" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        <Product
          _id="100001"
          img={wig5}
          productName="Round Table Clock"
          price="44.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100002"
          img={wig2}
          productName="Smart Watch"
          price="250.00"
          color="Black"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100003"
          img={wig3}
          productName="Cloth Basket"
          price="80.00"
          color="Mixed"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="100004"
          img={wig4}
          productName="Funny toys for babies"
          price="60.00"
          color="Mixed"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />

      </div>
    </div>
  );
};

export default Wigs;