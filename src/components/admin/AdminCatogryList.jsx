import React, { useState } from 'react'
import './Admin.css'
const AdminCatogryList = () => {

    const [count, useCount] = useState([1,2,3,4,5,6,7,10,1,1,1,1,1,1,1,1,1,1,])

    return (
        <div className='w-full bg-white border border-gray-300 rounded-md p-1 px-4 my-3'>
            <div className='flex items-center justify-between p-2'>
                <p className='text-sm  font-bold '>Category</p>
                <p className='text-sm font-bold   pr-[50px]'>Action</p>
            </div>
            <hr className='bg-gray-600 m-1' />
            <div className='overflow-x-auto overflow-y-scroll h-[400px] customscrollbar'>

                {count.map((c,index) => (
                    <div className='flex items-center justify-between px-2 py-3  border-gray-300  border-b' key={index}> 
                        <p className='text-sm w-6/12  '>Digital Product</p>
                        <div className='flex justify-between  border border-gray-300   rounded-md bg-gray-100'>
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
    )
}

export default AdminCatogryList
