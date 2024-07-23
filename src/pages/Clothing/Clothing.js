import React from "react";
import Heading from "../../components/home/Products/Heading";
import Product from "../../components/home/Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../assets/images/index";
import { FaArrowRight } from 'react-icons/fa';
import image1 from "../../assets/images/products/blouses/behrouz-sasani-wi6ukB6KrA0-unsplash.jpg";
import image2 from "../../assets/images/products/blouses/laura-chouette-WQgvRkmqRrg-unsplash.jpg";
import image3 from "../../assets/images/products/blouses/antonio-figueredo-3I_aBm_xbkw-unsplash.jpg";
import image4 from "../../assets/images/products/blouses/yasu-shots-_y6hMz1pJC0-unsplash.jpg";



const Clothing = () => {
  return (
    <div className="w-full pb-16">
      <div className="flex items-center justify-between px-2 mb-4">
        <Heading heading="Blouses"className='text-[#180948]' />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        <Product
          _id="100001"
          img={image1}
          productName="Off-Shoulder Blouse"
          price="44.00"
          color="Black, White"
          badge={true}
          des="This elegant off-shoulder blouse features a flattering neckline that gracefully reveals your shoulders, adding a touch of sophistication and allure. Made from high-quality, breathable fabric, it offers both comfort and style. Perfect for casual outings or dressy occasions, it's a versatile addition to any wardrobe."
        />
        <Product
          _id="100002"
          img={image2}
          productName="Tied-up Blouse"
          price="250.00"
          color="Black"
          badge={true}
          des="This chic tied-up blouse boasts a stylish front tie detail, creating a flattering silhouette. Crafted from premium, soft fabric, it ensures comfort and elegance. Ideal for both casual and semi-formal events, this versatile blouse effortlessly enhances your look, making it a must-have for any fashion-forward wardrobe."
        />
        <Product
          _id="100003"
          img={image3}
          productName="Women's casual Blouse"
          price="80.00"
          color="Mixed"
          badge={true}
          des="This versatile women's casual blouse offers a perfect blend of comfort and style. Made from soft, breathable fabric, it features a relaxed fit and timeless design, ideal for everyday wear. Dress it up or down effortlessly for any occasion, making it an essential addition to any modern wardrobe."
        />
        <Product
          _id="100004"
          img={image4}
          productName="Full-Length Blouse"
          price="60.00"
          color="Mixed"
          badge={false}
          des="This sophisticated full-length blouse combines elegance and comfort. Crafted from high-quality, breathable fabric, it drapes beautifully to create a flattering silhouette. Perfect for both casual and formal settings, this versatile blouse effortlessly enhances any outfit, making it an indispensable piece in your wardrobe."
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

export default Clothing;
