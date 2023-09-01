import React, { useState } from "react";
import { motion } from "framer-motion";





const Filter = ({ label, isActive, onClick }) => {
  return (
    <motion.button
      className={`filter-button ${isActive ? "active" : ""}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default Filter;
