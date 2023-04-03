import React from "react";
import { Link } from "react-router-dom";
import "../../styles/poster.css";
import { PrimaryButton } from "../theme/Button";

const PosterOffer = () => {
  return (
    <div className="container mt-8 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="group_bg3 py-[52px] bg-gray-200 grid grid-cols-2">
          <div></div>
          <div>
            <div className="space-y-2 text-black/75">
              <h2 className="font-bold text-[20px] md:text-[20px] lg:text-[40px]">Breakfast & Dairy</h2>
              <p className="text-gray-500 text-[10px] md:text-[12px] lg:text-[14px]">Weekend discount upto 40%</p>
            </div>
            <div className="mt-5">
              <Link to="/categories">
                <PrimaryButton title="SHOP NOW" />
              </Link>
            </div>
          </div>
        </div>
        <div className="group_bg4 py-[52px]">
          <div className="grid grid-cols-2 align-middle">
            <div></div>
            <div>
              <div className="space-y-2 text-black/75">
                <h2 className="font-bold text-[20px] md:text-[20px] lg:text-[40px]">Milk & Coffee</h2>
                <p className="text-gray-500 text-[10px] md:text-[12px] lg:text-[14px]">Weekend discount upto 40%</p>
              </div>
              <div className="mt-5">
                <Link to="/categories">
                  <PrimaryButton title="SHOP NOW" />
                </Link>
              </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default PosterOffer;
