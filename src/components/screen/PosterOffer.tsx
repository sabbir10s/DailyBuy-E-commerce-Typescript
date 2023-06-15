import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../theme/Button";

const PosterOffer = () => {
  return (
    <div className="container mt-8 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex items-center justify-center relative">
          <img
            className="absolute z-0 rounded-[10px] w-full h-full object-cover object-center"
            src="https://i.ibb.co/pjjc5Qq/poster-1.png"
            alt=""
          />
          <div className="absolute">
            <div className="grid grid-cols-2">
              <div></div>
              <div>
                <div className="space-y-2 text-black/75">
                  <h2 className="font-bold text-[20px] md:text-[20px] lg:text-[40px]">
                    Breakfast & Dairy
                  </h2>
                  <p className="text-gray-500 text-[10px] md:text-[12px] lg:text-[14px]">
                    Weekend discount upto 40%
                  </p>
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
        <div className="flex items-center justify-center">
          <img
            className=" z-0 rounded-[10px] w-full h-full object-cover object-center"
            src="https://i.ibb.co/2ht4pqq/poster-2.png"
            alt=""
          />
          <div className="absolute">
            <div className=" grid grid-cols-2">
              <div></div>
              <div>
                <div className="space-y-2 text-black/75">
                  <h2 className="font-bold text-[20px] md:text-[20px] lg:text-[40px]">
                    Milk & Coffee
                  </h2>
                  <p className="text-gray-500 text-[10px] md:text-[12px] lg:text-[14px]">
                    Weekend discount upto 40%
                  </p>
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
    </div>
  );
};

export default PosterOffer;
