import React from "react";
import bgImg from "../../../assets/invoice/bg.png";
const InvoiceBanner = () => {
  return (
    <>
      <div className="container mt-[80px] lg:mt-[40px]">
        <div className="relative bg-primary-600 rounded-[10px] text-white text-[14px] lg:text-[18px]">
          <img
            className="absolute bottom-0 w-full h-full object-cover object-center"
            src={bgImg}
            alt=""
          />
          <div className="">
            <div className="flex flex-col md:flex-row justify-between p-[14px] md:p-[30px] lg:p-[71px] gap-[26px]">
              <div className="space-y-4">
                <h1 className="uppercase font-semibold text-[16px] md:text-[24px] pb-6">
                  Invoice
                </h1>
                <p>
                  <span className="text-white/70 font-normal">Invoice No:</span>{" "}
                  254 45487 54
                </p>
                <p>
                  <span className="text-white/70 font-normal">Issued Date</span>{" "}
                  11 Jan 2023
                </p>
                <p>
                  <span className="text-white/70 font-normal">Due Date:</span>{" "}
                  15 Jan 2023
                </p>
              </div>
              <div className="max-w-[200px] space-y-6">
                <h1 className="uppercase font-semibold text-[16px] md:text-[24px] pb-6">
                  billing to
                </h1>
                <p>Ismail Hussain Kasba, Brahmanbaria, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceBanner;
