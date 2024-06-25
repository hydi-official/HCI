import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NavTitle from "./NavTitle";

const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);
  const brands = [
    { _id: 700001, title: "Nike", link: "/Nike" },
    { _id: 700002, title: "Adidas", link: "/Adidas" },
    { _id: 700003, title: "Gucci", link: "/Gucci" },
    { _id: 700004, title: "Prada", link: "/Prada" },
    { _id: 700005, title: "Louis Vuitton", link: "/LouisVuitton" },
    { _id: 700007, title: "Versace", link: "/Versace" },
    { _id: 700008, title: "Burberry", link: "/Burberry" },
    { _id: 700009, title: "Dior", link: "/Dior" },
    { _id: 700010, title: "Hermès", link: "/Hermes" },
    { _id: 700011, title: "Rolex", link: "/Rolex" },
    { _id: 700012, title: "Fendi", link: "/Fendi" },
    { _id: 700013, title: "Balenciaga", link: "/Balenciaga" },
    { _id: 700015, title: "Zara", link: "/Zara" },
    { _id: 700016, title: "Timberland", link: "/Timberland" },
    { _id: 700018, title: "Vans", link: "/Vans" },
    { _id: 700022, title: "Fila", link: "/Fila" },
    { _id: 700024, title: "Reebok", link: "/Reebok" },
  ];

  return (
    <div>
      <div
        onClick={() => setShowBrands(!showBrands)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Brand" icons={true} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-h-60 overflow-y-auto"
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                <NavLink
                  to={item.link}
                  className="text-[#767676] hover:text-primeColor"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
