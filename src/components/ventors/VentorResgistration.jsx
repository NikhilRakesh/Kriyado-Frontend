import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';

const VentorResgistration = () => {


    const location = useLocation()


    return (
        <div className='w-full rounded-md p-1 px-4 my-3 '>
            <div className='flex justify-between'>
                <div
                    id="div2"
                    className={`md:w-2/12 p-3 flex items-center border-b-2 cursor-pointer ${location.pathname === '/vendors/add-Branch' ? 'border-[#80509F] ' : ''}`}
                >
                    <p className='font-bold text-xs text-gray-500 font-poppins'>Branch Details</p>
                </div>
            </div>
            <hr className="border-0 border-t border-gray-300 h-0.5 "></hr>
            <Outlet />
        </div>
    )
}

export default VentorResgistration
