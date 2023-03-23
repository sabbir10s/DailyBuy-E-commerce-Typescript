import React from "react";
import logo from "../assets/logo/big_logo.png";
import notFoundImg from "../assets/error/notfound.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta charSet="utf-8" name="description" content="DailyBuy 404 not found Page" />
      </Helmet>
      <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
        <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-custom  p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
          <div className="w-full md:w-1/2">
            <div className="mb-10 lg:mb-20">
              <img src={logo} alt="" />
            </div>
            <div className="mb-10 md:mb-20 text-gray-600 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">You seem to be lost!</h1>
              <p>The page you're looking for isn't available.</p>
              <p>Try searching again or use the Go Back button below.</p>
            </div>
            <div className="mb-20 md:mb-0">
              <Link to="/">
                <button className="text-lg outline-none focus:outline-none transform transition-all hover:scale-110 text-primary-600 font-semibold hover:text-primary-700 border px-3 py-2 border-gray-50">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 inline-block -mt-1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                  </span>{" "}
                  <span>Go Back</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <img src={notFoundImg} alt="" />
          </div>
        </div>
        <div className="w-64 md:w-96 h-96 md:h-full bg-secondary-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
        <div className="w-96 h-full bg-primary-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
      </div>

      {/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div className="">
          <Link
            to="https://www.buymeacoffee.com/"
            title="Buy me a beer"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow-custom hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
