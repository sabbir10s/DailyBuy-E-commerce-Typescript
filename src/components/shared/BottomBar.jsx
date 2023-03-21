/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <>
      <div className="border-t border-gray-100 block lg:hidden fixed bottom-0 z-50 bg-white w-full">
        <div className="flex justify-between mx-4">
          <div className="p-3 border-r text-center text-primary-600">
            <Link to="/">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p>Home</p>
            </Link>
          </div>
          <div className="p-3 border-r text-center text-gray-600">
            <Link to="/blog">
              {" "}
              <BsReverseLayoutTextWindowReverse className="text-xl inline-block" />
              <p>Blog</p>
            </Link>
          </div>
          <div className="p-3 border-r text-center text-gray-600">
            <Link to="/wishlist">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>{" "}
              <p>Wishlist</p>
            </Link>
          </div>
          <div className="p-3  text-center text-gray-600">
            <Link to="/categories">
              {" "}
              <BiCategoryAlt className="text-2xl inline-block" />
              <p>Category</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
