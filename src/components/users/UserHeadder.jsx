import React, { useEffect, useState } from 'react'
import UserHeadderNav from './UserHeadderNav';
import { useSelector } from 'react-redux';
import UserProfileModal from './UserProfileModal';
import { get_api } from '../../utils/api';
import { getErrorMessage } from '../../utils/Validation';
import toast, { Toaster } from 'react-hot-toast';

const UserHeadder = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setisProfileOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [userProfileData, setuserProfileData] = useState('');

    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        fetchProfileData()
    }, [isProfileOpen])

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const profileClose = () => {
        setisProfileOpen(false)
        setIsOpen(false);
    }
    const OpenProfile = () => {
        setIsMenuOpen(false);
        setisProfileOpen(true)
    }
    const fetchProfileData = async () => {
        try {
            const response = await get_api(user?.token).get('/shop/customer/quick_profile/user/');
            if (response.status === 200) {
                setuserProfileData(response.data)
            }
        } catch (error) {
            console.error('Fetching data failed:', error);
            const errorMessages = getErrorMessage(error)
            const generalErrors = errorMessages.filter((error) => error.field === 'general' || error.field === error.field || error.field === 'name');
            if (generalErrors.length >= 0) {
                const newErrors = generalErrors.map(error => error.message);
                newErrors.forEach(error => toast.error(error));
                return newErrors;
            }
            else if (error.message) {
                toast.error(`${error.message || 'Somthing went wrong'}`)
            }
        }
    }


    return (
        <div className='bg-white shadow-lg m-6 rounded-lg'>
            <div className='container mx-auto px-4 py-2 md:flex md:justify-between md:items-center'>
                <div className='flex justify-between items-center'>
                    <img src="/Kriyado Black Logo.png" alt="" className="w-32" />
                    <button
                        className='md:hidden focus:outline-none'
                        onClick={handleMenuToggle}
                    >
                        <svg
                            className='h-6 w-6 text-gray-500'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                </div>
                <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col md:flex-row md:space-x-4 items-center mt-4 md:mt-0' onClick={handleMenuToggle} >
                        <UserHeadderNav icon='/home.png' text='Home' to='/' />
                        <UserHeadderNav icon='/heart (1).png' text='Partner' to='/Partners' />
                        <UserHeadderNav icon='/bell (1).png' text='Notifications' to='/Users-Notification' />
                        <UserHeadderNav icon='/price-list.png' text='Pricing' to='Pricing' />
                    </div>
                    <div className="flex items-center ml-4 mt-4 md:mt-0 relative">
                        <img src="/man.png" alt="profile" className="w-4" />
                        <div className="ml-2">
                            <p className="text-xs">Welcome Back</p>
                            <p>{user && user?.name}</p>
                        </div>
                        <button onClick={toggleDropdown} className="ml-2 focus:outline-none">
                            <img src="/down-arrow (1).png" alt="down-arrow" className="w-4" />
                        </button>
                        {isOpen && (
                            <div className="absolute border top-full left-0 mt-1 bg-white shadow-md rounded-md w-36">
                                <ul>
                                    <li>
                                        <a href="#" onClick={OpenProfile} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isProfileOpen && <UserProfileModal data={userProfileData} close={profileClose} />}
            <Toaster />
        </div>
    );
}

export default UserHeadder
