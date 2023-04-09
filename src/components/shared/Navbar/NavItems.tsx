import React from "react";
import ActiveLink from "src/hooks/ActiveLink";

const NavItems = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8 py-3 font-medium">
        <li>
          <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink to="/categories">Shop</ActiveLink>
        </li>
        <li>
          {" "}
          <ActiveLink to="/blog">Blog</ActiveLink>
        </li>
        <li>
          {" "}
          <ActiveLink to="/about">About us</ActiveLink>
        </li>
        <li>
          {" "}
          <ActiveLink to="/contact">Contact us</ActiveLink>
        </li>
        <div className="relative group">
          <button className="flex items-center py-2 text-gray-700 hover:text-primary-600 focus:outline-none">
            <span>pages</span>
            <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
              <path d="M10 12l-5-5 1.41-1.41L10 9.18l3.59-3.59L15 7l-5 5z" />
            </svg>
          </button>
          <ul className="absolute left-0 mt-0 w-48 p-3 space-y-3 bg-white border border-gray-300 rounded-md shadow-lg hidden group-hover:block">
            <li>
              <ActiveLink to="/invoice">Invoice</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/profile">Account</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/faq">FAQ</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/aboutV2">About Version 2</ActiveLink>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default NavItems;
