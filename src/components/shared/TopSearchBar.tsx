import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/big_logo.png";
import smallLogo from "../../assets/logo/logo.png";
import Modal from "./AuthenticationModal";
import { AiOutlineSearch } from "react-icons/ai";
import { RootState } from "src/redux/app/store";

const TopSearchBar = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div className="border border-gray-100/60 fixed lg:static top-0 z-50 bg-white w-full">
        <div className="container ">
          <div className="flex gap-4 justify-between items-center py-5 ">
            <Link to="/">
              <img className=" hidden lg:block w-[180px]" src={logo} alt="" />
              <img
                className="block lg:hidden w-[80px] md:w-[130px] cursor-pointer"
                src={smallLogo}
                alt=""
              />
            </Link>
            <div className="hidden md:block w-1/2  lg:w-[550px] xl:w-[778px] relative">
              <input
                placeholder="I'm looking for..."
                type="text"
                className=" py-1.5 md:py-3 px-2 md:px-5 border border-gray-200/80 w-[80%] md:w-[86%] lg:w-[92%] focus:outline-primary-600 rounded-l-md bg-white"
              />
              <button className="bg-primary-600 text-white p-3 w-[14%] lg:w-[8%] h-full rounded-r-md absolute top-0 right-2 flex items-center justify-center">
                <AiOutlineSearch className="text-2xl lg:text-3xl" />
              </button>
            </div>
            <div className="flex gap-6">
              <Link to="/cart">
                <button
                  type="button"
                  className="bg-secondary-50 w-10 lg:w-12 h-10 lg:h-12 rounded-full relative flex items-center justify-center"
                >
                  {" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1236_59489)">
                      <path
                        d="M16.4457 19.1654H3.5557C3.31935 19.1654 3.0857 19.1152 2.87024 19.018C2.65478 18.9209 2.46245 18.779 2.30601 18.6019C2.14958 18.4247 2.03261 18.2163 1.96287 17.9905C1.89314 17.7646 1.87223 17.5266 1.90153 17.292L3.33404 5.83203H16.6674L18.0999 17.292C18.1292 17.5266 18.1083 17.7646 18.0385 17.9905C17.9688 18.2163 17.8518 18.4247 17.6954 18.6019C17.539 18.779 17.3466 18.9209 17.1312 19.018C16.9157 19.1152 16.682 19.1654 16.4457 19.1654Z"
                        stroke="#FF4646"
                        stroke-width="1.66667"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      />
                      <path
                        d="M6.66699 8.33203V4.16536C6.66985 3.28219 7.02196 2.436 7.64646 1.8115C8.27096 1.18699 9.11715 0.834888 10.0003 0.832031V0.832031C10.8835 0.834888 11.7297 1.18699 12.3542 1.8115C12.9787 2.436 13.3308 3.28219 13.3337 4.16536V8.33203"
                        stroke="#FF4646"
                        stroke-width="1.66667"
                        stroke-miterlimit="10"
                        stroke-linecap="square"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1236_59489">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className=" w-[14px] md:w-[17px]  h-[14px] md:h-[17px] text-[12px] flex items-center justify-center rounded-[50%] bg-secondary-600 text-white font-semibold absolute top-[3px]  right-[-4px]">
                    {cartItems.length}
                  </span>
                </button>
              </Link>
              <button onClick={() => setShowModal(true)}>
                <div className="flex items-center space-x-2">
                  <div className="bg-[#F8F8F8] w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center">
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.98492 14.3462C5.11731 14.3462 1.81445 14.931 1.81445 17.2729C1.81445 19.6148 5.09636 20.2205 8.98492 20.2205C12.8525 20.2205 16.1544 19.6348 16.1544 17.2938C16.1544 14.9529 12.8735 14.3462 8.98492 14.3462Z"
                        stroke="#4D4D4D"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.98488 11.0059C11.523 11.0059 13.5801 8.94779 13.5801 6.40969C13.5801 3.8716 11.523 1.81445 8.98488 1.81445C6.44679 1.81445 4.3887 3.8716 4.3887 6.40969C4.38013 8.93922 6.42393 10.9973 8.9525 11.0059H8.98488Z"
                        stroke="#4D4D4D"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="leading-4 hidden md:block">
                    <span className="text-gray-400">Hello</span>
                    <p className="text-base">Sign in</p>
                  </div>
                </div>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
};

export default TopSearchBar;
