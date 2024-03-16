import React from 'react'
import ParnteRegesterPage from './ParnteRegesterPage';
import { Link, Outlet, useLocation } from 'react-router-dom';

const PartnersRegistration = () => {


    const location = useLocation()


    return (
        <div className='w-full rounded-md p-1 px-4 my-3 '>
            <div className='flex justify-between'>
                <div
                    id="div1"
                    className={`w-2/12 p-3 flex items-center border-b-2 cursor-pointer ${location.pathname === '/admin-home/add-Parnter' ? 'border-[#80509F] ' : ''}`}
                >
                    <Link to='' >
                        <p className='font-bold text-xs text-gray-500  font-poppins'>Registration</p>
                    </Link>
                </div>
                <div
                    id="div2"
                    className={`w-2/12 p-3 flex items-center border-b-2 cursor-pointer ${location.pathname === '/admin-home/add-Parnter/branch-details/:id' ? 'border-[#80509F] ' : ''}`}
                >
                    <Link to='branch-details/:id' >
                        <p className='font-bold text-xs text-gray-500 font-poppins'>Branch Details</p>
                    </Link>
                </div>
                <div
                    id="div3"
                    className={`w-2/12 p-3 flex items-center border-b-2 cursor-pointer ${location.pathname === '/admin-home/add-Parnter/Discount-Entry' ? 'border-[#80509F] ' : ''}`}
                >
                    <Link to='Discount-Entry' >
                        <p className='font-bold text-xs text-gray-500 font-poppins'>Discount Entry</p>
                    </Link>
                </div>
                <div
                    id="div4"
                    className={`w-3/12 p-3 flex items-center border-b-2 cursor-pointer ${location.pathname === '/admin-home/add-Parnter/Declaration-Confirmation' ? 'border-[#80509F] ' : ''}`}
                >
                    <Link to='Declaration-Confirmation'>
                        <p className='font-bold text-xs text-gray-500  font-poppins'>Declaration Confirmation</p>
                    </Link>
                </div>
                <div
                    id="div5"
                    className={`w-3/12 p-3 flex items-center border-b-2 cursor-pointer ${location.pathname === '/admin-home/add-Parnter/Vendor-Submission' ? 'border-[#80509F] ' : ''}`}
                >
                    <Link to='Vendor-Submission'>
                        <p className='font-bold text-xs text-gray-500  font-poppins'>Vendor Submission</p>
                    </Link>
                </div>
            </div>
            <hr className="border-0 border-t border-gray-300 h-0.5 "></hr>
            <Outlet />
        </div>
    )
}

export default PartnersRegistration
