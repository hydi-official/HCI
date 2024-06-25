import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Color = () => {
  const [showColors, setShowColors] = useState(true);
  const colors = [
    {
      _id: 9001,
      title: "Green",
      base: "#22c55e",
    },
    {
      _id: 9002,
      title: "Gray",
      base: "#a3a3a3",
    },
    {
      _id: 9003,
      title: "Red",
      base: "#dc2626",
    },
    {
      _id: 9004,
      title: "Yellow",
      base: "#f59e0b",
    },
    {
      _id: 9005,
      title: "Blue",
      base: "#3b82f6",
    },
    {
      _id: 9006,
      title: "Purple",
      base: "#8b5cf6",
    },
    {
      _id: 9007,
      title: "Orange",
      base: "#f97316",
    },
    {
      _id: 9008,
      title: "Indigo",
      base: "#4f46e5",
    },
    {
      _id: 9009,
      title: "Violet",
      base: "#7c3aed",
    },
    {
      _id: 9010,
      title: "Pink",
      base: "#ec4899",
    },
    {
      _id: 9011,
      title: "Cyan",
      base: "#06b6d4",
    },
    {
      _id: 9012,
      title: "Teal",
      base: "#14b8a6",
    },
    {
      _id: 9013,
      title: "Lime",
      base: "#84cc16",
    },
    {
      _id: 9014,
      title: "Amber",
      base: "#f59e0b",
    },
    {
      _id: 9015,
      title: "Brown",
      base: "#854c00",
    },
  ];

  return (
    <div>
      <div
        onClick={() => setShowColors(!showColors)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Color" icons={true} />
      </div>
      {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-y-auto max-h-40" // Limit height and add scroll if overflow
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {colors.slice(0, 4).map((item) => ( // Display only first 4 colors
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2"
              >
                <span
                  style={{ background: item.base }}
                  className="w-3 h-3 bg-gray-500 rounded-full"
                ></span>
                {item.title}
              </li>
            ))}
            {/* Use a separate list for additional colors with conditional display */}
            <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
              {colors.slice(4).map((item) => (
                <li
                  key={item._id}
                  className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2"
                >
                  <span
                    style={{ background: item.base }}
                    className="w-3 h-3 bg-gray-500 rounded-full"
                  ></span>
                  {item.title}
                </li>
              ))}
            </ul>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Color;
