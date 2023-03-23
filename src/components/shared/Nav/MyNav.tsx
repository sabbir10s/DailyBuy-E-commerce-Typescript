import React, { useState } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/big_logo.png";
import smallLogo from "../../../assets/logo/logo.png";
import Modal from "../Modal";
import {
  RiShoppingBagLine,
  RiHeartLine,
  RiUser3Line,
  RiSearchLine,
} from "react-icons/ri";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";
import Bottom from "./Bottom";
import Sidebar from "./Sidebar";
import Top from "./Top";

const MyNav = () => {
  //   const { cartItems } = useSelector((state) => state.cart);
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleShowSearch = () => {
    if (showSearch) {
      setShowSearch(false);
    } else setShowSearch(true);
  };
  const handleOnClose = () => {
    setShowModal(false);
  };
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      <Top />
      <div className="border border-gray-100/60 fixed lg:static top-0 z-50 bg-white w-full">
        <div className="container ">
          <div className=" grid grid-cols-3 lg:flex justify-between items-center py-5 ">
            <button
              onClick={() => setShowSidebar(true)}
              className="block lg:hidden text-black"
            >
              <CgMenuLeftAlt className="text-2xl lg:text-4xl" />
            </button>
            <Link className="hidden lg:block " to="/">
              <img className=" w-[180px]" src={logo} alt="" />
            </Link>
            <Link className="w-full flex justify-center lg:hidden" to="/">
              <img
                className=" w-[80px] md:w-[130px] cursor-pointer"
                src={smallLogo}
                alt=""
              />
            </Link>
            <div className="hidden lg:block w-1/2  lg:w-[550px] xl:w-[778px] relative">
              <input
                placeholder="I'm looking for..."
                type="text"
                className=" py-1.5 md:py-3 px-2 md:px-5 border border-gray-200/80 w-[80%] md:w-[86%] lg:w-[92%] focus:outline-primary-600 rounded-[5px] bg-white"
              />
              <button className="bg-primary-600 text-white p-3 w-[14%] lg:w-[8%] h-full rounded-r-[5px] absolute top-0 right-2 flex items-center justify-center">
                <RiSearchLine className="text-2xl lg:text-3xl" />
              </button>
            </div>

            <div className=" flex items-center justify-end gap-4 lg:gap-8 text-black">
              <button onClick={handleShowSearch} className="block lg:hidden">
                <RiSearchLine className="text-2xl lg:text-3xl" />
              </button>
              <Link className="hidden lg:block" to="/wishlist">
                <button className="relative flex items-center" type="button">
                  <RiHeartLine className="text-[24px]" />
                  <span className="absolute top-[-10px] left-[18px] text-[11px] text-white bg-primary-600 rounded-full h-[20px] w-[18px] flex items-center justify-center">
                    {0}
                  </span>
                </button>
              </Link>
              <Link to="/cart">
                <button className="relative flex items-center" type="button">
                  <RiShoppingBagLine className="text-[24px]" />
                  <span className="absolute top-[-10px] left-[18px] text-[11px] text-white bg-primary-600 rounded-full h-[20px] w-[18px] flex items-center justify-center">
                    {/* {cartItems.length} */}
                  </span>
                </button>
              </Link>
              <button
                className="hidden lg:block"
                onClick={() => setShowModal(true)}
              >
                <RiUser3Line className="text-[24px]" />
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      {showSearch && (
        <div className="lg:hidden w-full flex items-center justify-center gap-4 bg-white/70 backdrop-blur-sm h-[10vh] top-[65px] fixed z-50 ">
          <div className="border relative w-3/4">
            <input
              placeholder="Search"
              type="text"
              className=" w-full py-1.5 md:py-3 pl-10 focus:outline-gray-300 rounded-[5px] bg-white"
            />
            <RiSearchLine className="text-xl lg:text-3xl text-gray-500 absolute top-2 md:top-3 left-2" />
          </div>
          <button
            onClick={handleShowSearch}
            className="text-gray-700 text-xl md:text-4xl"
          >
            <AiFillCloseCircle />
          </button>
        </div>
      )}
      <Bottom />
      <Modal onClose={handleOnClose} visible={showModal} />
      <Sidebar handleCloseSidebar={handleCloseSidebar} visible={showSidebar} />
    </div>
  );
};

export default MyNav;
