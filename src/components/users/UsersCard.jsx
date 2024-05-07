import React from 'react'

const UsersCard = ({data,formateddata}) => {
    return (
        <div className='bg-[#2F1542] rounded-md shadow-lg  '>
            <div className='flex gap-3 px-5 pt-5'>
                <img src="/chip.png" alt="" />
                <p className='text-white text-lg'>Kriyado Lifestyle + Services</p>
            </div>
            <div className='flex gap-3 py-3 px-5  ml-3'>
                <p className='text-lg text-white'>* * * * </p>
                <p className='text-lg text-white'>* * * * </p>
                <p className='text-lg text-white'>* * * * </p>
                <p className='text-lg text-white'>{data?.customer_id?.toString().substring(0, 4)}</p>
            </div>
            <div className='absolute top-36 px-5 flex text-white gap-10'>
                <div>
                    <p className='text-xs text-gray-300 py-1 font-medium'>Card Holder Name</p>
                    <p className='text-xs'>{data?.name}</p>
                </div>
                <div>
                    <p className='text-xs text-gray-300 py-1 font-medium'>Expiry Date</p>
                    <p className='text-xs'>{formateddata}</p>
                </div>
            </div>
            <div className='flex items-center '>
                <img src="/Vector.png" alt="" className='w-10/12' />
                <img src="/kriyado White logo.png" alt="" className='w-15 h-3 relative top-5 left-1  ' />
            </div>

        </div>
    )
}

export default UsersCard
