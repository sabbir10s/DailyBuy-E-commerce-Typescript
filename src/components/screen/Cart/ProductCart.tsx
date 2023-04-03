import React from "react";
import ProcessingSteps from "../ProcessingSteps";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import emptyCart from "../../../assets/icon/emptyCart.png";
import { FullWidthButton, PrimaryButton } from "../../theme/Button";
import CartItem from "./CartItems";
import { RootState } from "src/redux/app/store";
const ProductCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );
  const shipping = 3;
  return (
    <div>
      <div className="container ">
        <h2 className=" text-[18px] md:text-[25px] lg:text-[48px] font-semibold mt-[100px] lg:mt-[40px] mb-[15px] lg:mb-[32px]">
          Your Cart
        </h2>
        {cartItems.length && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 mt-4">
              <div className=" col-span-3 bg-[#F9FAFB] rounded-[10px] shadow-custom">
                <div className="hidden lg:block">
                  <div className="grid grid-cols-7 mx-[7px] font-semibold py-5 uppercase text-[12px] ">
                    <h1 className="col-span-3">Product</h1>
                    <h1 className="text-center">Unite Price</h1>
                    <h1 className=" text-center">Quantity</h1>
                    <h1 className="text-center">Total</h1>
                    <h1 className="text-center">Remove</h1>
                  </div>
                </div>
                <div>
                  {cartItems.map((item) => (
                    <CartItem key={item._id} item={item} />
                  ))}
                </div>
              </div>
              <div className="relative grid-cols-1 w-full mt-[20px] lg:mt-0">
                <div className="lg:absolute space-y-5 top-0 left-0 w-full h-auto  lg:py-3 lg:px-4 lg:shadow-custom lg:border lg:rounded-lg">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-[14px]">Subtotal:</p>
                    <p className="text-gray-700 font-semibold text-[16px]">
                      ${total}.00
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-[14px]">Tax:</p>
                    <p className="text-gray-700 font-semibold text-[16px]">
                      $0.00
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-[14px]">Shipping:</p>
                    <p className="text-gray-700 font-semibold text-[16px]">
                      ${shipping}.00
                    </p>
                  </div>
                  <hr className="" />
                  <div className="flex justify-between items-center">
                    <p className="text-black font-medium text-[14px]">Total:</p>
                    <p className="text-primary-600 font-bold text-[16px]">
                      ${total + shipping}.00
                    </p>
                  </div>
                  <Link className="mt-[20px] block" to="/checkout">
                    <FullWidthButton title=" Check out" />
                  </Link>{" "}
                </div>
              </div>
            </div>
            {/* shipping button */}
            <div className="mt-14 text-center lg:text-left">
              <Link to="/categories" className="hidden lg:block">
                <PrimaryButton title="Continue Shopping" />
              </Link>
            </div>
          </div>
        )}
        {cartItems.length === 0 && (
          <div className="flex flex-col items-center gap-8 py-20 mt-[50px] ">
            <img className="w-[200px]" src={emptyCart} alt="" />
            <div className="text-center">
              <h2 className="text-xl text-gray-500 font-semibold mb-6">
                Your cart is empty!
              </h2>
              <Link
                className="border border-primary-600 text-primary-600 hover:text-white hover:bg-primary-600 text-xl px-4 py-1 rounded "
                to="/categories"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        )}
      </div>
      <ProcessingSteps />
    </div>
  );
};

export default ProductCart;
