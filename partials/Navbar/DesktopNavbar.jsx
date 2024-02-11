"use client";

import Link from "next/link";
import React from "react";
import useDropdownDesktop from "./hooks/useDropdownDesktop";

export default function DesktopNavbar() {
  const {
    isDropdownHome,
    isDropdownNFT,
    handleDropdownHome,
    handleDropdownNFT,
  } = useDropdownDesktop();

  return (
    <ul className="text-white text-[20px]  flex-row justify-between space-x-32 hidden lg:flex ">
      <li className="relative">
        <Link
          href={"/"}
          className=" duration-200"
          onMouseClick={handleDropdownHome}
          onMouseLeave={handleDropdownHome}
        >
          Products
        </Link>
        {isDropdownHome && (
          <ul className="dropdown absolute bg-gradient-to-b from-gray-900 to-slate-800 p-4 rounded-xl h-[280px] mt-8 w-[480px] opacity-95">
            <li className="mb-4 justify-center items-center ">
              <p className="text-[20px] mb-2 hover:text-gray-200 font-bold">
                Products
              </p>
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
                <a href="/tools" className="flex-flex-col pr-4">
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
      <li>
        <Link
          href={"/"}
          onMouseClick={handleDropdownNFT}
          onMouseLeave={handleDropdownNFT}
        >
          Resource
        </Link>
        {isDropdownNFT && (
          <ul className="dropdown absolute bg-gradient-to-b from-gray-900 to-slate-800 p-4 rounded-xl h-[280px] mt-8 w-[480px] opacity-95">
            <li className="mb-4 justify-center items-center ">
              <p className="text-[20px] mb-2 hover:text-gray-200 font-bold">
                Resource
              </p>
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
        <a href="/about" className="">
          About
        </a>
      </li>
    </ul>
  );
}
