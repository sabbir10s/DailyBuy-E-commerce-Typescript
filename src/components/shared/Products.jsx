import React, { useState } from "react";
import { SecondaryButton } from "../theme/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/cartSlice";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="shadow-custom relative rounded-lg bg-gray-50 p-3 w-full cursor-pointer hover:bg-white duration-300 transition ease-in border border-gray-200/60 overflow-hidden">
      <div>
        <div className="bg-secondary-300 inline-block py-2 px-3 rounded-tl-2xl rounded-br-2xl text-white absolute top-3 left-3">
          <p>{product?.discount}% OFF</p>
        </div>
        <div
          onClick={() => setWishlist(!wishlist)}
          className="bg-white hidden md:inline-block p-2 border border-gray-100 rounded-[50%] text-white absolute top-3 right-3 hover:scale-110 duration-300 transition"
        >
          {!wishlist && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}{" "}
          {wishlist && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FF5555"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-[#FF5555]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          )}
        </div>{" "}
        <Link to={`/product/${product?.id}`}>
          <div className="w-[300px] mx-auto h-[250px]">
            <img src={product?.main_img_url} className="w-full h-full object-center object-fill" alt="" />
          </div>{" "}
        </Link>
        <Link to={`/product/${product?.id}`}>
          <div className="space-y-3 lg:mt-1">
            <h3 className="text-black font-semibold text-[12px] md:text-[18px]">{product?.nickname}</h3>
            <div className="flex justify-between items-center">
              <p className="space-x-2">
                <span className="text-primary-600 text-[12px] md:text-[18px] font-semibold">${product?.price}</span>
                <span className="text-gray-500 text-base text-[11px] md:text-[18px]">
                  <del>${product?.del_price}</del>
                </span>
              </p>
              <div className="flex space-x-1 items-center">
                <div className="flex items-center">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FECA38"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-54 h-5 inline-block text-[#FECA38]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#919EAB"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-54 h-5 inline-block text-[#919EAB]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-[12px] md:text-[18px]">(4.5)</p>
              </div>
            </div>
          </div>
        </Link>
        <div className="mt-3">
          <SecondaryButton handleAddToCart={handleAddToCart} product={product} title="Add to cart" w="full" />
        </div>
      </div>
    </div>
  );
};

export default Products;
