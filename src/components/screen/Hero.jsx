import Banner from "./Banner";
// import Navbar from "./Navbar";
// import fruits from '../../assets/icon/categoryGrayIcon.png'
// import meats from '../../assets/icon/categoryGrayIcon (2).png'
// import breads from '../../assets/icon/categoryGrayIcon (3).png'
// import frozen from '../../assets/icon/categoryGrayIcon (4).png'
// import breakfast from '../../assets/icon/categoryGrayIcon (5).png'
// import biscuits from '../../assets/icon/categoryGrayIcon (6).png'
// import beverages from '../../assets/icon/categoryGrayIcon (7).png'
// import grocery from '../../assets/icon/categoryGrayIcon (8).png'
// import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mt-2 ">
      <div className="flex items-center gap-5 w-full">
        {/* <h2 className=" hidden lg:block w-[240px] py-3 uppercase text-xl text-center bg-primary-600 text-white rounded-t-md font-semibold">
          Categories
        </h2>
        <Navbar />
      </div>
      <div className="flex items-center bg-white">
        <div className="hidden lg:block rounded-b-[10px] w-[300px] shadow-custom_secondary lg:mr-8 -ml-1">
          <ul className="lg:space-y-2">
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={fruits} alt="" />
                <span>Fruits & Vegetable</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={meats} alt="" />
                <span>Meats & Fish</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={breads} alt="" />
                <span>Breads & Bakery</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={frozen} alt="" />
                <span>Frozen Foods</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={breakfast} alt="" />
                <span>Breakfast & Dairy</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={biscuits} alt="" />
                <span>Biscuits & Snacks</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={beverages} alt="" />
                <span>Beverages</span>
              </Link>
            </li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
              <Link className="flex items-center gap-[8px]" to="/categories">
                <img className="w-[25px]" src={grocery} alt="" />
                <span>Grocery</span>
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="w-full">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Hero;
