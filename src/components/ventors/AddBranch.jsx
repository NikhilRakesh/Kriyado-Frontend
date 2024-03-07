import React from 'react'
import PartnersRegistration from '../admin/PartnersRegistration'
import VendorBranchList from './VentorBranchList'
import VentorResgistration from './VentorResgistration'


const AddBranch = () => {
    return (
        <div className=' m-6 p-2 bg-gray-50 rounded-lg shadow-lg '>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold p-3 m-2'>Add Branch</h1>
            </div>

            <div className='border border-gray-50  md:flex justify-between'>
                <div className='m-2 p-3 border  border-gray-300 md:w-3/12  rounded-sm flex flex-col '>
                    <div >
                        <h1 className='font-bold'>Branch</h1>

                        <div className='flex gap-5' >
                            <div className="relative w-8/12 ">
                                <input
                                    type="text"
                                    className="border rounded-full text-xs pl-10 pr-4 py-2 w-full"
                                    placeholder="Search Branch"
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

                            <button className='bg-[#80509F] w-4/12 text-white text-sm rounded-full p-1'>Search </button>
                        </div>

                    </div>
                    <VendorBranchList />
                </div>

                <div className='md:w-9/12 border m-2 p-2  border-gray-300   rounded-sm'>

                    <div className=' '>
                        <div className='m-2 p-2'>
                            <h1 className='font-bold'>Add New</h1>
                        </div>

                    </div>
                    <div className=' '>
                        <VentorResgistration />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddBranch
