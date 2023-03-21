import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import WishlistCard from './WishlistCard';
import emptyWishlist from '../../assets/icon/empty-wishlist.png'

const YourWishlist = () => {
  const [wishList,
    setWishList] = useState([])
  const fetchData = () => {
    axios
      .get("/wishlist.json")
      .then((response) => {
        setWishList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container mt-[80px] lg:mt-1">
        <h2 className=" text-2xl lg:text-[48px] font-semibold mt-[30px] md:mt-[40px] ">Your Wishlist</h2>
        <div className="mt-8">
          <div className="md:p-4 lg:shadow-custom bg-[#F9FAFB] lg:rounded-lg">
            {wishList.length > 0 && <div>
              <div className=" hidden lg:grid grid-cols-7 gap-4">
                <h2 className="col-span-3  font-semibold py-5 uppercase">Product</h2>
                <h2 className="font-semibold py-5 uppercase">Price</h2>
                <h2 className="font-semibold py-5 uppercase">Stock</h2>
                <h2 className="font-semibold py-5 uppercase">Actions</h2>
                <h2 className="font-semibold py-5 uppercase text-center">Remove</h2>
              </div>

              <div className='grid grid-cols-2 justify-items-center md:block gap-3'>
              {wishList.map((item) => <WishlistCard item={item} key={item._id}/>)
            }
              </div>
            </div>
}
            {wishList.length === 0 && <div>
              <div className="flex flex-col items-center gap-8 py-16 mt-[32px] ">
                <img className="w-[250px]" src={emptyWishlist} alt="" />
               <div className="text-center">
               <h2 className="text-xl text-gray-500 font-semibold mb-6">Your wishlist is empty!</h2>
                <Link className="border border-primary-600 text-primary-600 hover:text-white hover:bg-primary-600 text-xl px-4 py-1 rounded " to='/categories'>Add wishlist</Link>
               </div>
              </div>
            </div>
}
          </div>

        </div>
      </div>
    </>
  );
};

export default YourWishlist;