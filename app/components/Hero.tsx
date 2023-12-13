"use client";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";
import HeroLeftImage from "./HeroLeftImage";
import HeroRightImage from "./HeroRightImage";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen w-screen flex md:p-10 bg-gray-100">
      <HeroLeftImage className="sm:hidden" />
      <div className="bg-[#6b7af1] w-screen flex flex-col justify-center items-center md:p-32 p-10 md:space-y-10 space-y-5 rounded-lg">
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:text-6xl text-2xl text-white font-extrabold text-center"
        >
          Unlimited web design at a fixed monthly price
        </motion.h1>
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:text-4xl font-thin"
        >
          Design and development requests for a fixed fee. Pause or cancel at
          any time.
        </motion.p>
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="bg-white text-black px-16 py-4 flex rounded-full space-x-3"
        >
          <p className="text-black md:text-xl font-bold">See Plan</p>
          <ArrowDownwardIcon />
        </motion.button>
      </div>
      <HeroRightImage />
    </div>
  );
};

export default Hero;
