export const PrimaryButton = ({ title }) => {
  return (
    <button className="px-[25px] py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium text-white bg-primary-600 hover:bg-primary-500 transition duration-300 ease-out">
     {title}
    </button>
  );
};
export const FullWidthButton = ({ title }) => {
  return (
    <button className="w-full py-[10px] rounded-[5px] text-[10px] md:text-[12px] lg:text-[18px] capitalize font-medium text-white bg-primary-600 hover:bg-primary-500 transition duration-300 ease-out">
     {title}
    </button>
  );
};
export const SecondaryButton = ({ title, w, handleAddToCart, product }) => {
  return (
    <button
      onClick={() => handleAddToCart(product)}
      className={`rounded-[5px] py-[4px] md:py-[9px] text-[10px] md:text-[14px] relative cursor-pointer border-[1.5px] font-medium border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white duration-300 ease-in-out ${(w =
        "full" ? "w-full" : "")}`}
    >
      {title}
    </button>
  );
};
