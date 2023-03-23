import React from "react";

const BreadCamp = ({ first, second, third, four }) => {
  return (
    <div>
      <p className="text-[16px] hidden md:block">
        <span className="text-primary-600"> Home &gt;</span>{" "}
        <span className="text-primary-600">Breakfast & Dairy &gt;</span>{" "}
        <span className="text-gray-600">Coffee-Mate Coffee Creamer</span>
      </p>
    </div>
  );
};

export default BreadCamp;
