import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductCard from "../../shared/ProductCard";
import { Product } from "src/models/types";

type RelatedProductProps = {
  productData: Product[];
};

const RelatedProduct = ({ productData }: RelatedProductProps) => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="container flex justify-between items-center mt-[25px] md:mt-[35px] lg:mt-[50px] mb-[16px] lg:mb-[29px]">
          <h2 className="text-sm md:text-2xl lg:text-4xl font-semibold text-center lg:text-left">
            Related Product
          </h2>
          <Link
            to="/categories"
            className="text-gray-500 text-[10px] md:text-base uppercase flex items-center gap-1 hover:text-primary-600 duration-300"
          >
            <span>View More</span>
            <FiArrowRight />
          </Link>
        </div>
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[20px]">
          {productData.slice(0, 4).map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
