import React from "react";
import { FullWidthButton } from "../../theme/Button";

const FaqForm = () => {
  return (
    <div>
      <div className="w-full bg-white md:p-6 ">
        <h2 className="text-xl md:text-xl lg:text-3xl font-bold mb-8 lg:text-center">
          Have any questions
        </h2>
        <form className="w-full flex flex-col gap-4" action="">
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
          <div className="">
            <textarea
              className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full"
              name="message"
              id="message"
              cols={30}
              rows={4}
              placeholder="Message"
            ></textarea>
          </div>
          <FullWidthButton title="Submit Now" />
        </form>
      </div>
    </div>
  );
};

export default FaqForm;
