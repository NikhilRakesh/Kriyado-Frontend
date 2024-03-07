import React from 'react'
import Dropdown from './Dropdown'
import AdminPackageList from './AdminPackageList'

const AdminAddPackage = () => {
    return (
        <div className=' m-6 p-2 bg-gray-50 rounded-lg shadow-lg '>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold p-3'>Add Package</h1>
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

            <div className='border border-gray-50  flex justify-between'>
                <div className='m-2 p-3 border  border-gray-300 w-3/12  rounded-sm flex flex-col justify-between'>
                    <div>
                        <h1 className='font-bold'>Add New</h1>
                        <div className='m-3'>
                            <p className='text-sm text-gray-400 p-1 '>Package</p>
                            <input type="text" className='border text-sm border-gray-300 pl-5 pr-4 py-1 w-full rounded-sm bg-gray-100' placeholder="Enter name" />
                        </div>
                        <div className='m-3'>
                            <p className='text-sm text-gray-400 p-1 '>Price</p>
                            <input type="text" className='border text-sm border-gray-300 pl-5 pr-4 py-1 w-full rounded-sm bg-gray-100' placeholder="Enter Amount" />
                        </div>
                        <div className='m-3'>
                            <p className='text-sm text-gray-400 p-1 '>Duration in days</p>
                            <input type="text" className='border text-sm border-gray-300 pl-5 pr-4 py-1 w-full rounded-sm bg-gray-100' placeholder="Enter Days" />
                        </div>
                        <div className='m-3'>
                            <p className='text-sm text-gray-400 p-1 '>Add categories</p>
                            <Dropdown text="Choose Category" />
                        </div>
                    </div>
                    <div className='m-4 p-2 flex justify-center items-center bg-[#80509F] text-white rounded-lg'>
                        <button >Add Packages</button>
                    </div>
                </div>
                <div className='w-9/12 border m-2 p-2  border-gray-300   rounded-sm'>

                    <div className=' '>
                        <div className='w-full border border-gray-300 flex items-center justify-between rounded-md'>

                            <div className='p-2 flex items-center border-r-2    justify-center w-3/12'>
                                <img src="/filter.png" alt="" className='w-4 h-4 ' />
                                <p className='text-sm font-sans p-0 m-0 font-bold'>Filter By</p>
                            </div>

                            <div className='p-2 flex items-center border-r-2  justify-center w-3/12'>
                                <p className='text-sm font-sans p-0 m-0 font-bold'>14-Feb-2024</p>
                                <img src="  /down-arrow (1).png" alt="" className='w-4 h-4' />
                            </div>

                            <div className='p-2 flex items-center border-r-2  justify-center w-3/12'>
                                <p className='text-sm font-sans p-0 m-0 font-bold'>Package</p>
                                <img src="  /down-arrow (1).png" alt="" className='w-4 h-4' />
                            </div>

                            <div className='flex items-center justify-center w-3/12 '>
                                <p className='text-sm font-sans text-gray-400 p-0 m-0 font-bold'>Order Status</p>
                                <img src="  /down-arrow (1).png" alt="" className='w-4 h-4' />
                            </div>

                            <div className='flex items-center justify-center w-3/12 '>
                                <img src="/undo (1).png" alt="" className='w-4 h-4' />
                                <p className='text-sm text-red-500 font-sans p-0 m-0 font-bold'>Reset Filter</p>

                            </div>
                        </div>

                    </div>
                    <div className=' '>
                        <AdminPackageList />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminAddPackage
