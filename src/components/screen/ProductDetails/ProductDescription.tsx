import React, { useState } from "react";
import Reviews from "../Review/Reviews";
import AddReview from "../Review/AddReview";

interface ProductDescriptionProps {
  productInfo: {
    full_description: string;
    packaging_and_delivery: string;
    other_things_of_product: string;
  };
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  productInfo,
}) => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState<"desc" | "review">("desc");
  const { full_description, packaging_and_delivery, other_things_of_product } =
    productInfo;

  return (
    <div>
      <div className="mt-8 lg:mt-[99px] p-6 lg:p-10 border border-gray-100 rounded-2xl">
        <div className="flex items-center justify-between md:justify-start md:space-x-8">
          <button
            id="description"
            onClick={() => setActive("desc")}
            className={` border outline-none border-gray-100 rounded-3xl py-2 px-8 shadow-custom font-semibold duration-300 transition ease-in-out text-sm ${
              active === "desc"
                ? "bg-primary-600 text-white"
                : "text-gray-600 bg-white"
            } `}
          >
            Description
          </button>
          <button
            onClick={() => setActive("review")}
            className={` border outline-none border-gray-100 rounded-3xl py-2 px-8 shadow-custom font-semibold duration-300 transition ease-in-out text-sm ${
              active === "review"
                ? "bg-primary-600 text-white"
                : "text-gray-600 bg-white"
            } `}
          >
            Reviews
          </button>
        </div>
        <div className="mt-8">
          {active === "desc" && (
            <div>
              {" "}
              <div className="text-sm leading-relaxed">
                <p className="hidden lg:block">{full_description}</p>
                <div className="block lg:hidden">
                  {click && (
                    <a href="#description">
                      <span>{full_description}</span>{" "}
                      <span
                        onClick={() => setClick(false)}
                        className="text-primary-600 font-semibold"
                      >
                        show less
                      </span>
                    </a>
                  )}
                  {!click && (
                    <div>
                      <span>{full_description.slice(0, 300)}...</span>
                      <span
                        onClick={() => setClick(true)}
                        className="text-primary-600 font-semibold inline"
                      >
                        More
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="hidden lg:block">
                <h3 className="text-2xl font-semibold mt-5 mb-3">
                  Packaging & Delivery
                </h3>
                <p className="text-sm leading-relaxed">
                  {packaging_and_delivery}
                </p>{" "}
              </div>{" "}
              <div className="hidden lg:block">
                <h3 className="text-2xl font-semibold mt-5 mb-3">
                  Other Ingredients
                </h3>
                <p className="text-sm leading-relaxed">
                  {other_things_of_product}
                </p>{" "}
              </div>
            </div>
          )}
          {active === "review" && (
            <div>
              <Reviews />
              <div className="hidden lg:block mt-[40px]">
                <h2 className=" pt-[24px] text-[24px] font-semibold border-t border-#DFE3E">
                  Add Review
                </h2>
                <AddReview />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
