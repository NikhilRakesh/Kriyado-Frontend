import React from 'react'
import Dropdown from '../admin/Dropdown'
import CoustomInput from '../admin/CoustomInput'
import { Link } from 'react-router-dom'

const VendorDiscountEntry = () => {
    return (
        <div className='bg-gray-50 rounded-lg p-5 h-[550px] overflow-scroll customscrollbar '>
            <div className='my-4'>
                <p className='text-xs font-medium py-1 text-gray-800'>Total Discounts</p>
                <hr className='broder  border-gray-300' />
            </div>

            <div className='my-5  gap-7 '>

                <div className=''>
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

                <div className=' '>
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

            <div className='my-5  gap-7 '>

                <div className=' py-2 '>
                    <p className='text-xs text-gray-400'>Select Category</p>
                    <div className=' flex py-2'>
                        <Dropdown text='Choose' textcolor='text-black' font='font-normal' textsize='text-xs' p='3' />
                    </div>
                </div>

                <div className=' py-2 '>
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

                <div className=' '>
                    <CoustomInput headder='Value' Placeholder='Choose' type='text' />
                </div>

            </div>

            <div className='my-4'>
                <p className='text-xs font-medium py-1 text-gray-800'>Special Offers</p>
                <hr className='broder  border-gray-300' />
            </div>

            <div className='my-5  '>
                <div className=' '>
                    <CoustomInput headder='Offers' Placeholder='Enter' type='text' />
                </div>
            </div>

            <div className='flex justify-between gap-4 items-center mt-14 '>
                <button className='bg-[#80509F] py-2 text-sm 3/12 text-white mb-2 px-10 rounded-md'>Previous</button>
                <Link to='/Vendor-register/Vendor-Declaration' className='bg-[#9F5080] py-2 text-sm 3/12 text-white mb-2 px-10 rounded-md'>
                    <button >Next</button>
                </Link>
            </div>


        </div>
    )
}

export default VendorDiscountEntry
