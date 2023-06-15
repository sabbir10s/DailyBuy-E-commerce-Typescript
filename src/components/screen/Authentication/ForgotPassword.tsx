import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FullWidthButton } from "../../theme/Button";
import bgImg from "../../../assets/auth/login.png";

const ForgotPassword = ({ setPath, onClose }: any) => {
  const [newPassword, setNewPassword] = useState<boolean>(false);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[85vh] w-full">
        <div className="relative w-[400px] lg:w-[470px] h-full hidden md:block">
          <img
            className="absolute bottom-0 w-full h-full object-cover object-center"
            src={bgImg}
            alt=""
          />
        </div>
        <div className="p-3 w-full">
          <h2 className="text-2xl font-semibold text-center mb-10">
            {newPassword ? "New Password" : "Forget Password"}
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            action="#"
            className="space-y-5"
          >
            {!newPassword && (
              <div className="text-center">
                <input
                  required={true}
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border"
                  type="email"
                  placeholder="Email"
                />
              </div>
            )}{" "}
            {newPassword && (
              <div className="text-center">
                <input
                  required={true}
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                  type="password"
                  placeholder="Password"
                />
              </div>
            )}{" "}
            {newPassword && (
              <div className=" text-center">
                <input
                  required={true}
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            )}
            <div className="text-center pb-10">
              {newPassword ? (
                <Link to="/profile" onClick={onClose}>
                  <FullWidthButton title="Reset Password" />
                </Link>
              ) : (
                <button
                  type="submit"
                  onClick={() => setNewPassword(true)}
                  className="w-full py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium text-white bg-primary-600 hover:bg-primary-500 transition duration-300 ease-out"
                >
                  Forget Password
                </button>
              )}
              <div className="mt-8">
                <span>Already have account?</span>{" "}
                <button
                  onClick={() => setPath("signIn")}
                  className="text-primary-600 font-semibold hover:underline"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
