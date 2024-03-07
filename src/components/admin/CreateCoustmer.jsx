import React, { useEffect, useState } from 'react'
import './Admin.css'
import Dropdown from './Dropdown'
const CreateCoustmer = () => {


    return (
        <div className='w-full rounded-md p-1 px-4 my-3 '>
            <form action="" className='flex gap-10'>
                <div className='w-6/12'>
                    <div>
                        <p className='text-xs text-gray-400'>Full Name</p>
                        <div className='py-2'>
                            <input type="text" className='border text-sm border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter name" />
                        </div>
                    </div>
                    <div>
                        <p className='text-xs text-gray-400'>Package Type</p>
                        <div className='py-2'>
                            <Dropdown text="Choose Package" p="3" textcolor="text-gray-400" font="font-thin" />
                        </div>
                    </div>
                    <div>
                        <p className='text-xs text-gray-400'>Pin Code</p>
                        <div className='py-2'>
                            <input type="text" className='border text-sm border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter Pincode" />
                        </div>
                    </div>
                    <div>
                        <p className='text-xs text-gray-400'>District</p>
                        <div className='py-2'>
                            <Dropdown text="Choose District" p="3" textcolor="text-gray-400" />
                        </div>
                    </div>
                </div>


                <div className='w-6/12'>
                    <div>
                        <p className='text-xs text-gray-400'>Date of Birth</p>
                        <div className='py-2'>
                            <input type="date" className='border text-sm text-gray-400  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter name" />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div >
                            <p className='text-xs text-gray-400'>Purchase Date</p>
                            <div className='py-2'>
                                <input type="text" className='border text-sm border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter name" />
                            </div>
                        </div>
                        <div>
                            <p className='text-xs text-gray-400'>Expiry Date</p>
                            <div className='py-2'>
                                <input type="text" className='border text-sm border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter name" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-xs text-gray-400'>Address</p>
                        <div className='py-2'>
                            <input type="text" className='border text-sm border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter Address" />
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <div className='w-full'>
                            <p className='text-xs text-gray-400'>State</p>
                            <div className='py-2'>
                                <Dropdown text="Choose State" p="3" textcolor="text-gray-400" />
                            </div>
                        </div>
                        <div className='w-full'>
                            <p className='text-xs text-gray-400'>Country</p>
                            <div className='py-2 '>
                                <Dropdown text="Choose Country" p="3" textcolor="text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between pt-8'>
                        <button className='text-white bg-[#80509F] w-5/12 p-1 rounded-lg'>Save</button>
                        <button className='text-white bg-red-500 w-5/12 p-1 rounded-lg'>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateCoustmer
