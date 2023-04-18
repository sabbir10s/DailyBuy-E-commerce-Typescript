// import { Product } from "src/models/types";

// type buttonType = {
//   title: string;
//   w?: "full" | undefined;
//   handleAddToCart: (product: Product) => void;
//   product: Product;
// };

export const PrimaryButton = ({ title }: any) => {
  return (
    <button className="px-[25px] py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium text-white bg-primary-600 hover:bg-primary-500 transition duration-300 ease-out ">
      {title}
    </button>
  );
};
export const FullWidthButton = ({ title }: any) => {
  return (
    <button
      type="submit"
      className="w-full py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium text-white bg-primary-600 hover:bg-primary-500 transition duration-300 ease-out"
    >
      {title}
    </button>
  );
};
export const SecondaryButton = ({
  title,
  w,
  handleAddToCart,
  product,
  stock,
}: any) => {
  return (
    <button
      disabled={!stock}
      onClick={() => handleAddToCart(product)}
      className={`rounded-[5px] py-[4px] md:py-[9px] px-[25px] text-[10px] md:text-[14px] relative cursor-pointer border-[1.5px] font-medium border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white duration-300 ease-in-out disabled:border-opacity-0 disabled:text-opacity-50 disabled:text-primary-600  disabled:bg-gray-100 disabled:cursor-not-allowed ${(w =
        "full" ? "w-full" : "")}`}
    >
      {stock ? `${title}` : "Sold out"}
    </button>
  );
};
