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
      className="fixed top-0 left-0 p-5 w-full "
    >
      <div className="flex justify-between p-5 bg-[#6b7af1]  items-center  text-white rounded-lg shadow-lg">
        {/* Left Part  */}
        <div className="group flex items-center">
          <span>
            <StarIcon className="group-hover:opacity-[75%]" />
          </span>
          <h1 className="font-bold text-xl md:text-2xl group-hover:opacity-[75%]">
            Subscription
          </h1>
        </div>
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
          <button className="bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-black hover:text-white">
            See plans
          </button>
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
