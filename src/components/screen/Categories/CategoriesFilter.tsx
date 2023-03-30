import React, { useState } from "react";
import Checkbox from "../../theme/Checkbox";

const CategoriesFilter = () => {
  const [price, setPrice] = useState(30);

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e: any) => {
    setPrice(e.target.value);
  };
  return (
    <aside>
      <div>
        <header className="font-bold text-base mb-3">
          {" "}
          Popular Categories
        </header>
        <ul className="space-y-3 h-[270px] overflow-y-scroll">
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              Women <span className="ml-1 text-gray-400">(190)</span>
            </li>
          </div>
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              Hand Bags <span className="ml-1 text-gray-400">(90)</span>
            </li>
          </div>{" "}
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              Men <span className="ml-1 text-gray-400">(180)</span>
            </li>
          </div>{" "}
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              Shoes <span className="ml-1 text-gray-400">(20)</span>
            </li>
          </div>
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              T-shirt <span className="ml-1 text-gray-400">(40)</span>
            </li>
          </div>
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              Saree <span className="ml-1 text-gray-400">(180)</span>
            </li>
          </div>{" "}
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              Shorts <span className="ml-1 text-gray-400">(20)</span>
            </li>
          </div>
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              Showl <span className="ml-1 text-gray-400">(40)</span>
            </li>
          </div>{" "}
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              Brand Hoodie <span className="ml-1 text-gray-400">(20)</span>
            </li>
          </div>
          <div className="flex space-x-2">
            <li className="list-none text-sm  txtHover">
              Shirts <span className="ml-1 text-gray-400">(40)</span>
            </li>
          </div>
        </ul>
        <hr className="my-6" />
      </div>{" "}
      {/* filter price */}
      <div>
        <header className="font-bold text-base mb-3">Filter by Price</header>
        <input
          step="10"
          className="w-full"
          min="0"
          max="300"
          type="range"
          onInput={handleInput}
        />
        <h1>Price: ${price}.00</h1>
        <hr className="my-6" />
      </div>
      {/* color */}
      <div>
        <header className="font-bold text-base mb-3">Filter by Colors</header>
        <ul className="space-y-1">
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">White</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Brown</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Yellow</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Violet</li>
          </div>
        </ul>
        <hr className="my-6" />
      </div>
      {/* size */}
      <div>
        <header className="font-bold text-base mb-3"> Filter by Sizes</header>
        <ul className="space-y-1">
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">XS</li>
            <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-0 left-12 rounded-full text-[10px] leading-none text-white font-medium">
              <span className="inline-block text-center">4</span>
            </div>
          </div>
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">S</li>
            <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-0 left-12 rounded-full text-[10px] leading-none text-white font-medium">
              <span className="inline-block text-center">6</span>
            </div>
          </div>{" "}
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">M</li>
            <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-0 left-12 rounded-full text-[10px] leading-none text-white font-medium">
              <span className="inline-block text-center">8</span>
            </div>
          </div>
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">L</li>
            <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-0 left-12 rounded-full text-[10px] leading-none text-white font-medium">
              <span className="inline-block text-center">1</span>
            </div>
          </div>{" "}
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">XL</li>
            <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-0 left-12 rounded-full text-[10px] leading-none text-white font-medium">
              <span className="inline-block text-center">2</span>
            </div>
          </div>
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">2XL</li>
            <div className="w-3.5 h-3.5 flex items-center justify-center bg-primary-500 absolute top-0 left-14  rounded-full text-[10px] leading-none text-white font-medium">
              <span className="inline-block text-center">0</span>
            </div>
          </div>
        </ul>
        <hr className="my-6" />
      </div>
      {/* sort order */}
      <div>
        <header className="font-bold text-base mb-3">Sort order</header>
        <ul className="space-y-1">
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Most popular</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Best selling</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Newest</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Price Low - Hight</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Price Hight - Low</li>
          </div>
        </ul>
        <hr className="my-6" />
      </div>
      {/* rating */}
      <div>
        <header className="font-bold text-base mb-3">Filter by Rating</header>
        <ul className="space-y-1">
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm flex space-x-1 items-center">
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>{" "}
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm flex space-x-1 items-center">
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>{" "}
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>{" "}
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm flex space-x-1 items-center">
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>{" "}
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>{" "}
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm flex space-x-1 items-center">
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>{" "}
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>{" "}
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>{" "}
              <span className="text-[#FECA38]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#FECA38"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </span>
            </li>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default CategoriesFilter;
