const Quantity = ({ handleDecreaseCart, handleIncreaseCart, item }) => {
  return (
    <>
      <div className="flex items-center space-x-4 ">
        <label htmlFor="Quantity" className="hidden lg:block">
          {" "}
          Quantity:
        </label>

        <div className="flex items-center lg:border border-gray-50 p-1 rounded-lg">
          <button
            onClick={() => handleDecreaseCart(item)}
            type="button"
            className="w-6 lg:w-10 h-6 lg:h-10 flex items-center justify-center border-[1px] lg:border-0 border-primary-600 text-xl bg-gray-50 rounded-full text-primary-600 lg:text-gray-600 transition hover:opacity-75"
          >
            &minus;
          </button>

          <span className="px-6 font-semibold">{0}</span>

          <button
            onClick={() => handleIncreaseCart(item)}
            type="button"
            className="w-6 lg:w-10 h-6 lg:h-10 flex items-center justify-center border-[1px] lg:border-0 border-primary-600 text-xl bg-gray-50 rounded-full text-primary-600 lg:text-gray-600 transition hover:opacity-75"
          >
            &#43;
          </button>
        </div>
      </div>
    </>
  );
};

export default Quantity;
