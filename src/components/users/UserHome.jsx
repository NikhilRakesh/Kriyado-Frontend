import React from 'react'
import UserHeadder from './UserHeadder'
import UserProfile from './UserProfile'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const UserHome = () => {

    return (
        <div>
            <UserHeadder />
            <div className=' m-6 p-2 md:flex justify-between items-center md:mt-20  '>
                <div>
                    <h1 className='text-black font-bold text-2xl'>Welcome,</h1>
                    <h1 className='text-black font-bold text-3xl'>Kriyado User</h1>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default UserHome
