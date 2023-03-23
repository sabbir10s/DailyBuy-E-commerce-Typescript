import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="border border-gray-100 hidden lg:block">
      <div className="container py-3 ">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-8">
            <li className="txtHover text-base">
              <Link to="/offer">
                <span className="mr-1">🔥</span>
                <span>Offer</span>
              </Link>
            </li>
            <li className="txtHover text-base">
              <Link to="/wishlist">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-1 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
                <span>Wishlist</span>
              </Link>
            </li>
          </ul>

          <ul className="flex space-x-8">
            <li className="txtHover text-base border-r pr-3">
              <Link to="/orders/1sdfgfsf1454">
                <span className="mr-1">🛒</span>
                <span>Order Tracking</span>
              </Link>
            </li>
            <li className="txtHover text-base border-r pr-3">
              <Link to="/support">
                <span className="mr-1">💁‍♂️</span>
                <span>Support Center</span>
              </Link>
            </li>
            <li className="txtHover text-base border-r pr-3">
              <select name="lang" id="" className="focus:outline-none cursor-pointer">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Chinese">Chinese</option>
                <option value="Bangla">Bangla</option>
                <option value="Urdu">Urdu</option>
              </select>
            </li>{" "}
            <li className="txtHover text-base">
              <span>USD</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
