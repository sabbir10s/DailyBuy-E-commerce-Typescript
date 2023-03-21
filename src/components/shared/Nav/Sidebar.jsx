import React, {useState} from 'react';
import ActiveLink from '../../../hooks/ActiveLink';
import { RiHeartLine, RiUser3Line} from 'react-icons/ri';
import Modal from '../Modal';
import {Link} from 'react-router-dom';

const Sidebar = ({visible, handleCloseSidebar}) => {
    const [showModal,
        setShowModal] = useState(false);
    const handleOnClose = () => {
        setShowModal(false);
    };
    const handleCloseModal = (e)=>{
            if(e.target.id === 'container') handleCloseSidebar()
    }

    if (!visible) {
        return null
    }
   
    
    return (
        <div
            id='container'
            onClick={handleCloseModal}
            className='lg:hidden z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-start'>
            <div className='relative w-2/4'>
                <div className='bg-white w-full h-screen p-[12px] md:p-6'>
                    <div className=' w-full flex justify-between'>
                        <div className='flex items-center gap-6 md:gap-8'>
                            <button className="" onClick={() => setShowModal(true)}>
                                <RiUser3Line className="text-[20px] hover:text-black duration-300"/>
                            </button>{" "}
                            <Link onClick={handleCloseSidebar} className="" to='/wishlist'>
                                <button className="relative flex items-center" type="button">
                                    <RiHeartLine className="text-[20px] hover:text-black duration-300"/>
                                    <span
                                        className="absolute top-[-10px] left-[18px] text-[14px] font-semibold text-secondary-600">
                                        {0}
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <button
                            className='bg-secondary-500 text-white w-6 md:w-8 h-6 md:h-8 rounded-full text-sm'
                            onClick={handleCloseSidebar}>X</button>
                    </div>
                    <ul className="flex flex-col items-start gap-6 pt-6 text-black text-sm lg:text-base">
                        <li onClick={handleCloseSidebar} className="txtHover active font-medium">
                            <ActiveLink to="/">Home</ActiveLink>
                        </li>
                        <li onClick={handleCloseSidebar} className="txtHover font-medium">
                            {" "}
                            <ActiveLink to="/blog">Blog</ActiveLink>
                        </li>
                        <li onClick={handleCloseSidebar} className="txtHover font-medium">
                            {" "}
                            <ActiveLink to="/about">About us</ActiveLink>
                        </li>
                        <li onClick={handleCloseSidebar} className="txtHover font-medium">
                            {" "}
                            <ActiveLink to="/contact">Contact us</ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
            <Modal onClose={handleOnClose} visible={showModal}/>
        </div>
    );
};

export default Sidebar;