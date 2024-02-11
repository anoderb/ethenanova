import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import navVariants from "../lib/framer/navVariants";
import DesktopNavbar from "../partials/Navbar/DesktopNavbar";
import NavbarMobile from "../partials/Navbar/NavbarMobile";
import Button from "./Button";

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
          href={"/"}
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
