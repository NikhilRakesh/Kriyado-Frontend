import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const VendorBranchList = () => {
    const [count, useCount] = useState([1, 2, 1, 1, 1, 1, 1, 1, 1, 11, 1])
    return (
        <div className='overflow-x-scroll h-[550px] customscrollbar'>
            {count.map((c, index) => (
                <div className='bg-white border border-gray-300 rounded-md mt-3 p-3' key={index}>
                    <p className='font-bold text-sm font-sans'>Branch Name</p>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex gap-3 '>
                            <p className='text-xs text-gray-400'>Shop Type</p>
                        </div>
                        <button className=' px-2 rounded-full text-xs text-gray-600 font-thin bg-[#99FDD2]'>Approved</button>
                    </div>
                    <div className='my-3 flex items-center gap-3'>
                        <p className='text-xs text-gray-400 w-4/12'>District:</p>
                        <p className='text-xs'>Thiruvananthapuram</p>
                    </div>
                    <div className='my-3 flex items-center gap-3'>
                        <p className='text-xs text-gray-400 w-4/12'>State:</p>
                        <p className='text-xs'>Kerala</p>
                    </div>
                    <div className='flex justify-end'>
                        <Link to="/vendors/add-Branch/Ventor-BranchDetails" >
                            <button className='text-sm text-gray-500 border border-gray-400 rounded-full px-3 '>Details</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VendorBranchList
