import React, { useState } from 'react'
import CoustomInput from './CoustomInput'
import Dropdown from './Dropdown'

const AdminAds = () => {
    const [count] = useState([1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1])

    return (
        <div className='m-6 p-2 bg-gray-50 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold p-3'>Add Ads</h1>
                <div className="relative m-3">
                    <input
                        type="text"
                        className="border rounded-full pl-10 pr-4 py-2 w-full"
                        placeholder="Search package"
                    />
                    <svg
                        className="absolute left-3 top-2 h-5 w-5 text-gray-500 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.5 17.5l2.5 2.5"
                        />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='m-2 p-3 border  border-gray-300 w-3/12  rounded-sm '>
                    <div>
                        <h1 className='font-bold'>Add New</h1>
                        <div className='m-2'>
                            <CoustomInput headder='Choose Image' type='text' Placeholder='Choose Image' />
                        </div>
                        <div className='m-2'>
                            <CoustomInput headder='Ad Link' type='text' Placeholder='Enter Url' />
                        </div>
                        <div className='flex flex-col gap-2 m-2 pb-4'>
                            <p className='text-xs text-gray-400'>Select District</p>
                            <Dropdown text='District' />
                        </div>
                        <div className='flex flex-col gap-2 m-2 pb-4'>
                            <p className='text-xs text-gray-400'>Select State</p>
                            <Dropdown text='State' />
                        </div>
                        <div className='flex flex-col gap-2 m-2'>
                            <p className='text-xs text-gray-400'>Select Country</p>
                            <Dropdown text='Country' />
                        </div>
                    </div>
                    <div className='flex justify-center my-5 '>
                        <button className='bg-[#80509F] px-8 rounded-md text-white py-1'>Post</button>
                    </div>
                </div>
                <div className='w-9/12 border m-2 p-2  border-gray-300   rounded-sm'>
                    <div className='border border-gray-300  shadow-md rounded-lg'>
                        <div className='hidden md:block'>
                            <div className='p-4 flex  '>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>Ad Image</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>Link</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>District</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>State</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>Country</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>Action</p></div>
                            </div>
                        </div>
                        <div className='md:hidden'>
                            <p className='font-medium text-sm text-center'>Ad Images</p>
                        </div>
                        <hr />
                        <div className='overflow-scroll h-[550px] customscrollbar'>
                            {count.map((c, index) => (
                                <div className='p-4 md:flex'>
                                    <div className='w-2/12'><img className='w-10  ' src="/WhatsApp Image 2024-02-05 at 17.25.25_63afbb9d.jpg" alt="" /></div>
                                    <div className='w-2/12 flex items-center'> <p className='text-xs  '>http://link.com/ads</p></div>
                                    <div className='w-2/12 flex items-center'> <p className='text-xs  '>Trivandrum</p></div>
                                    <div className='w-2/12 flex items-center'> <p className='text-xs  '>Kerala</p></div>
                                    <div className='w-2/12 flex items-center'> <p className='text-xs  '>India</p></div>
                                    <div className='flex justify-between  border border-gray-300  rounded-md bg-gray-100'>
                                        <div className=' border-gray-300 p-1 px-4 border-r'>
                                            <img src="/edit.png" alt="" className='w-5 ' />
                                        </div>
                                        <div className='p-1 px-4 '>
                                            <img src="/delete (3).png" alt="" className='w-5 ' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAds
