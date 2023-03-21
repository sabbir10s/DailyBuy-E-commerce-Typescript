import axios from "axios";
import React, { useEffect, useState } from "react";
import {FiArrowRight} from 'react-icons/fi';
import { Link } from "react-router-dom";
import ProductCard from "../shared/ProductCard";

const FeatureProduct = () => {
  const [productData, setProductData] = useState([]);
  const fetchData = () => {
    axios
      .get("products.json")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
      <div
        className="flex justify-between items-center mt-[25px] md:mt-[35px] lg:mt-[50px] mb-[16px] lg:mb-[29px]">
        <h2
          className="text-sm md:text-2xl lg:text-4xl font-semibold text-center lg:text-left text-[#2E2E2E]">
          Featured Product
        </h2>
        <Link to='/categories'
          className="text-gray-500 text-[10px] md:text-base uppercase flex items-center gap-1 hover:text-primary-600 duration-300">
          <span>View More</span>
          <FiArrowRight/>
        </Link>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] md:gap-[20px]">
          {productData.slice(0, 4).map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FeatureProduct;
