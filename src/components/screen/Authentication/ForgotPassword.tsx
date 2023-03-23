import React, { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { FullWidthButton } from "../../theme/Button";
import "../../../styles/SignSignUp.css";

interface Props {
  setPath: Dispatch<SetStateAction<string>>;
}

const ForgotPassword: React.FC<Props> = ({ setPath }) => {
  const [newPassword, setNewPassword] = useState<boolean>(false);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[70vh] w-full">
        <div className="w-[400px] lg:w-[430px] h-[70vh] hidden md:block bgImg"></div>
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
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border"
                  type="email"
                  placeholder="Email"
                />
              </div>
            )}{" "}
            {newPassword && (
              <div className="text-center">
                <input
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                  type="password"
                  placeholder="Password"
                />
              </div>
            )}{" "}
            {newPassword && (
              <div className=" text-center">
                <input
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            )}
            <div className="text-center pb-10">
              {newPassword ? (
                <button
                  type="submit"
                  className="w-full text-xl py-2.5 relative rounded group font-medium text-white inline-block"
                >
                  <Link to="/signIn">
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-primary-600 to-primary-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-primary-600 to-primary-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-primary-600 to-primary-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-primary-600 from-primary-500"></span>
                    <span className="relative">Reset Password</span>
                  </Link>
                </button>
              ) : (
                <FullWidthButton
                  onClick={() => setNewPassword(true)}
                  title="Forget Password"
                />
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
