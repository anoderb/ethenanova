'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Button from './Button';

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
        <ul className="text-white text-[20px]  flex-row justify-between space-x-32 hidden lg:flex ">
          <li className="relative">
            <a href="#" className=" duration-200" onMouseClick={handleDropdownHome} onMouseLeave={handleDropdownHome} >
              Products
            </a>
            {isDropdownHome && (
              <ul className="dropdown absolute bg-gradient-to-b from-gray-900 to-slate-800 p-4 rounded-xl h-[280px] mt-8 w-[480px] opacity-95">
                <li className="mb-4 justify-center items-center ">
                  <p className="text-[20px] mb-2 hover:text-gray-200 font-bold">Products</p>
                  <div className="flex flex-row justify-between mb-4">
                    <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]">Marketplace</p>
                      <p className="text-[14px] text-slate-300">Comming soon</p>
                    </a>
                    <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]">Dex</p>
                      <p className="text-[14px] text-slate-300">Cooming soon</p>
                    </a>
                  </div>
                  <div className="flex flex-row justify-between">
                    {/* <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]">Wallet</p>
                      <p className="text-[14px]">cooming soon</p>
                    </a> */}
                    <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]">Tools</p>
                      <p className="text-[14px] text-slate-300">Cooming Soon</p>
                    </a>
                  </div>
                </li>
                <li>
                  <p className="text-[20px]">Learn</p>
                  <div className="flex flex-row justify-between ">
                    <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]">Docs</p>
                      <p className="text-[14px] text-slate-300">Comming soon</p>
                    </a>
                    <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]">Tutorial</p>
                      <p className="text-[14px] text-slate-300">Cooming soon</p>
                    </a>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li className="">
            <a href="#" className="" onMouseClick={handleDropdownNFT} onMouseLeave={handleDropdownNFT}>
              Resource
            </a>
            {isDropdownNFT && (
              <ul className="dropdown absolute bg-gradient-to-b from-gray-900 to-slate-800 p-4 rounded-xl h-[280px] mt-8 w-[480px] opacity-95">
                <li className="mb-4 justify-center items-center ">
                  <p className="text-[20px] mb-2 hover:text-gray-200 font-bold">Resource</p>
                  <div className="flex flex-row justify-between mb-4">
                    <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]">Ecosystem</p>
                      <p className="text-[14px] text-slate-300">Cooming soon</p>
                    </a>
                    <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]">Partner</p>
                      <p className="text-[14px] text-slate-300">Cooming soon</p>
                    </a>
                  </div>
                  <div className="flex flex-row justify-between">
                    <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]">Token</p>
                      <p className="text-[14px] text-slate-300">Cooming soon</p>
                    </a>
                    <a href="/" className="flex-flex-col pr-4">
                      <p className="text-[18px]"> Validator </p>
                      <p className="text-[14px] text-slate-300"> Cooming soon</p>
                    </a>
                  </div>
                </li>
                <li>
                  <p className="text-[18px] font-bold">Community</p>
                  <div className="flex flex-row justify-between ">
                    <span className="flex-flex-col pr-4">
                      <p className="text-[18px]">Blog</p>
                      <p className="text-[14px] text-slate-300">Cooming Soon</p>
                    </span>
                    <span className="flex-flex-col">
                      <p className="text-[18px]">Discussion Forum</p>
                      <p className="text-[14px] text-slate-300">Comming soon</p>
                    </span>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li className="">
            <a href="/" className="">
              About
            </a>
            {/* {isDropdownBridge && (
              <ul className=" absolute bg-primary-black p-4 rounded-xl h-[280px] mt-8 w-[480px]">
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
            )} */}
          </li>
        </ul>
        <Button />
        {/* nav mobile */}
        {isHamburgerMenu ? (
          <svg onClick={handleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[30px] h-[30px] cursor-pointer text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <img
            onClick={handleMenu}
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] lg:hidden flex object-contain cursor-pointer"
          />
        )}
        {isHamburgerMenu && (
          <div className="absolute bg-gradient-to-b from-gray-900 to-slate-800 opacity-95 text-white lg:hidden w-full mt-11 -ml-[24px] md:-ml-[64px] rounded-xl">
            <ul className="dropdown p-2 md:p-5 flex items-center justify-center flex-col opacity-75">
              <li
                className="flex flex-row justify-between w-full px-8 mb-3 cursor-pointer"
                onClick={handleDropdownHomeMobile}
              >
                <span className="text-[20px] pb-3">Products</span>
                {isDropdownHomeMobile ? (
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
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
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
                )}
              </li>
              {isDropdownHomeMobile && (
                <div className="  bg-gray-920 lg:hidden w-full -mt-3 mb-2 overflow-hidden transition-height duration-300">
                  <ul className="dropdown p-2 md:p-5 flex items-start pl-10 space-y-2 cursor-pointer flex-col">
                    <li>
                      <span>Marketplace</span>
                    </li>
                    <li>
                      <span>Dex</span>
                    </li>
                    <li>
                      <span>Tools</span>
                    </li>
                    <li>
                      <span>Docs</span>
                    </li>
                    <li>
                      <span>Tutorial</span>
                    </li>
                  </ul>
                </div>
              )}
              <li
                className="flex flex-row justify-between w-full px-8 mb-3 cursor-pointer"
                onClick={handleDropdownBridgeMobile}
              >
                <span className="text-[18px] pb-3">Resource</span>
                {isDropdownBridgeMobile ? (
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
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
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
                )}
              </li>
              {isDropdownBridgeMobile && (
                <div className=" lg:hidden w-full -mt-3 mb-2 overflow-hidden transition-height duration-300">
                  <ul className="dropdown p-2 md:p-5 flex items-start pl-10 space-y-2 cursor-pointer flex-col">
                    <li>
                      <span>Ecosystem</span>
                    </li>
                    <li>
                      <span>Partner</span>
                    </li>
                    <li>
                      <span>Token</span>
                    </li>
                    <li>
                      <span>Validator</span>
                    </li>
                    <li>
                      <span>Blog</span>
                    </li>
                    <li>
                      <span>Forum</span>
                    </li>
                  </ul>
                </div>
              )}
              <li
                className="flex flex-row justify-between  w-full px-8 mb-1 cursor-pointer"
                onClick={handleDropdownNFTMobile}
              >
                <span className="">
                <a href="/" className="text-[18px] pb-3">
                  About
                </a>
                </span>
                {/* {isDropdownNFTMobile ? (
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
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                ) : (
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
                )} */}
              </li>
              {/* {isDropdownNFTMobile && (
                <div className=" lg:hidden w-full -mt-3  overflow-hidden transition-height duration-300">
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
              )} */}
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
