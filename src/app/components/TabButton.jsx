import React from "react";
import { motion } from "framer-motion";

const varients = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white " : "text-yellow-500";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "acvtive" : "default"}
        variants={varients}
        className="h-1 bg-orange-500 mt-0 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
