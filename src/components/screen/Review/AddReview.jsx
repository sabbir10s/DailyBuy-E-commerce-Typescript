import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../../styles/AddReview.css";
const AddReview = () => {
  const [starRating, setStarRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      <form className="flex flex-col gap-[20px] mt-[32px]" action="">
        <div className="flex flex-col lg:flex-row items-center gap-[32px]">
          <input
            className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full name"
          />
          <input
            className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
        </div>
        <div>
          <input
            className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
            type="text"
            name="reviewTitle"
            id="reviewTitle"
            placeholder="Review Title"
          />
        </div>

        <div className="flex gap-1">
          {[...Array(5)]?.map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input type="radio" name="rating" value={ratingValue} onClick={() => setStarRating(ratingValue)} />
                <FaStar
                  className="cursor-pointer duration-300"
                  color={ratingValue <= (hover || starRating) ? "#ffc107" : "#e4e5e9"}
                  size={30}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <div className="">
          <textarea
            className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
            name="comment"
            id="comment"
            cols="30"
            rows="5"
            placeholder="Write comment"
          ></textarea>
        </div>
        <button className=" bg-primary-600 hover:bg-primary-500 duration-300 text-white text-lg w-1/4 py-[13px] rounded-[5px]">
          Submit your review
        </button>
      </form>
    </>
  );
};

export default AddReview;
