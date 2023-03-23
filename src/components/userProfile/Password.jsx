import React from 'react';

const Password = () => {
    return (
        <div className='container mt-[25px] flex justify-center'>
            <form className='border rounded-[10px] p-[15px] md:px-[90px] md:py-[40px] w-full lg:w-1/2'>
                <input  className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full" type="password" name="oldPassword" id="oldPassword" placeholder='Old password' />
                <input  className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full mt-[15px]" type="password" name="password" id="password" placeholder='Password' />
                <input  className="border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[8px] py-[16px] px-[14px] w-full mt-[15px]" type="password" name="password" id="password" placeholder='Confirm password' />
                <button className='w-full bg-primary-600 hover:bg-primary-500 duration-300 rounded-[5px] py-[16px] text-white mt-[15px]'>Change Password</button>
            </form>
        </div>
    );
};

export default Password;<p>Password</p>