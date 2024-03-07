import React, { useState } from 'react';
import AdminHeadNavItem from './AdminHeadNavItem';
import logo from '/Kriyado Black Logo.png'
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-white shadow-lg m-6 rounded-lg'>
            <div className='container mx-auto px-4 py-2 md:flex md:justify-between md:items-center'>
                <div className='flex justify-between items-center'>
                    <Link to="/admin-home">
                        <img src={logo} alt="" className="w-32" />
                    </Link>
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
                        <AdminHeadNavItem icon='/dashboard1.png' text='DashBoard' to="/admin-home" />
                        <AdminHeadNavItem icon='/gift.png' text='Packages' to="/admin-home/add-package" />
                        <AdminHeadNavItem icon='/more (1).png' text='Categories' to="/admin-home/add-Catogries" />
                        <AdminHeadNavItem icon='/add-user.png' text='Customers' to="/admin-home/add-Customers" />
                        <AdminHeadNavItem icon='/shopping-bag.png' text='Partner' to="/admin-home/add-Parnter" />
                        <AdminHeadNavItem icon='/bar-chart.png' text='Ads' to="/admin-home/add-Ads" />
                        <AdminHeadNavItem icon='/bell (1).png' text='Notifications' to="/admin-home/Notification" />
                    </div>
                    <div className='flex items-center ml-4 mt-4 md:mt-0'>
                        <img src="/man.png" alt="profile" className='w-4' />
                        <div className='ml-2'>
                            <p className='text-xs'>Welcome Back</p>
                            <p>Kriyado Admin</p>
                        </div>
                        <img src="/down-arrow (1).png" alt="down-arrow" className='w-4 ml-2' />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AdminHeader;
