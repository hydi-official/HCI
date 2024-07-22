import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import chara from "../../../assets/Logo/Kenan Amani Logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let responsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    responsiveMenu();
    window.addEventListener("resize", responsiveMenu);

    return () => {
      window.removeEventListener("resize", responsiveMenu);
    };
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <Image className="w-32 object-cover" imgSrc={chara} />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#180948] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#180948] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img
                      className="w-28 mb-6"
                      src={chara}
                      alt="logoLight"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-[#180948] hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Clothing</li>
                          <li className="headerSedenavLi">Miscellaneous</li>
                          <li className="headerSedenavLi">Wigs</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1 max-h-60 overflow-y-auto"
                        >
                          <li className="headerSedenavLi">
        <NavLink to="/Nike">Nike</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Adidas">Adidas</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Gucci">Gucci</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Prada">Prada</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/LouisVuitton">Louis Vuitton</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Versace">Versace</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Burberry">Burberry</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Dior">Dior</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Hermes">Hermès</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Rolex">Rolex</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Fendi">Fendi</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Balenciaga">Balenciaga</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Zara">Zara</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Timberland">Timberland</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Converse">Converse</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Vans">Vans</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Supreme">Supreme</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Fila">Fila</NavLink>
      </li>
      <li className="headerSedenavLi">
        <NavLink to="/Reebok">Reebok</NavLink>
      </li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
