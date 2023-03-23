import React from 'react';
import ReactStars from 'react-stars';
import {AiOutlineDelete} from 'react-icons/ai';
const WishlistCard = ({item}) => {
  const {main_img_url, nickname, rating, price, stock} = item
  return (
    <div >
      <div
        className="max-w-[280px] md:max-w-full flex flex-col md:flex md:flex-row md:justify-between lg:grid lg:grid-cols-7 gap-2 lg:gap-4 md:mt-3 items-center border rounded-[10px] md:border-b md:pb-2 relative md:static ">

        <div
          className='lg:col-span-3 flex flex-col md:flex md:flex-row items-center gap-[20px]'>
          <div className=" w-full md:w-[80px] md:h-[80px] bg-gray-50  rounded-[10px]">
            <img
              src={main_img_url}
              className="w-full h-full object-center object-fill"
              alt="product-img"/>
          </div>
          <div className='flex flex-col w-full px-2'>
            <span>{nickname}</span>
            <div className='flex justify-between w-full'>
              <p className="block md:hidden text-primary-600  font-semibold">${price}.00</p>
              <ReactStars count={5} size={20} value={rating} edit={false}></ReactStars>
            </div>
          </div>

        </div>

        <p className="hidden md:block text-primary-600  font-semibold">${item
            ?.price}.00</p>

        <div className='w-full md:w-fit flex justify-between md:block px-2 pb-2'>
          <div className='absolute md:static lef-8 top-3'>
            {stock && <span className='bg-primary-100 px-[10px] py-[5px] rounded-lg text-[12px]'>In Stock</span>
}
            {!stock && <span className='bg-gray-100 px-[10px] py-[5px] rounded-lg text-[12px]'>Out of Stock</span>
}
          </div>
          <button
            className='block md:hidden text-white bg-primary-600 hover:bg-secondary-400 duration-300 disabled:hover:bg-primary-600 font-semibold px-[10px] py-[5px] rounded text-sm w-full md:w-0 disabled:opacity-50'
            disabled={!stock}>
            <span className='block md:hidden w-full'>Add to cart</span>
          </button>
        </div>

        <button
          className='hidden md:block text-white bg-primary-600 hover:bg-secondary-400 duration-300 disabled:hover:bg-primary-600 font-semibold px-[10px] py-[5px] rounded max-w-[120px] text-sm disabled:opacity-50'
          disabled={!stock}>Add to cart</button>

          <button className='flex justify-center absolute md:static right-0 top-0 py-[12px] px-[8px]'><AiOutlineDelete className=' text-gray-500 hover:text-secondary-600 duration-300 text-xl'/></button>
      </div>
    </div>
  );
};

export default WishlistCard;