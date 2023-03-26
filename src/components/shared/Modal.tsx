import React, { useState } from "react";
import ForgotPassword from "../screen/Authentication/ForgotPassword";
import SignIn from "../screen/Authentication/SignIn";
import SignUp from "../screen/Authentication/SignUp";
import TermsCondition from "../screen/Authentication/TermsCondition";

interface Props {
  onClose: () => void;
  visible: boolean;
}

const Modal: React.FC<Props> = ({ onClose, visible }) => {
  const [path, setPath] = useState("signIn");
  if (!visible) return null;
  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="relative">
        <div className="bg-white rounded-[10px]">
          <div className="flex justify-end absolute top-2 right-2">
            <button
              className="bg-gray-200 text-gray-800 w-8 h-8 rounded-full text-sm"
              onClick={onClose}
            >
              X
            </button>
          </div>
          {path === "signIn" && <SignIn setPath={setPath} />}
          {path === "forgetPassword" && <ForgotPassword setPath={setPath} />}
          {path === "signUp" && <SignUp setPath={setPath} />}
          {path === "terms" && <TermsCondition setPath={setPath} />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
