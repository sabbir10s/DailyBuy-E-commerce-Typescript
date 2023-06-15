import React, { Dispatch, SetStateAction } from "react";
import bgImg from "../../../assets/auth/login.png";
import { FullWidthButton } from "../../theme/Button";
import Checkbox from "../../theme/Checkbox";

interface Props {
  setPath: Dispatch<SetStateAction<string>>;
}
const SignUp: React.FC<Props> = ({ setPath }) => {
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
        <div className="w-full p-4">
          <h2 className="text-2xl font-semibold text-center mb-10">SignUp</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            action="#"
            className="space-y-5"
          >
            <div className="text-center">
              <input
                className="px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="text-center">
              <input
                className="px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className=" text-center">
              <input
                className="px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className=" text-center">
              <input
                className="px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex items-center">
              <span className="-mt-2">
                <Checkbox />
              </span>
              <div className="flex items-center gap-1">
                <p>I agree to</p>
                <button
                  onClick={() => setPath("terms")}
                  className="text-primary-600 font-bold hover:underline cursor-pointer"
                >
                  terms and condition
                </button>
              </div>
            </div>
            <div className="text-center">
              <FullWidthButton title="Create Account" />
              <div className="mt-6">
                <span>Already have account?</span>
                <span>
                  <button
                    onClick={() => setPath("signIn")}
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    Login
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
