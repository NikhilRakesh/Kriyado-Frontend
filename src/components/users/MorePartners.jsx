import React from 'react'
import Dropdown from '../admin/Dropdown'
import MorePartnersDetails from './MorePartnersDetails'

const MorePartners = () => {
    return (
        <div className='' >
            <div className='md:absolute md:top-0 md:right-0 md:mt-[12rem] '>
                <div className='m-2 p-2'>
                    <div className='flex bg-[#99FDD2] items-center pl-3 sm:w-6/12 md:w-full justify-center rounded-full '>
                        <div className=''>
                            <h1 className='text-xs'>Active</h1>
                        </div>
                        <div className='bg-black rounded-full h-full p-1 ml-3 w-full  '>
                            <h1 className='text-white text-xs p-1'>Kriyado Lifestyle + Services</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-50 rounded-lg m-6 p-6 shadow-lg md:flex  gap-3'>
                <div className='md:w-10/12 '>

                    <div className='flex items-center'>
                        <div className='w-5/12 hidden  sm:block'>
                            <h1 className='font-bold'>Partners Details</h1>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <MorePartnersDetails />
                    </div>

                </div>
                <div className='md:w-4/12 border shadow-md'>
                    <div className='  rounded-sm'>
                        <img src="/ad-area@2x.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MorePartners
