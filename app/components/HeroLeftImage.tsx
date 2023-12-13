"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const HeroLeftImage = () => {
  return (
    <motion.div
      initial={{ left: -500, bottom: 0 }}
      animate={{ left: -50, bottom: 0 }}
      className="absolute scale-150 "
    >
      <Image
        width={400}
        height={400}
        className="hidden md:flex"
        src="/HeroLeftImage.webp"
      />
    </motion.div>
  );
};

export default HeroLeftImage;
