import React from "react";
import { Link } from "react-router-dom";
import "../../styles/banner.css";
import { PrimaryButton } from "../theme/Button";

const Banner = () => {
  return (
   <>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 lg:mt-[24px]">
      <div className="pl-[10px] md:pl-[15px] py-[35px] flex items-center slider_bg">
       <div>
       <p className="md:bg-primary-50 md:px-4 md:py-2 rounded text-primary-600 inline-block font-semibold text-[8px] md:text-[12px]">SUMMER SALE UPTO 50%</p>
          <h2 className="mt-[4px] md:mt-[10px] mb-[13px] font-bold text-primary-900 text-[20px] md:text-[25px] lg:text-[32px] leading-[22px] md:leading-[35px] lg:leading-[48px]">Make your life <br /> easy with us</h2>
          <p className="text-[10px] md:text-[16px] text-gray-500 leading-[15px] md:leading-[24px] md:mb-[30px] lg:mb-[40px]"> We offer a wide selection of <br /> high-quality  products at <br /> affordable prices. </p>
          <div className="hidden md:block">
            <Link to="/categories">
              <PrimaryButton title="SHOP NOW" />
            </Link>
          </div>
       </div>
      </div>
      <div className="space-y-8 hidden lg:block">
        <div className="bg-gray-50  py-[31px] px-8 group_bg1">
          <div className="space-y-2 text-black/75">
            <h2 className="font-bold text-2xl">Fresh Grocery</h2>
            <p className="text-base text-gray-500">Weekend discount up to 35%</p>
          </div>
          <div className="mt-5">
            <Link to="/categories">
              <PrimaryButton title="SHOP NOW" />
            </Link>
          </div>
        </div>
        <div className="bg-gray-50  py-[31px] px-8 group_bg2">
          <div className="space-y-2 text-black/75">
            <h2 className="font-bold text-2xl">Breakfast & Dairy </h2>
            <p className="text-base text-gray-500">Weekend discount up to 40%</p>
          </div>
          <div className="mt-5">
            <Link to="/categories">
              <PrimaryButton title="SHOP NOW" />
            </Link>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Banner;
