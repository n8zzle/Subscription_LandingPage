"use client";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#6b7af1] h-screen rounded-md flex flex-col justify-center items-center p-32 space-y-10 "
    >
      <h1 className="text-8xl text-white font-extrabold text-center">
        Unlimited web design at a fixed monthly price
      </h1>
      <p className="text-4xl font-thin ">
        Design and development requests for a fixed fee. Pause or cancel at any
        time.
      </p>
      <button className="bg-white text-black px-16 py-4 flex rounded-full space-x-3">
        <p className="text-black text-xl font-bold">See Plan</p>
        <ArrowDownwardIcon />
      </button>
    </div>
  );
};

export default Hero;
