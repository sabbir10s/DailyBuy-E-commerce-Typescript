import React from "react";
import ActiveLink from "../../../hooks/ActiveLink";

const NavItems = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10 py-3 text-black">
        <li className="txtHover font-medium">
          <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          <ActiveLink to="/categories">Shop</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/blog">Blog</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/about">About us</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/aboutV2">AboutV2</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/contact">Contact us</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/invoice">Invoice</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
