/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
const MobileNavbar = () => {
  const [active, setActive] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <header aria-label="Site Header" className="block lg:hidden fixed top-0 z-50 bg-white w-full">
       <div className="container">
       <div className="flex h-20 max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-2 md:gap-5 w-full md:w-2/3">
            <div>
              <Link to="/">
                {" "}
                <img className="w-[110px] md:w-full h-full cursor-pointer" src={logo} alt="" />
              </Link>
            </div>
            <div className="w-full relative">
              <input
                placeholder="Search..."
                type="text"
                className="p-[6px] md:p-2 border border-gray-200/80 w-[76%] focus:outline-primary-600 rounded-l-[3px] bg-gray-50"
              />
              <button className="bg-primary-600 text-white p-[6px] md:p-2 w-[24%] h-full rounded-r-md absolute top-0 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 inline-block"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <div className=" flex items-center">
              <div className="flex items-center gap-2 md:gap-5">
                <div className="bg-secondary-50 w-10 h-10 rounded-[50%] flex items-center justify-center">
                  <Link to="/cart" className="relative">
                    <svg className="h-5 w-5 text-[#FF4646]" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="text-[#FF4646] text-[12px] font-bold absolute top-[-7px] right-[-4px]">
                      {cartItems.length}
                    </span>
                    <span className="sr-only">Cart</span>
                  </Link>
                </div>

                <div>
                  <Link to="/account" className="bg-gray-50 w-10 h-10 rounded-[50%] flex items-center justify-center">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="sr-only"> Account </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </header>

      {active && (
        <section className="fixed inset-y-0 right-0 z-50 flex">
          <div className="w-screen max-w-sm">
            <div className="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
              <div className="overflow-y-scroll">
                <header className="flex h-16 items-center justify-between pl-6">
                  <span className="text-sm font-medium uppercase tracking-widest">Menu</span>

                  <button onClick={() => setActive(false)} aria-label="Close menu" className="h-16 w-16 border-l border-gray-200" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </header>

                <nav className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500">
                  <Link to="/" className="px-6 py-3">
                    {" "}
                    Home{" "}
                  </Link>
                  <Link to="/about" className="px-6 py-3">
                    {" "}
                    About us{" "}
                  </Link>
                  <Link to="/categories" className="flex items-center justify-between px-6 py-3">
                    Products
                  </Link>

                  <Link to="/contact" className="px-6 py-3">
                    {" "}
                    Contact us{" "}
                  </Link>
                  <Link to="/support" className="flex items-center justify-between px-6 py-3">
                    Support Center
                  </Link>
                  <Link to="/account" className="flex items-center px-6 py-3">
                    Account
                  </Link>
                  <Link to="/career" className="flex items-center px-6 py-3">
                    Careers
                  </Link>
                  <Link to="/faq" className="px-6 py-3">
                    {" "}
                    FAQs{" "}
                  </Link>
                  <Link to="/privacy" className="px-6 py-3">
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                  <Link to="/terms" className="px-6 py-3">
                    {" "}
                    Terms Conditions{" "}
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MobileNavbar;
