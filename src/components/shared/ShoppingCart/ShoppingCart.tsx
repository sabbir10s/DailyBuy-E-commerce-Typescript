import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiShoppingBag } from "react-icons/hi";
import { useSelector } from "react-redux";
import ShoppingItems from "./ShoppingItems";
import { Link } from "react-router-dom";
import { RootState } from "src/redux/app/store";

interface Props {
  handleCloseCart: () => void;
  visible: boolean;
}

const ShoppingCart: React.FC<Props> = ({ visible, handleCloseCart }) => {
  const handleCloseModal = (e: any) => {
    if (e.target.id === "container") handleCloseCart();
  };

  const { cartItems } = useSelector((state: RootState) => state.cart);

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  if (!visible) {
    return null;
  }

  return (
    <div
      id="container"
      onClick={handleCloseModal}
      className="z-50 fixed inset-0 bg-black bg-opacity-25 flex items-center justify-end"
    >
      <div className="relative w-full md:w-1/2 lg:w-1/3">
        <div className="bg-white w-full h-screen overflow-x-scroll flex flex-col justify-between ">
          <div>
            <div className=" w-full flex justify-between bg-[#eef2ff] py-[20px] px-[15px]">
              <div className="flex items-center gap-2">
                <RiShoppingBagLine className="text-[24px]" />
                <h2 className="text-xl font-medium">Shopping Cart</h2>{" "}
              </div>
              <button
                className="text-sm flex gap-2 items-center hover:text-secondary-500 duration-300"
                onClick={handleCloseCart}
              >
                <span>X</span>
                Close
              </button>
            </div>

            <div>
              {cartItems.length > 0 && (
                <div>
                  {cartItems.map((item) => (
                    <ShoppingItems item={item} key={item._id} />
                  ))}{" "}
                </div>
              )}
            </div>
          </div>

          <div>
            {!cartItems.length && (
              <div className="flex items-center text-center px-8">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary-100 flex items-center justify-center rounded-full">
                    <HiShoppingBag className="text-5xl text-primary-600" />
                  </div>
                  <h2 className="text-lg font-bold mt-4">Your cart is empty</h2>
                  <p className="text-sm text-gray-600 mt-2">
                    No items added in your cart. Please add product to your cart
                    list.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div onClick={handleCloseCart} className="flex justify-center mb-4">
            <Link to="/checkout" className="block w-full mx-4">
              <button className="bg-primary-600 hover:bg-primary-700 duration-300 font-semibold text-primary-600 w-full rounded-[8px] flex items-center justify-between  px-2 py-4">
                <span className="text-white">Proceed To Checkout</span>
                <span className="bg-white rounded-[8px] p-2">${total}.00</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
