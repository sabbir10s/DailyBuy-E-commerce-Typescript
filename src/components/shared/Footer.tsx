import React from "react";
import logo from "../../assets/logo/big_logo.png";
import payment from "../../assets/icon/payment.png";
import contactIcon from "../../assets/icon/contact_icon.png";
import social1 from "../../assets/icon/social_icon (1).png";
import social2 from "../../assets/icon/social_icon (2).png";
import social3 from "../../assets/icon/social_icon (3).png";
import social4 from "../../assets/icon/social_icon (4).png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t border-gray-100 relative">
      <img
        className="absolute bottom-0 w-full h-full object-cover object-center"
        src="https://i.ibb.co/ZxxD8r0/map-bg.png"
        alt=""
      />
      <div className=" my-16  container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-3">
          <Link to="/">
            <div className="cursor-pointer w-[200px] h-14">
              <img src={logo} className="w-full h-full" alt="" />
            </div>
          </Link>
          <p className="py-3 text-gray-600">
            Daily Buy is an online marketplace that provides a wide range of
            high-quality products at affordable prices.
          </p>
          <div className="flex items-center space-x-2">
            <img src={social3} className="cursor-pointer" alt="" />
            <img src={social2} className="cursor-pointer" alt="" />
            <img src={social4} className="cursor-pointer" alt="" />
            <img src={social1} className="cursor-pointer" alt="" />
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold mt-3 mb-5">QUICK LINKS</h2>
          <ul className="space-y-4 py-3">
            <li className="txtHover">Home</li>
            <li className="txtHover">Products</li>
            <li className="txtHover">Blog</li>
            <li className="txtHover">About us</li>
            <li className="txtHover">Contact us</li>
          </ul>
        </div>{" "}
        <div className="">
          <h2 className="text-2xl font-semibold mt-3 mb-5">CUSTOMER AREA</h2>
          <ul className="space-y-4 py-3">
            <li className="txtHover">My Account</li>
            <li className="txtHover">Order</li>
            <li className="txtHover">Terms</li>
            <li className="txtHover">Privacy Policy</li>
            <li className="txtHover">Shipping Information</li>
          </ul>
        </div>{" "}
        <div className="">
          <h2 className="text-2xl font-semibold mt-3 mb-5">CONTACT</h2>
          <p className="py-3 text-gray-600">
            We'd love to hear from you! If you have any questions or concerns,
            please don't hesitate to contact us.
          </p>
          <div className="p-3 flex space-x-3 items-center">
            <img src={contactIcon} alt="" />
            <div>
              <p className="text-black font-medium">Have any question?</p>
              <p className="text-primary-600 font-bold text-3xl">099 456 789</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex flex-col lg:flex-row justify-between items-center container py-2">
        <p className="text-gray-500">DailyBuy - © 2023 All Rights Reserved</p>
        <div className="flex items-center my-2 lg:my-0">
          <p className="text-primary-600 hidden lg:block font-semibold">
            Pay With
          </p>{" "}
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
