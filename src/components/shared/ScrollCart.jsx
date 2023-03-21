import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ScrollCart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 hidden lg:block">
      <Link to="/cart">
        <button
          type="button"
          className={`
          ${isVisible ? "opacity-100" : "opacity-0"}
           rounded-full hover:scale-125 transition duration-300 ease-in-out`}
        >
          {" "}
          <div className="bg-secondary-50 inline-block w-14 h-14 rounded-[50%] relative">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block text-secondary-600 absolute top-4 left-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
            <span className="w-5 h-5 text-sm inline-block rounded-[50%] bg-secondary-600 text-white text-center font-semibold absolute top-2  right-1">
              {cartItems.length}
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default ScrollCart;
