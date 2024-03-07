import React, { useState } from 'react'

const VendorProfileRight = () => {

    const [count] = useState([1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1])
    return (
        <div className='p-5 flex flex-col gap-4'>
            <div className='border border-gray-300 p-4 '>
                <div>
                    <p className='text-sm font-bold'>Registration Details</p>
                </div>

                <div className='md:flex gap-6 mt-2'>

                    <div className='md:w-6/12  '>

                        <div className='p-2'>
                            <p className='text-[10px]'>Name Of Organization</p>
                            <div className='flex justify-between'>
                                <p >Kriyado User</p>
                                <button className='bg-gray-200 rounded-full'><p className='text-[10px] px-3 p-1 '>Edit</p></button>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Phone</p>
                            <div className='flex justify-between'>
                                <p>+918891268078</p>
                                <button className='bg-gray-200 rounded-full'><p className='text-[10px] px-3 p-1 '>Edit</p></button>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>District</p>
                            <div className='flex justify-between'>
                                    <p className='truncate'>Thiruvanathapuram</p>
                                <button className='bg-gray-200 rounded-full'><p className='text-[10px] px-3 p-1 '>Edit</p></button>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>State</p>
                            <div className='flex justify-between'>
                                <p>Kerala</p>
                                <button className='bg-gray-200 rounded-full'><p className='text-[10px] px-3 p-1 '>Edit</p></button>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Address</p>
                            <div className='flex justify-between'>
                                <p>Kerala,India</p>
                                <button className='bg-gray-200 rounded-full'><p className='text-[10px] px-3 p-1 '>Edit</p></button>
                            </div>
                            <hr className='mt-2' />
                        </div>

                    </div>

                    <div className='md:w-6/12 '>

                        <div className='p-2'>
                            <p className='text-[10px]'>Date Of Birth</p>
                            <div className='flex justify-between'>
                                <p>December 23, 2000</p>
                                <button className='bg-gray-200 rounded-full'><p className='text-[10px] px-3 p-1 '>Edit</p></button>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Email</p>
                            <div className='flex justify-between'>
                                <p>Exmaple@gmail.com</p>
                                <button className='bg-gray-200 rounded-full'><p className='text-[10px] px-3 p-1 '>Edit</p></button>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Pin Code</p>
                            <div className='flex justify-between'>
                                <p>691019</p>
                                <button className='bg-gray-200 rounded-full'><p className='text-[10px] px-3 p-1 '>Edit</p></button>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Country</p>
                            <div className='flex justify-between'>
                                <p>India</p>
                                <button className='bg-gray-200 rounded-full'><p className='text-[10px] px-3 p-1 '>Edit</p></button>
                            </div>
                            <hr className='mt-2' />
                        </div>


                    </div>
                </div>
            </div>
            <div className='border hidden md:block  border-gray-300 p-4'>

                <div>
                    <p className='text-sm font-bold'>Branch Details</p>
                </div>

                <div className=' mt-3'>
                    <div className='flex w-full'>
                        <div className='w-3/12'><p className='font-medium text-sm borde'>Location</p></div>
                        <div className='w-3/12'><p className='font-medium text-sm '>Store Manager</p></div>
                        <div className='w-3/12'><p className='font-medium text-sm '>Contact Number</p></div>
                        <div className='w-3/12'><p className='font-medium text-sm text-center'>Action</p></div>
                    </div>
                    <hr className='my-2' />
                    <div className='overflow-scroll h-[350px] customscrollbar'>
                        {
                            count.map((c, index) => (
                                <div key={index}>
                                    <div className='flex w-full py-2'>

                                        <div className='w-3/12'><p className=' text-sm borde'>Thiruvanathapuram</p></div>
                                        <div className='w-3/12'><p className='text-sm'>Nikihil Rakesh</p></div>
                                        <div className='w-3/12'><p className='text-sm'>+918891268078</p></div>
                                        <div className='w-3/12 flex justify-center'>
                                            <div className='flex justify-between  border border-gray-300   rounded-md bg-gray-100'>
                                                <div className=' border-gray-300 p-1 px-4 border-r'>
                                                    <img src="/edit.png" alt="" className='w-5 ' />
                                                </div>
                                                <div className='p-1 px-4 '>
                                                    <img src="/delete (3).png" alt="" className='w-5 ' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VendorProfileRight
