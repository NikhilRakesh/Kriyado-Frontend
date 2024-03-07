import React, { useState } from 'react'
import CoustomInput from '../admin/CoustomInput'
import Dropdown from '../admin/Dropdown'

const VendorAdd = () => {
    const [count] = useState([1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1])

    return (
        <div className='p-5 flex flex-col gap-6'>
            <div className='border border-gray-300 p-4 shadow-md rounded-lg'>
                <div>
                    <p className='font-bold text-sm'>Add New Ads</p>
                </div>
                <div className='md:flex gap-5'>
                    <div className='md:w-4/12'>
                        <CoustomInput headder='Choose Image' type='text' Placeholder='Choose Image' />
                    </div>
                    <div className='md:w-8/12'>
                        <CoustomInput headder='Ad Link' type='text' Placeholder='Enter Url' />
                    </div>
                </div>

                <div className='md:flex gap-5'>
                    <div className='md:w-4/12 mb-4 md:mb-0'>
                        <p className='text-xs text-gray-400'>Select District</p>
                        <Dropdown text='District' />
                    </div>
                    <div className='md:w-4/12 mb-4 md:mb-0'>
                        <p className='text-xs text-gray-400'>Select State</p>
                        <Dropdown text='State' />
                    </div>
                    <div className='md:w-4/12 mb-4 md:mb-0'>
                        <p className='text-xs text-gray-400'>Select Country</p>
                        <Dropdown text='Country' />
                    </div>
                </div>

                <div className='flex justify-center my-5'>
                    <button className='bg-[#80509F] px-5 rounded-md text-white py-1'>Submit</button>
                </div>
            </div>

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
                <div className='overflow-scroll h-[350px] customscrollbar'>
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
    )
}

export default VendorAdd
