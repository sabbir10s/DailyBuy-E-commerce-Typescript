import React from "react";
import Map from "./Map";
import "../../styles/backgroundImg.css";
import { FullWidthButton } from "../theme/Button";
const Contact = () => {
  return (
    <div>
      <div className="text-center h-[300px] contactBanner mt-12 ">
        <div className=" bg-primary-700/80 w-full h-full flex items-center justify-center text-white">
          <div>
            <h1 className="text-[20px] md:text-[25px] lg:text-[32px] font-bold">
              Feel free contract with us
            </h1>
            <p className="text-[12px] md:text-[16px] max-w-[400px] mx-auto mt-[8px]">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-10 container mt-[64px]">
        <div className="border w-full h-[180px] rounded-[10px] text-center flex items-center justify-center">
          <div>
            <h2 className="mb-[8px] font-bold text-[24px]">
              <span className="text-primary-500">E</span>mail
            </h2>
            <p className="text-[18px]">yourmail@mail.com</p>
          </div>
        </div>
        <div className="border w-full h-[180px] rounded-[10px] text-center flex items-center justify-center">
          <div>
            <h2 className="mb-[8px] font-bold text-[24px]">
              <span className="text-primary-500">P</span>hone
            </h2>
            <p className="text-[18px]">+123 1234 1234</p>
            <p className="text-[18px]">+123 1234 1234</p>
          </div>
        </div>
        <div className="border w-full h-[180px] rounded-[10px] text-center flex items-center justify-center">
          <div>
            <h2 className="mb-[8px] font-bold text-[24px]">
              <span className="text-primary-500">A</span>ddress
            </h2>
            <p className="text-[18px] max-w-[250px]">
              3612 University Hill Road Sadorus, IL 61872
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-20 my-[64px] container">
        <div className="block w-full">
          <Map />
        </div>
        <div className="w-full">
          <h2 className="text-xl md:text-3xl font-semibold mb-6">
            Contact Form
          </h2>
          <form className="w-full flex flex-col gap-4" action="">
            <div className="flex flex-col lg:flex-row items-center gap-[32px]">
              <input
                className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full name"
              />
              <input
                className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-[32px]">
              <input
                className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <input
                className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
              />
            </div>
            <div className="">
              <textarea
                className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
                name="message"
                id="message"
                cols={30}
                rows={6}
                placeholder="Message"
              ></textarea>
            </div>
            <FullWidthButton title="Submit Now" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
