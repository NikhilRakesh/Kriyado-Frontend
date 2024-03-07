import React, { useState } from 'react'
import UserHeadderNav from './UserHeadderNav';
import { useSelector } from 'react-redux';

const UserHeadder = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useSelector(state => state.auth.user);

    return (
        <div className='bg-white shadow-lg m-6 rounded-lg'>
            <div className='container mx-auto px-4 py-2 md:flex md:justify-between md:items-center'>
                <div className='flex justify-between items-center'>
                    <img src="Kriyado Black Logo.png" alt="" className="w-32" />
                    <button
                        className='md:hidden focus:outline-none'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                    <div className='flex flex-col md:flex-row md:space-x-4 items-center mt-4 md:mt-0'>
                        <UserHeadderNav icon='/home.png' text='Home' to='/'/>
                        <UserHeadderNav icon='/heart (1).png' text='Partner' to='/Partners' />
                        <UserHeadderNav icon='/bell (1).png' text='Notifications' />
                    </div>
                    <div className='flex items-center ml-4 mt-4 md:mt-0'>
                        <img src="/man.png" alt="profile" className='w-4' />
                        <div className='ml-2'>
                            <p className='text-xs'>Welcome Back</p>
                            <p>{user&&user?.name}</p>
                        </div>
                        <img src="/down-arrow (1).png" alt="down-arrow" className='w-4 ml-2' />
                    </div>
                </div>
            </div>
        </div>
    ); F
}

export default UserHeadder
