"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const HeroRightImage = () => {
  return (
    <motion.div
      initial={{ right: -500, top: 150 }}
      animate={{ right: -120, top: "30%" }}
      className="absolute overflow-visible"
    >
      <Image
        width={400}
        height={400}
        className="hidden md:flex scale-150"
        src="/HeroRightImage.webp"
      />
    </motion.div>
  );
};

export default HeroRightImage;
