"use client";

import React from "react";
import useDropdownMobile from "./hooks/useDropdownMobile";

export default function NavbarMobile() {
  const {
    isHamburgerMenu,
    isDropdownHomeMobile,
    isDropdownBridgeMobile,
    handleMenu,
    handleDropdownHomeMobile,
    handleDropdownBridgeMobile,
    handleDropdownNFTMobile,
  } = useDropdownMobile();

  return (
    <>
      {isHamburgerMenu ? (
        <svg
          onClick={handleMenu}
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
        <button
          type="button"
          onClick={handleMenu}
          className="w-[24px] h-[24px] lg:hidden flex object-contain"
        >
          <img src="/icons/menu.svg" alt="menu" />
        </button>
      )}

      {isHamburgerMenu && (
        <div className="absolute bg-gradient-to-b from-gray-900 to-slate-800 opacity-95 text-white lg:hidden w-full mt-11 -ml-[24px] md:-ml-[64px] rounded-xl">
          <ul className="dropdown p-2 md:p-5 flex items-center justify-center flex-col opacity-75">
            <button
              className="flex flex-row justify-between w-full px-8 mb-3"
              type="button"
              aria-label="product menu"
              onClick={handleDropdownHomeMobile}
            >
              <li className="flex flex-row justify-between w-full">
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
            </button>
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

            <button
              className="flex flex-row justify-between w-full px-8 mb-3"
              type="button"
              aria-label="resouce menu"
              onClick={handleDropdownBridgeMobile}
            >
              <li className="flex flex-row justify-between w-full">
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
            </button>

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

            <button
              className="flex flex-row justify-between w-full px-8 mb-1"
              type="button"
              aria-label="about"
              onClick={handleDropdownNFTMobile}
            >
              <li className="flex flex-row justify-between w-full">
                <span className="">
                  <a href="/about" className="text-[18px] pb-3">
                    About
                  </a>
                </span>
              </li>
            </button>

            <button
              className="flexCenter w-full px-8 mb-1 py-3"
              type="button"
              aria-label="about"
              onClick={handleDropdownNFTMobile}
            >
              <a href="/explore" className="w-full">
                <li className="flexCenter justify-start px-4 py-2 rounded-full w-full bg-white text-sm text-neutral-800">
                  Get Started
                </li>
              </a>
            </button>
          </ul>
        </div>
      )}
    </>
  );
}
