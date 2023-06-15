import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiSupport } from "react-icons/bi";
import fruits from "../../../assets/icon/categoryGrayIcon.png";
import meats from "../../../assets/icon/categoryGrayIcon (2).png";
import breads from "../../../assets/icon/categoryGrayIcon (3).png";
import frozen from "../../../assets/icon/categoryGrayIcon (4).png";
import breakfast from "../../../assets/icon/categoryGrayIcon (5).png";
import biscuits from "../../../assets/icon/categoryGrayIcon (6).png";
import beverages from "../../../assets/icon/categoryGrayIcon (7).png";
import grocery from "../../../assets/icon/categoryGrayIcon (8).png";
import NavItems from "./NavItems";
// import Navbar from "../../screen/Navbar";

const NavBottom = () => {
  return (
    <div className="container hidden lg:flex items-center justify-between gap-5 mt-2">
      <ul className="flex items-center">
        <div className="relative group">
          <li className="w-[240px] py-[12px] flex items-center justify-center uppercase text-[16px] text-center bg-primary-600 text-white rounded-t-md cursor-pointer space-x-2 font-semibold">
            <span className="lg:hidden xl:inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block -mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
            <span>Categories</span>
            <BiChevronDown className="text-[25px]" />
          </li>
          <div className=" z-10 shadow-custom opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white hidden lg:block rounded-b-md absolute top-12 left-0 w-full transition duration-300 delay-100 ease-in-out">
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={fruits} alt="" />
                <span>Fruits & Vegetable</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={meats} alt="" />
                <span>Meats & Fish</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={breads} alt="" />
                <span>Breads & Bakery</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={frozen} alt="" />
                <span>Frozen Foods</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={breakfast} alt="" />
                <span>Breakfast & Dairy</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={biscuits} alt="" />
                <span>Biscuits & Snacks</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={beverages} alt="" />
                <span>Beverages</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={grocery} alt="" />
                <span>Grocery</span>
              </Link>
            </li>
          </div>
        </div>
      </ul>

      <div>
        <NavItems />
      </div>
      <div className="flex items-center gap-2">
        <BiSupport className="text-3xl text-gray-900" />
        <div className="flex flex-col items-start">
          <h2 className="text-base font-semibold text-primary-600">1400-800</h2>
          <p className="text-gray-600 text-xs">24/7 Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
