import React from "react";
import stepImg1 from "../../assets/icon/steps (1).png";
import stepImg2 from "../../assets/icon/steps (2).png";
import stepImg3 from "../../assets/icon/steps (3).png";
import stepImg4 from "../../assets/icon/steps (4).png";

const ProcessingSteps = () => {
  return (
    <div className="container mt-16 lg:mt-20 pb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center w-full lg:w-5/6 mx-0 lg:mx-auto">
        <div className="bg-primary-50/60 lg:bg-white rounded p-3 lg:p-0 block lg:flex items-center lg:space-x-3 lg:border-r ">
          <img src={stepImg1} alt="" />
          <p className="font-medium text-base">Fastest Delivery</p>
        </div>{" "}
        <div className="bg-primary-50/60 lg:bg-white rounded p-3 lg:p-0 block lg:flex items-center lg:space-x-3 lg:border-r ">
          <img src={stepImg2} alt="" />
          <p className="font-medium text-base">Fresh Grocery</p>
        </div>{" "}
        <div className="bg-primary-50/60 lg:bg-white rounded p-3 lg:p-0 block lg:flex items-center lg:space-x-3 lg:border-r ">
          <img src={stepImg3} alt="" />
          <p className="font-medium text-base">Easy to payment</p>
        </div>{" "}
        <div className="bg-primary-50/60 lg:bg-white rounded p-3 lg:p-0 block lg:flex items-center lg:space-x-3 ">
          <img src={stepImg4} alt="" />
          <p className="font-medium text-base">24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessingSteps;
