import React, { SetStateAction } from "react";
import { FullWidthButton } from "../../theme/Button";
import "../../../styles/SignSignUp.css";
import { Dispatch } from "react";

interface Props {
  setPath: Dispatch<SetStateAction<string>>;
}
const SignIn: React.FC<Props> = ({ setPath }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[75vh] lg:h-full w-full  overflow-y-auto">
        <div className="w-[400px] lg:w-[430px] h-full hidden md:block bgImg"></div>
        <div className="p-6 w-full flex justify-center items-center">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-center mb-8 ">Login</h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              action="#"
              className="space-y-5"
            >
              <div className="text-center">
                <input
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className=" text-center">
                <input
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="text-end">
                <button
                  onClick={() => setPath("forgetPassword")}
                  className="inline-block text-secondary-600 font-semibold cursor-pointer hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="text-center pb-10">
                <FullWidthButton title="Login" />
                <div className="mt-8">
                  <span>Have on account yet?</span>{" "}
                  <span>
                    <button
                      onClick={() => setPath("signUp")}
                      className="text-primary-600 font-semibold hover:underline"
                    >
                      Create Account
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
