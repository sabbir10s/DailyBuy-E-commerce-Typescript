import React from "react";
import { Link } from "react-router-dom";
import imgOffer from "../../assets/offer/offer_banner.png";
import { FiArrowRight } from "react-icons/fi";
import CountDownTimer from "./CountDownTimer";
import '../../styles/OfferTimerBanner.css'
const OfferTimerBanner = () => {
  const hoursMinSecs = { days: 2, hours: 1, minutes: 20, seconds: 40 };
  return (
    <div className="bg-primary-50 pt-6 md:pt-0 mt-8 lg:mt-16 bgImage">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-[#454F5B] text-center lg:text-left font-bold text-[32px] uppercase md:text-[40px] lg:text-[64px] md:leading-[45px] lg:leading-[80px]">
              Get -60% from <br />
              summer deal
            </h2>
            <CountDownTimer hoursMinSecs={hoursMinSecs} />
            <div className="flex justify-center lg:justify-start">
              <Link to="/categories">
                {" "}
                <button className="bg-primary-600 hover:bg-primary-700 duration-300 transition hover:shadow-custom hover:scale-105 space-x-2 text-white font-semibold  uppercase ease-in-out flex items-center text-[10px] md:text-[14px] lg:text-[18px] py-[10px] md:py-[18px] lg:py-[20px] px-[20px] md:px-[40px] lg:px-[65px] rounded-[5px] lg:rounded-[10px]">
                  <span>SHOP NOW</span>
                  <FiArrowRight className="text-xl" />
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className=" h-[400px] lg:h-[700px]">
              <img className="w-full h-full object-center object-fill" src={imgOffer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferTimerBanner;
