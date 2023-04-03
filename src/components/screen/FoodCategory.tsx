import React from "react";
import food1 from "../../assets/food/Fruits & Veg.png";
import food2 from "../../assets/food/Fish.png";
import food3 from "../../assets/food/Breads.png";
import food4 from "../../assets/food/Frozen.png";
import food5 from "../../assets/food/Breakfast.png";
import food6 from "../../assets/food/Biscuit.png";
import food7 from "../../assets/food/Beverages.png";
import food8 from "../../assets/food/Grocery.png";

const FoodCategory = () => {
  return (
    <div className="container mt-8 lg:mt-16">
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="rounded-lg pr-2 border border-gray-200/70 flex items-center space-x-4 cursor-pointer group">
          <div className="overflow-hidden">
            <img className="group-hover:scale-110  transition duration-300" src={food1} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black/80 mb-2 group-hover:underline group-hover:text-primary-600 duration-300 transition">
              Fruits & Vegetable
            </h3>
            <p className="text-gray-500">6 Items</p>
          </div>
        </div>{" "}
        <div className="rounded-lg pr-2 border border-gray-200/70 flex items-center space-x-4 cursor-pointer group">
          <div className="overflow-hidden">
            <img className="group-hover:scale-110  transition duration-300" src={food2} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black/80 mb-2 group-hover:underline group-hover:text-primary-600 duration-300 transition">
              Meats & Fish
            </h3>
            <p className="text-gray-500">5 Items</p>
          </div>
        </div>{" "}
        <div className="rounded-lg pr-2 border border-gray-200/70 flex items-center space-x-4 cursor-pointer group">
          <div className="overflow-hidden">
            <img className="group-hover:scale-110  transition duration-300" src={food3} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black/80 mb-2 group-hover:underline group-hover:text-primary-600 duration-300 transition">
              Breads & Bakery
            </h3>
            <p className="text-gray-500">9 Items</p>
          </div>
        </div>{" "}
        <div className="rounded-lg pr-2 border border-gray-200/70 flex items-center space-x-4 cursor-pointer group">
          <div className="overflow-hidden">
            <img className="group-hover:scale-110  transition duration-300" src={food4} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black/80 mb-2 group-hover:underline group-hover:text-primary-600 duration-300 transition">
              Frozen Foods
            </h3>
            <p className="text-gray-500">4 Items</p>
          </div>
        </div>{" "}
        <div className="rounded-lg pr-2 border border-gray-200/70 flex items-center space-x-4 cursor-pointer group">
          <div className="overflow-hidden">
            <img className="group-hover:scale-110  transition duration-300" src={food5} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black/80 mb-2 group-hover:underline group-hover:text-primary-600 duration-300 transition">
              Breakfast & Dairy
            </h3>
            <p className="text-gray-500">21 Items</p>
          </div>
        </div>{" "}
        <div className="rounded-lg pr-2 border border-gray-200/70 flex items-center space-x-4 cursor-pointer group">
          <div className="overflow-hidden">
            <img className="group-hover:scale-110  transition duration-300" src={food6} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black/80 mb-2 group-hover:underline group-hover:text-primary-600 duration-300 transition">
              Biscuits & Snacks
            </h3>
            <p className="text-gray-500">8 Items</p>
          </div>
        </div>{" "}
        <div className="rounded-lg pr-2 border border-gray-200/70 flex items-center space-x-4 cursor-pointer group">
          <div className="overflow-hidden">
            <img className="group-hover:scale-110  transition duration-300" src={food7} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black/80 mb-2 group-hover:underline group-hover:text-primary-600 duration-300 transition">
              Beverages
            </h3>
            <p className="text-gray-500">6 Items</p>
          </div>
        </div>{" "}
        <div className="rounded-lg pr-2 border border-gray-200/70 flex items-center space-x-4 cursor-pointer group">
          <div className="overflow-hidden">
            <img className="group-hover:scale-110  transition duration-300" src={food8} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-medium text-black/80 mb-2 group-hover:underline group-hover:text-primary-600 duration-300 transition">
              Grocery
            </h3>
            <p className="text-gray-500">16 Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
