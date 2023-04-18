import React from "react";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import peyMethod1 from "../assets/payment/peyment (1).png";
import peyMethod2 from "../assets/payment/peyment (2).png";
import peyMethod3 from "../assets/payment/peyment (3).png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/feature/cartSlice";
import { FullWidthButton, PrimaryButton } from "../components/theme/Button";
import { Helmet } from "react-helmet";
import { RootState } from "src/redux/app/store";
import { CartItem } from "src/models/types";

const Checkout = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  const handleRemoveItem = (cartItem: CartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );
  const shipping = 3;
  return (
    <>
      <Helmet>
        <title>DailyBuy - Checkout</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy Checkout Page"
        />
      </Helmet>

      <div className="container">
        <h2 className=" text-2xl lg:text-5xl font-semibold mt-4 ">Checkout</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
          <div className="p-3 lg:col-span-3 ">
            <form
              onSubmit={(e) => e.preventDefault()}
              action="#"
              className="space-y-5"
            >
              <div>
                <h3 className="text-xl mb-5 font-semibold">
                  1. Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="number"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>{" "}
              {/*  */}
              <div>
                <h3 className="text-xl mb-5 font-semibold">
                  2. Shipping Address
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <textarea
                      rows={1}
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      placeholder="Address"
                    />
                  </div>
                  <div>
                    <select
                      className="px-4 py-3 border-gray-100 text-gray-500 rounded w-full focus:border-primary-600 outline-none border"
                      name="city"
                      id="city"
                    >
                      <option value="City">City</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Comilla">Comilla</option>
                    </select>
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="number"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <h3 className="text-xl mb-5 font-semibold">
                  3. Payment Method
                </h3>
                <div className="mb-5 space-y-5">
                  <div className="w-full flex space-x-2 justify-between">
                    <button className="focus:border-primary-600 border-2 rounded-lg">
                      <img src={peyMethod1} alt="" />
                    </button>{" "}
                    <button className="focus:border-primary-600 border-2 rounded-lg">
                      <img src={peyMethod2} alt="" />
                    </button>{" "}
                    <button className="focus:border-primary-600 border-2 rounded-lg">
                      <img src={peyMethod3} alt="" />
                    </button>
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="text"
                      placeholder="Name On Card"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="number"
                      placeholder="Card Number"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="number"
                      placeholder="CVV"
                    />
                  </div>
                  <div>
                    <select
                      className="px-4 py-3 border-gray-100 text-gray-500 rounded w-full focus:border-primary-600 outline-none border"
                      name="month"
                      id="month"
                    >
                      <option value="City">Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>{" "}
                  <div>
                    <select
                      className="px-4 py-3 border-gray-100 text-gray-500 rounded w-full focus:border-primary-600 outline-none border"
                      name="year"
                      id="year"
                    >
                      <option value="City">Year</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>s
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                    </select>
                  </div>
                </div>
              </div>{" "}
            </form>
          </div>
          {cartItems.length > 0 ? (
            <div className=" relative lg:col-span-2">
              <div className="w-full p-3 border rounded-xl">
                {cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative mb-3 border-b py-2 lg:border-none lg:py-0"
                  >
                    <div className="flex space-x-2 items-center col-span-2 lg:border rounded-lg lg:p-2 border-gray-100">
                      <div className="w-[80px] h-[80px] bg-gray-50  rounded-2xl">
                        <img
                          src={item?.main_img_url}
                          className="w-full h-full object-center object-fill"
                          alt="product-img"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-primary-600">
                          {item?.name}
                        </p>
                        <p className="font-semibold">
                          {item?.cartQuantity} x ${item?.price}.00
                        </p>
                      </div>
                    </div>
                    <div className="absolute -top-1 lg:top-2 -right-1 lg:right-2">
                      <button onClick={() => handleRemoveItem(item)}>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 border p-1 rounded-full lg:border-none lg:p-0 lg:rounded-none text-black hover:text-primary-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
                <div className="lg:mt-32 mt-5">
                  <div className=" space-y-5   lg:py-3 ">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 text-base">Subtotal:</p>
                      <p className="text-gray-700 font-semibold text-xl">
                        ${total}.00
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 text-base">Tax:</p>
                      <p className="text-gray-700 font-semibold text-xl">
                        $0.00
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 text-base">Shipping:</p>
                      <p className="text-gray-700 font-semibold text-xl">
                        ${shipping}.00
                      </p>
                    </div>
                    <hr className="" />
                    <div className="flex justify-between items-center">
                      <p className="text-black font-medium text-base">Total:</p>
                      <p className="text-primary-600 font-bold text-xl">
                        ${total + shipping}.00
                      </p>
                    </div>
                    <Link className="block mt-[20px]" to="/orders">
                      <FullWidthButton title="Place Order" />
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" relative lg:col-span-2">
              <div className="p-32 text-secondary-600">
                <p className="mb-10"> Please Add to Cart Your Product</p>
                <Link to="/categories">
                  <PrimaryButton title="Continue Shipping" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <ProcessingSteps />
    </>
  );
};

export default Checkout;
