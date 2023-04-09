import React, { useState } from "react";
import MyAccount from "../components/screen/userProfile/MyAccount";
import MyOrders from "../components/screen/userProfile/MyOrders";
import Password from "../components/screen/userProfile/Password";
import { Helmet } from "react-helmet";

const Profile = () => {
  const [option, setOption] = useState("myAccount");
  return (
    <div>
      <Helmet>
        <title>DailyBuy - My Account</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy My Account Page"
        />
      </Helmet>
      <div className="mb-[25px] mt-[100px] md:mt-[44px]">
        <div className="flex justify-center mb-[25px] container">
          <button
            onClick={() => setOption("myAccount")}
            className={
              option === "myAccount"
                ? "border rounded-l-[5px] px-2 md:px-6 py-2 bg-primary-500 text-white border-primary-500"
                : "border rounded-l-[5px] px-2 md:px-6 py-2 hover:bg-primary-500 hover:text-white hover:border-primary-500"
            }
          >
            MyAccount
          </button>
          <button
            onClick={() => setOption("myOrders")}
            className={
              option === "myOrders"
                ? "border px-6 py-2 bg-primary-500 text-white border-primary-500"
                : "border px-6 py-2 hover:bg-primary-500 hover:text-white hover:border-primary-500"
            }
          >
            My Orders
          </button>
          <button
            onClick={() => setOption("password")}
            className={
              option === "password"
                ? "border rounded-r-[5px] px-6 py-2 bg-primary-500 text-white border-primary-500"
                : "border rounded-r-[5px] px-6 py-2 hover:bg-primary-500 hover:text-white hover:border-primary-500"
            }
          >
            Change Password
          </button>
        </div>
        {option === "myAccount" && <MyAccount />}
        {option === "myOrders" && <MyOrders />}
        {option === "password" && <Password />}
      </div>
    </div>
  );
};

export default Profile;
