import React, {useState} from 'react';
import {FiEdit} from 'react-icons/fi';
const MyAccount = () => {
    const [active,
        setActive] = useState(false)
    const data = {
        firstName: "sabbir",
        lastName: "ahmed",
        email: "sabbirahmed@gmail.com",
        mobile: "0186******",
        address: "Kashimpur, Faridpur, Dhaka, Bangladesh",
        country: "Bangladesh",
        state: "Dhaka",
        city: "Faridpur"
    }
    const {
        firstName,
        lastName,
        email,
        mobile,
        address,
        country,
        state,
        city
    } = data
    return (
        <div className='container'>
            <div className='border rounded-[10px] mt-[26px]'>
                <div className='px-5 pt-5 pb-3 flex items-center justify-between border-b'>
                    <p className='font-semibold text-sm lg:text-lg'>Account Information </p>
                    {!active && <button
                        onClick={() => setActive(true)}
                        className='flex items-center gap-1 text-[#999999]'><FiEdit/>
                        <span>Edit</span>
                    </button>
}
                    {active && <div className='flex gap-2 md:gap-5'>
                        <button
                            onClick={() => setActive(false)}
                            className=' text-sm md:text-lg py-[5px] px-3 md:px-6 border rounded-[5px] text-gray-500 hover:bg-gray-50 duration-300'>Cancel</button>
                        <button
                            onClick={() => setActive(false)}
                            className=' text-sm md:text-lg py-[5px] px-3 md:px-6 rounded-[5px] bg-primary-600 hover:bg-primary-500 duration-300 text-white'>Save</button>
                    </div>
}
                </div>
                <form className='p-5 w-full lg:w-3/4'>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[90px]'>
                        <div>
                            <label className='block text-gray-400' htmlFor="firstName">First Name</label>
                            {!active && <p className='font-semibold mt-[5px] capitalize'>{firstName}</p>
}
                            {active && <input
                                className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                                type="text"
                                id='firstName'
                                autofocus="autofocus"
                                value={firstName}/>
}
                        </div>
                        <div>
                            <label className='block text-gray-400' htmlFor="lastName">Last Name</label>
                            {!active && <p className='font-semibold mt-[5px] capitalize'>{lastName}</p>
}
                            {active && <input
                                className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                                type="text"
                                id='lastName'
                                value={lastName}/>
}
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[90px] mt-[24px]'>
                        <div>
                            <label className='block text-gray-400' htmlFor="emailAddress">Email Address</label>
                            {!active && <p className='font-semibold mt-[5px] capitalize'>{email}</p>
}
                            {active && <input
                                className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                                type="email"
                                id='emailAddress'
                                autofocus="autofocus"
                                value={email}/>
}
                        </div>
                        <div>
                            <label className='block text-gray-400' htmlFor="mobile">Mobile Number</label>
                            {!active && <p className='font-semibold mt-[5px] capitalize'>{mobile}</p>
}
                            {active && <input
                                className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                                type="text"
                                id='mobile'
                                value={mobile}/>
}
                        </div>

                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[90px] mt-[24px]'>
                        <div>
                            <label className='block text-gray-400' htmlFor="address">Address Line</label>
                            {!active && <p className='font-semibold mt-[5px] capitalize'>{address}</p>
}
                            {active && <input
                                className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                                type="text"
                                id='address'
                                value={address}/>
}
                        </div>
                        <div>
                            <label className='block text-gray-400' htmlFor="country">Country</label>
                            {!active && <p className='font-semibold mt-[5px] capitalize'>{country}</p>
}
                            {active && <input
                                className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                                type="text"
                                id='country'
                                value={country}/>
}
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[25px] lg:gap-[90px] mt-[24px]'>
                        <div>
                            <label className='block text-gray-400' htmlFor="state">Select at district, state of province</label>
                            {!active && <p className='font-semibold mt-[5px] capitalize'>{state}</p>
}
                            {active && <input
                                className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                                type="text"
                                id='state'
                                value={state}/>
}
                        </div>
                        <div>
                            <label className='block text-gray-400' htmlFor="city">City/Area</label>
                            {!active && <p className='font-semibold mt-[5px] capitalize'>{city}</p>
}
                            {active && <input
                                className="mt-[5px] capitalize border-[1px] border-[#919EAB]/30 focus:outline-primary-600 rounded-[5px] py-[10px] px-[14px] w-full"
                                type="text"
                                id='city'
                                value={city}/>
}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyAccount;