import React from 'react'
import Dropdown from './Dropdown'
import CoustomInput from './CoustomInput'

const DiscountEntry = () => {
    return (
        <div className='mt-5 mb-4'>
            {/* <h1 className='font-bold'>Total Discounts</h1> */}

            <div className='my-4'>
                <p className='text-xs font-medium py-1 text-gray-800'>Total Discounts</p>
                <hr className='broder  border-gray-300' />
            </div>

            <div className='my-5 flex gap-7 '>

                <div className='w-4/12 '>
                    <p className='text-xs text-gray-400'>Discount Type</p>
                    <div className=' flex py-2'>
                        <div className='flex w-1/4 gap-3'>
                            <input type="radio" />
                            <p className='text-sm'>Flat</p>
                        </div>
                        <div className='flex w-3/4 gap-3'>
                            <input type="radio" />
                            <p className='text-sm'>Percentage</p>
                        </div>
                    </div>
                </div>

                <div className='w-4/12 '>
                    <p className='text-xs text-gray-400'>Total bill discount</p>
                    <div className=' flex py-2'>
                        <Dropdown text='50 Rupees Flat off for total bill' textcolor='text-black' font='font-normal' textsize='text-xs' />
                    </div>
                </div>

            </div>


            <div className='my-4'>
                <p className='text-xs font-medium py-1 text-gray-800'>Category Based Discount</p>
                <hr className='broder  border-gray-300' />
            </div>

            <div className='my-5 flex gap-7 '>

                <div className='w-4/12 py-2 '>
                    <p className='text-xs text-gray-400'>Select Category</p>
                    <div className=' flex py-2'>
                        <Dropdown text='Choose' textcolor='text-black' font='font-normal' textsize='text-xs' p='3' />
                    </div>
                </div>

                <div className='w-4/12 py-2 '>
                    <p className='text-xs text-gray-400'>Discount Type</p>
                    <div className=' flex py-2 items-center'>
                        <div className='flex w-1/4 gap-3 '>
                            <input type="radio" />
                            <p className='text-sm'>Flat</p>
                        </div>
                        <div className='flex w-3/4 gap-3'>
                            <input type="radio" />
                            <p className='text-sm'>Percentage</p>
                        </div>
                    </div>
                </div>

                <div className='w-4/12 '>
                    <CoustomInput headder='Value' Placeholder='Choose' type='text' />
                </div>

            </div>



            <div className='my-4'>
                <p className='text-xs font-medium py-1 text-gray-800'>Special Offers</p>
                <hr className='broder  border-gray-300' />
            </div>

            <div className='my-5 flex '>
                <div className='w-8/12 '>
                    <CoustomInput headder='Offers' Placeholder='Enter' type='text' />
                </div>
            </div>

            <div className='flex justify-end items-end mt-14 gap-5'>
                <button className='bg-[#80509F] py-2 text-sm 3/12 text-white mb-2 px-14 rounded-md'>Previous</button>
                <button className='bg-[#9F5080] py-2 text-sm 3/12 text-white mb-2 px-14 rounded-md'>Next</button>
            </div>

        </div>
    )
}

export default DiscountEntry
