import React from "react";

const CategoriesBanner = () => {
  return (
    <div className="bg-primary-50 hidden lg:grid grid-cols-2 items-center rounded-lg">
      <div className="">
        <img src="https://i.ibb.co/wyTZRdn/category-banner.png" alt="" />
      </div>
      <div>
        <h2 className="text-6xl text-primary-700 font-bold">20% Off Fresh</h2>
        <h2 className="text-6xl text-primary-700 font-bold">organic fruits</h2>
        <p className="text-gray-700 mt-3">An online marketplace that specializes in organic food</p>
      </div>
    </div>
  );
};

export default CategoriesBanner;
