import React, { useState } from 'react'

const CustomersList = () => {
  const [count, useCount] = useState([1, 2, 1, 1, 1, 1, 1, 1, 1, 11, 1])
  return (
    <div className='overflow-x-scroll h-[400px] customscrollbar'>
      {count.map((c, index) => (
        <div className='bg-white border border-gray-300 rounded-md mt-3 p-3' key={index}>
          <p className='font-bold text-sm font-sans'>Kriyado User</p>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex gap-3 '>
              <div className='w-auto'>
                <img src="/gift.png" alt="" className='w-3' />
              </div>
              <p className='text-xs'>Kriyado Lifestyle + Service</p>
            </div>
            <button className=' px-2 rounded-full text-xs bg-[#99FDD2]'>Active</button>
          </div>
          <div className='my-3 flex items-center gap-3'>
            <img src="/date.png" alt="" className='w-3' />
            <p className='text-xs'> 04-02-2025</p>
          </div>
          <div>
            <button className='text-sm text-gray-500 border border-gray-400 rounded-full px-3 '>Details</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CustomersList
