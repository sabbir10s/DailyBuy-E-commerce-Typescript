import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ImWarning } from "react-icons/im";
import ReactStars from "react-stars";
import { Helmet } from "react-helmet";
import SmallProductImg from "../SmallProductImg";
import BreadCamp from "src/components/theme/BreadCamp";
import { Product } from "src/models/types";
type productProps = {
  productInfo: Product;
};
const TopSection = ({ productInfo }: productProps) => {
  const [wishlist, setWishlist] = useState(false);

  const {
    main_img_url,
    small_img_url,
    name,
    price,
    rating,
    review,
    discount,
    stock,
    desc,
    details_benefit,
  } = productInfo;
  const [activeImg, setActiveImg] = useState(main_img_url);

  return (
    <div>
      <Helmet>
        <title>DailyBuy - Product Details</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy Product Details Page"
        />
      </Helmet>
      <div className="mt-20 lg:mt-0">
        <div className="container mt-0 md:mt-[30px]">
          <BreadCamp />
          <div className="md:mt-[32px] grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            <div className="space-y-4 cursor-pointer col-span-1">
              <div className=" w-full h-full lg:h-[400px] border border-gray-100">
                <img
                  className="w-full h-full object-center object-fill rounded-[24px]"
                  src={activeImg}
                  alt=""
                />
              </div>
              <div className="hidden lg:block">
                <SmallProductImg
                  small_img_url={small_img_url}
                  setActiveImg={setActiveImg}
                />
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <div>
                <h2 className=" text-[20px] md:text-[32px] font-semibold">
                  {name}
                </h2>
                {/* rating section */}
                <div className="flex items-center justify-between lg:justify-start lg:space-x-8 mt-5 flex-wrap">
                  <div className="flex space-x-2 items-center ">
                    <p className="font-semibold text-[18px]">{rating}</p>
                    <div className="flex items-center">
                      <ReactStars
                        count={5}
                        size={25}
                        value={rating}
                        edit={false}
                      ></ReactStars>
                    </div>
                    <p className="text-gray-500">({review})</p>
                  </div>
                  <div className="lg:border-l text-gray-500 lg:px-5 flex md:gap-2 items-center">
                    <div
                      onClick={() => setWishlist(!wishlist)}
                      className="cursor-pointer"
                    >
                      {!wishlist && (
                        <AiOutlineHeart className="text-[#999999]/40 text-3xl" />
                      )}{" "}
                      {wishlist && (
                        <AiFillHeart className="text-[#FF5555] text-3xl" />
                      )}
                    </div>
                    <div>
                      <button
                        onClick={() => setWishlist(!wishlist)}
                        className="text-primary-600 font-bold hidden md:block"
                      >
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
                {/* price section */}

                <div className="flex items-center justify-between lg:justify-start md:gap-10 mt-8">
                  <div className="flex items-center space-x-5 ">
                    <p className="text-[32px] md:text-[48px] text-primary-600 font-bold">
                      ${price}
                    </p>
                    <div>
                      <p className="text-[12px] text-secondary-300 uppercase font-bold">
                        {(price * discount) / 100}% off
                      </p>
                      <p className="text-[16px] md:text-[20px] text-gray-500">
                        <del>{discount}</del>
                      </p>
                    </div>
                  </div>

                  <div className="block lg:hidden">{/* <Quantity /> */}</div>
                </div>

                <div className="flex flex-col">
                  {/*==========================
              =========sort desc============
              ==============================*/}
                  <div className="mt-10 lg:mt-6 order-2 lg:order-1">
                    <div className="flex space-x-4 items-center">
                      <span>
                        <b>SKU:</b>
                        12314
                      </span>
                      {stock && (
                        <span className="text-gray-600">✅ In Stock</span>
                      )}
                      {!stock && (
                        <p className="text-gray-600 flex items-center gap-1">
                          <ImWarning className="text-[#FF5555]" />
                          <span>Not Available</span>
                        </p>
                      )}
                    </div>
                    <p className="mt-3 text-gray-700">{desc}</p>
                    <ul className="mt-3 text-gray-700">
                      {details_benefit.map((d, index) => (
                        <li key={index} className="list-disc list-inside">
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/*============================
              =========button section======
              ==============================*/}
                  <div className=" mt-8 lg:mt-6 flex flex-col lg:flex-row lg:items-center gap-[32px] order-1 lg:order-2">
                    <div className="flex items-center justify-between md:justify-start gap-[32px]">
                      <div className="hidden lg:block">
                        {/* <Quantity /> */}
                      </div>
                      <div>
                        {" "}
                        <Link to="/cart">
                          <button
                            disabled={!stock}
                            // onClick={() => handleAddToCart(productInfo)}
                            className="bg-primary-600 hover:bg-primary-500 text-white border duration-300 py-[10px] lg:py-[13px] px-[30px] lg:px-[40px] rounded-[5px] disabled:bg-gray-100 disabled:text-primary-600/70 disabled:cursor-not-allowed"
                          >
                            {stock ? `Add to cart` : `Sold Out!`}
                          </button>
                        </Link>
                      </div>{" "}
                      <div>
                        {stock && (
                          <Link to="/checkout">
                            <button
                              disabled={!stock}
                              // onClick={() => handleAddToCart(productInfo)}
                              className="text-primary-600 hover:text-primary-800 bg-white hover:bg-primary-50 border border-primary-600 hover:border-primary-800 duration-300 py-[10px] lg:py-[13px] px-[30px] lg:px-[40px] rounded-[5px] disabled:border-primary-600/50 disabled:text-primary-600/50 disabled:cursor-not-allowed"
                            >
                              Buy Now
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
