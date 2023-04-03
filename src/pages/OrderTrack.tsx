import React from "react";
import OrderInformation from "../components/screen/Order/OrderInformation";
import OrderItem from "../components/screen/Order/OrderItem";
import ProcessingSteps from "../components/screen/Order/ProcessingSteps";

const OrderTrack = () => {
  return (
    <div className="container w-full lg:w-3/4 mx-auto md:border rounded-[10px] bg-gray-50/10 md:p-8 mt-[100px] lg:mt-[35px] mb-[30px] md:shadow-custom">
      <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row items-center font-semibold lg:space-x-3 space-y-4 lg:space-y-0">
          <h2 className="text-sm lg:text-lg">Order Status :</h2>
          <h2 className="text-white text-sm bg-secondary-300 rounded-full px-3 py-1">Order Processing</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center font-semibold lg:space-x-3 space-y-4 lg:space-y-0">
          <h2 className="text-sm lg:text-lg">Payment Status :</h2>
          <h2 className="text-white text-sm bg-primary-600 rounded-full px-3 py-1">Cash on Delivery</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 mb-4">
        <div className="p-5 border rounded-xl">
          <h2 className="text-base font-medium">Oder Number</h2>
          <p className="text-gray-700 text-sm">334983046149</p>
        </div>
        <div className="p-5 border rounded-xl">
          <h2 className="font-medium text-base">Date</h2>
          <p className="text-gray-700 text-sm">March 2 , 2023</p>
        </div>
        <div className="p-5 border rounded-xl">
          <h2 className="font-medium text-base">Total</h2>
          <p className="text-gray-700 text-sm">$55.00</p>
        </div>
        <div className="p-5 border rounded-xl">
          <h2 className="font-medium text-base">Payment Method</h2>
          <p className="text-gray-700 text-sm">CASH_ON_DELIVERY</p>
        </div>
      </div>
      <ProcessingSteps />
      {/* <VerticalStepper/> */}
      <OrderInformation />
      <OrderItem />
    </div>
  );
};

export default OrderTrack;
