import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import navVariants from "../lib/framer/navVariants";
import Button from "./Button";

const DesktopNavbar = dynamic(() => import("../partials/Navbar/DesktopNavbar"));
const NavbarMobile = dynamic(() => import("../partials/Navbar/NavbarMobile"));

// eslint-disable-next-line
const Navbar = () => {
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8 relative z-50"
    >
      <div className="absolute w-[50%] gradient-04" />
      <nav className="innerWidth mx-auto flex justify-between gap-8">
        <Link
          href="/"
          className="font-extrabold text-[24px] leading-[30.24px] text-white"
        >
          ETHENA NOVA
        </Link>
        <DesktopNavbar />
        <Button />
        <NavbarMobile />
      </nav>
    </motion.header>
  );
};
export default Navbar;
