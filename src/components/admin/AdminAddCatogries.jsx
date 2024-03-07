import React from 'react'
import Dropdown from './Dropdown'
import AdminCatogryList from './AdminCatogryList'

const AdminAddCatogries = () => {
    return (
        <div className=' m-6 p-2 bg-gray-50 rounded-lg shadow-lg '>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold p-3'>Add Categories</h1>
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
                <div className='m-2 p-3 border  border-gray-300 w-3/12  rounded-sm flex flex-col justify-between '>
                    <div>
                        <h1 className='font-bold'>Add New</h1>
                        <div className='m-3'>
                            <p className='text-sm text-gray-400 p-1 '>Categories</p>
                            <input type="text" className='border text-sm border-gray-300 pl-5 pr-4 py-1 w-full rounded-sm bg-gray-100' placeholder="Enter name" />
                        </div>
                        <div className='m-3'>
                            <p className='text-sm text-gray-400 p-1 '>Type</p>
                            <input type="text" className='border text-sm border-gray-300 pl-5 pr-4 py-1 w-full rounded-sm bg-gray-100' placeholder="Enter Amount" />
                        </div>
                        <div className='m-3'>
                            <p className='text-sm text-gray-400 p-1 '>Choose Type</p>
                            <Dropdown text="Choose Type" />
                        </div>
                    </div>
                    <div className='m-4 p-2 flex justify-center items-center bg-[#80509F] text-white rounded-lg'>
                        <button >Add Packages</button>
                    </div>

                </div>
                <div className='w-9/12 border m-2 p-2  border-gray-300   rounded-sm'>

                    <div className=' '>

                    </div>
                    <div className=' '>
                        <AdminCatogryList />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminAddCatogries
