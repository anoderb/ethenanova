"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Button from "./Button";

export default function Navbar() {
  const [isDropdownHome, setIsDropdownHome] = useState(false);
  const [isDropdownBridge, setIsDropdownBridge] = useState(false);
  const [isDropdownNFT, setIsDropdownNFT] = useState(false);
  const [isDropdownHomeMobile, setIsDropdownHomeMobile] = useState(false);
  const [isDropdownBridgeMobile, setIsDropdownBridgeMobile] = useState(false);
  const [isDropdownNFTMobile, setIsDropdownNFTMobile] = useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsDropdownHome(false);
      setIsDropdownBridge(false);
      setIsDropdownNFT(false);
      setIsDropdownHomeMobile(false);
      setIsDropdownBridgeMobile(false);
      setIsDropdownNFTMobile(false);
      setIsHamburgerMenu(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownHome = () => {
    setIsDropdownHome(!isDropdownHome);
    if (isDropdownBridge === true) {
      setIsDropdownBridge(false);
    }
    if (isDropdownNFT === true) {
      setIsDropdownNFT(false);
    }
  };
  const handleDropdownBridge = () => {
    setIsDropdownBridge(!isDropdownBridge);
    if (isDropdownHome === true) {
      setIsDropdownHome(false);
    }
    if (isDropdownNFT === true) {
      setIsDropdownNFT(false);
    }
  };
  const handleDropdownNFT = () => {
    setIsDropdownNFT(!isDropdownNFT);
    if (isDropdownBridge === true) {
      setIsDropdownBridge(false);
    }
    if (isDropdownHome === true) {
      setIsDropdownHome(false);
    }
  };
  const handleDropdownHomeMobile = () => {
    setIsDropdownHomeMobile(!isDropdownHomeMobile);
    if (isDropdownBridgeMobile === true) {
      setIsDropdownBridgeMobile(false);
    }
    if (isDropdownNFTMobile === true) {
      setIsDropdownNFTMobile(false);
    }
  };
  const handleDropdownBridgeMobile = () => {
    setIsDropdownBridgeMobile(!isDropdownBridgeMobile);
    if (isDropdownHomeMobile === true) {
      setIsDropdownHomeMobile(false);
    }
    if (isDropdownNFTMobile === true) {
      setIsDropdownNFTMobile(false);
    }
  };
  const handleDropdownNFTMobile = () => {
    setIsDropdownNFTMobile(!isDropdownNFTMobile);
    if (isDropdownBridgeMobile === true) {
      setIsDropdownBridgeMobile(false);
    }
    if (isDropdownHomeMobile === true) {
      setIsDropdownHomeMobile(false);
    }
  };
  const handleMenu = () => {
    setIsHamburgerMenu(!isHamburgerMenu);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative z-50`}
    >
      <div className="absolute w-[50%]  gradient-04" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          ETHERNAL
        </h2>
        <ul className="text-white text-[24px]  flex-row justify-between space-x-32 hidden lg:flex ">
          <li className="">
            <a href="/" onClick={handleDropdownHome}>
              Products
            </a>
            {isDropdownHome && (
              <ul className="dropdown absolute bg-primary-black p-4 rounded-xl h-[280px] mt-8 w-[480px] -ml-48">
                <li className="mb-4 justify-center items-center">
                  <p className="text-[18px] mb-2">Solutions</p>
                  <div className="flex flex-row justify-between mb-4">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Appchains</p>
                      <p className="text-[14px]">Get with Cosmos SDK</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">Comet RF</p>
                      <p className="text-[14px]">Get started with Cosmos SDK</p>
                    </span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Interchain</p>
                      <p className="text-[14px]">Get started with SDK</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">IBC Protocol</p>
                      <p className="text-[14px]">Get started with Cosmos SDK</p>
                    </span>
                  </div>
                </li>
                <li>
                  <p className="text-[18px]">Learn</p>
                  <div className="flex flex-row justify-between ">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Interchain</p>
                      <p className="text-[14px]">Get started with SDK</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">IBC Protocol</p>
                      <p className="text-[14px]">Get started with Cosmos SDK</p>
                    </span>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li className="">
            <a href="/" onClick={handleDropdownNFT}>
              NFT
            </a>
            {isDropdownNFT && (
              <ul className="dropdown absolute bg-primary-black p-4 rounded-xl h-[280px] mt-8 w-[480px] -ml-52 ">
                <li className="mb-4 justify-center items-center">
                  <p className="text-[18px] mb-2">Solutions</p>
                  <div className="flex flex-row justify-between mb-4">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Appchains</p>
                      <p className="text-[14px]">Get with Cosmos SDK</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">Comet RF</p>
                      <p className="text-[14px]">Get started with Cosmos SDK</p>
                    </span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Interchain</p>
                      <p className="text-[14px]">Get started with SDK</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">IBC Protocol</p>
                      <p className="text-[14px]">Get started with Cosmos SDK</p>
                    </span>
                  </div>
                </li>
                <li>
                  <p className="text-[18px]">Learn</p>
                  <div className="flex flex-row justify-between ">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Interchain</p>
                      <p className="text-[14px]">Get started with SDK</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">IBC Protocol</p>
                      <p className="text-[14px]">Get started with Cosmos SDK</p>
                    </span>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li className="">
            <a href="/" onClick={handleDropdownBridge}>
              Bridge
            </a>
            {isDropdownBridge && (
              <ul className=" absolute bg-primary-black p-4 rounded-xl h-[280px] mt-8 w-[480px] -ml-44">
                <li className="mb-4 justify-center items-center">
                  <p className="text-[18px] mb-2">Solutions</p>
                  <div className="flex flex-row justify-between mb-4">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Appchains</p>
                      <p className="text-[14px]">Get with Cosmos SDK</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">Comet RF</p>
                      <p className="text-[14px]">Get started with Cosmos SDK</p>
                    </span>
                  </div>
                  <div className="flex flex-row justify-between">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Interchain</p>
                      <p className="text-[14px]">Get started with SDK</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">IBC Protocol</p>
                      <p className="text-[14px]">Get started with Cosmos SDK</p>
                    </span>
                  </div>
                </li>
                <li>
                  <p className="text-[18px]">Learn</p>
                  <div className="flex flex-row justify-between ">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Interchain</p>
                      <p className="text-[14px]">Get started with SDK</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">IBC Protocol</p>
                      <p className="text-[14px]">Get started with Cosmos SDK</p>
                    </span>
                  </div>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <Button />
        {/* nav mobile */}
        {isHamburgerMenu ? (
          <img
            src="/close.svg"
            onClick={handleMenu}
            alt="close"
            className="w-[24px] bg-white h-[24px] lg:hidden flex object-contain cursor-pointer"
          />
        ) : (
          <img
            onClick={handleMenu}
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] lg:hidden flex object-contain cursor-pointer"
          />
        )}
        {isHamburgerMenu && (
          <div className="absolute bg-primary-black text-white  lg:hidden w-full mt-10 -ml-[28px] md:-ml-[65px]">
            <ul className="dropdown p-2 md:p-5 flex items-center justify-center flex-col">
              <li
                className="flex flex-row justify-between  border-gray-500 border-b w-full px-8 mb-3 cursor-pointer"
                onClick={handleDropdownHomeMobile}
              >
                <span className="text-[18px] pb-3">Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              {isDropdownHomeMobile && (
                <div className="  bg-primary-black lg:hidden w-full -mt-3 mb-2 overflow-hidden transition-height duration-300">
                  <ul className="dropdown p-2 md:p-5 flex items-start pl-10 space-y-2 cursor-pointer flex-col">
                    <li>
                      <span>Products</span>
                    </li>
                    <li>
                      <span>Bridge</span>
                    </li>
                    <li>
                      <span>NFT</span>
                    </li>
                  </ul>
                </div>
              )}
              <li
                className="flex flex-row justify-between  border-gray-500 border-b w-full px-8 mb-3 cursor-pointer"
                onClick={handleDropdownBridgeMobile}
              >
                <span className="text-[18px] pb-3">Bridge</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              {isDropdownBridgeMobile && (
                <div className="  bg-primary-black lg:hidden w-full -mt-3 mb-2 overflow-hidden transition-height duration-300">
                  <ul className="dropdown p-2 md:p-5 flex items-start pl-10 space-y-2 cursor-pointer flex-col">
                    <li>
                      <span>Products</span>
                    </li>
                    <li>
                      <span>Bridge</span>
                    </li>
                    <li>
                      <span>NFT</span>
                    </li>
                  </ul>
                </div>
              )}
              <li
                className="flex flex-row justify-between  border-gray-500 border-b w-full px-8 mb-1 cursor-pointer"
                onClick={handleDropdownNFTMobile}
              >
                <span className="text-[18px] pb-3">NFT</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              {isDropdownNFTMobile && (
                <div className="  bg-primary-black lg:hidden w-full -mt-3  overflow-hidden transition-height duration-300">
                  <ul className="dropdown p-2 md:p-5 flex items-start pl-10 space-y-2 cursor-pointer flex-col">
                    <li>
                      <span>Products</span>
                    </li>
                    <li>
                      <span>Bridge</span>
                    </li>
                    <li>
                      <span>NFT</span>
                    </li>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
