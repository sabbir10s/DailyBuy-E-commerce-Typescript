import React from "react";
import { useSelector } from "react-redux";

const InvoiceTable = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0);
  const shipping = 3;
  return (
    <div className="container my-[64px]">
      <div className="border-t-[1px] border-r-[1px] rounded-t-[10px] rounded-bl-[10px]">
        <div className="grid grid-cols-5 justify-items-center font-semibold border-l">
          <div className="py-[19px]">Serial No</div>
          <div className="py-[19px]">Product Name</div>
          <div className="py-[19px]">Quantity</div>
          <div className="py-[19px]">Item Price</div>
          <div className="py-[19px]">Amount</div>
        </div>
        {cartItems.map((order, index) => (
            <>
            <div key={index} className="grid grid-cols-5 justify-items-center text-[#383838] border-t-[1px] border-l">
              <div className="py-[19px]">{index + 1}</div>
              <div className="py-[19px]">{order.product_name.slice(0, 25)}....</div>
              <div className="py-[19px]">{order.cartQuantity}</div>
              <div className="py-[19px]">${order.price}</div>
              <div className="py-[19px]">${order.cartQuantity * order.price}</div>
            </div>
            </>
        ))}
        {/*  */}
        <div className="grid grid-cols-5 justify-items-center border-t">
          <div className="py-[19px]"></div>
          <div className="py-[19px]"></div>
          <div className="py-[19px]"></div>
          <div className="py-[19px] w-full border-l border-b text-center">
            <p>Subtotal</p>
          </div>
          <div className="py-[19px] border-b w-full text-center">
            <p>${total}.00</p>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-5 justify-items-center">
          <div className="py-[19px]"></div>
          <div className="py-[19px]"></div>
          <div className="py-[19px]"></div>
          <div className="py-[19px] w-full border-l border-b text-center">
            <p>Shopping Cost</p>
          </div>
          <div className="py-[19px] border-b w-full text-center">
            <p>${shipping}.00</p>
          </div>
        </div>{" "}
        {/*  */}
        <div className="grid grid-cols-5 justify-items-center">
          <div className="py-[19px]"></div>
          <div className="py-[19px]"></div>
          <div className="py-[19px]"></div>
          <div className="py-[19px] w-full border-l border-b text-center">
            <p>Total Cost</p>
          </div>
          <div className="py-[19px] border-b w-full text-center">
            <p>${total + shipping}.00</p>
          </div>
        </div>
      </div>
      <div className="mt-20 text-end">
        <button className="bg-primary-500 cursor-pointer hover:bg-primary-700 transition duration-300 space-x-2 text-white py-2 px-4 rounded shadow-custom">
          <span>Print invoice</span>{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default InvoiceTable;
