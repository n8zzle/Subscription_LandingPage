"use client";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState);
  };
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-screen p-3 md:p-10 z-10 "
    >
      <div className="flex justify-between p-5 bg-[#6b7af1]  items-center  text-white rounded-lg shadow-lg">
        {/* Left Part  */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="flex items-center hover:cursor-pointer"
        >
          <span>
            <StarIcon />
          </span>
          <h1 className="font-bold text-xl md:text-2xl ">Subscription</h1>
        </motion.div>
        {/* Middle Part */}
        <div className="hidden md:flex md:space-x-10">
          <button className="hover:text-black hover:duration-300">About</button>
          <button className="hover:text-black hover:duration-300">Work</button>
          <button className="hover:text-black hover:duration-300">
            Who it's for
          </button>
          <button className="hover:text-black hover:duration-300">
            Services
          </button>
          <button className="hover:text-black hover:duration-300">FAQs</button>
        </div>
        {/* Right Part  */}
        <div className="hidden md:flex">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="bg-white text-black font-bold px-4 py-2 rounded-full "
          >
            See plans
          </motion.button>
        </div>

        {/*Mobile Menu*/}
        <div className="md:hidden">
          <IconButton onClick={toggleMenu}>
            <MenuIcon className="text-white" />
          </IconButton>
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={menuState}
            onClose={() => setMenuState(false)}
            PaperProps={{
              style: {
                width: "100%",
              },
            }}
          >
            <MenuItem onClick={() => setMenuState(false)}>About</MenuItem>
            <MenuItem onClick={() => setMenuState(false)}>Work</MenuItem>
            <MenuItem onClick={() => setMenuState(false)}>
              Who it's for
            </MenuItem>
            <MenuItem onClick={() => setMenuState(false)}>Services</MenuItem>
            <MenuItem onClick={() => setMenuState(false)}>FAQs</MenuItem>
            <MenuItem onClick={() => setMenuState(false)}>See plans</MenuItem>
          </Menu>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
