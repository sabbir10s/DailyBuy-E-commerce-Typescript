import React from 'react';
import {BsThreeDots} from 'react-icons/bs';

const MyOrders = () => {
    return (
        <div className='container mt-[25px] flex justify-center'>
            <div className='border rounded-[10px] w-full lg:w-1/2'>
                <div className='flex items-center justify-between px-[14px] md:px-[28px] py-[10px] border-b'>
                    <div>
                        <h2 className=' font-semibold'>#AZ776447194US</h2>
                        <div className=' text-gray-500 flex items-center gap-2'>
                            <p>Send</p>
                            <p>19 November, 2022</p>
                        </div>
                    </div>
                    <BsThreeDots/>
                </div>
                <div className='px-[10px] lg:px-[70px] py-[25px]'>
                    <div className='flex items-center'>
                        <div className='bg-primary-600 h-[3px] w-full relative'>
                        <div className='bg-primary-600 h-[12px] w-[12px] rounded-full absolute bottom-[-4px] left-0'></div>
                        </div>
                        <div className='bg-primary-600 h-[3px] w-full relative'>
                        <div className='bg-primary-600 h-[12px] w-[12px] rounded-full absolute bottom-[-4px] left-0'></div>
                        </div>
                        <div className='bg-gray-200 h-[3px] w-full relative'>
                        <div className='bg-primary-600 h-[12px] w-[12px] rounded-full absolute bottom-[-4px] left-0'></div>
                        <div className='bg-gray-200 h-[12px] w-[12px] rounded-full absolute bottom-[-4px] right-0'></div>
                        </div>
                    </div>
                    <div className='mt-[22px] flex items-center justify-between'>
                        <div>
                            <p className='text-sm text-gray-400 text-[12px]'>From</p>
                            <h3 className=' font-semibold mt-[2px] text-[14px]'>Dhaka, Bangladesh</h3>
                        </div>
                        <div>
                            <p className='text-sm text-gray-400 text-[12px]'>Destination</p>
                            <h3 className=' font-semibold mt-[2px] text-[14px]'>Comilla, Bangladesh</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;