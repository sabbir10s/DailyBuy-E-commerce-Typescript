import React from "react";
import Slider from "react-slick";
import small4 from "../../assets/product-details/cup/small_product (4).png";

const SmallProductImg = ({ setActiveImg, small_img_url }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  return (
    <div>
      <Slider {...settings}>
        {small_img_url.map((img_url, idx) => (
          <>
            <div key={idx} className=" px-2 border-r border-gray-100">
            <img onClick={() => setActiveImg(img_url)} className="w-full h-full object-center object-fill rounded-2xl" src={img_url} alt="" />
          </div>
          </>
        ))}
        <div className=" px-2">
          <img onClick={() => setActiveImg(small4)} className="w-full h-full object-center object-fill rounded-2xl" src={small4} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SmallProductImg;
