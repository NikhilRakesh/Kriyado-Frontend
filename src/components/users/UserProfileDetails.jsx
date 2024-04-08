import React, { useEffect, useState } from 'react'
import UserProfileModal from './UserProfileModal'

const UserProfileDetails = ({ data, onOpen }) => {

    const [PurchaseDate, setPurchaseDate] = useState('')
    const [DateOfBirth, setDateOfBirth] = useState('')
    const [ExpiryDate, setExpiryDate] = useState('')


    useEffect(() => {
        const packageData = data?.package_c.find(pkg => pkg.is_active === true);
        if (packageData) {
            const { purchase_date, expiry_date } = packageData;
            const dateObject = new Date(purchase_date);
            const dateObject2 = new Date(data?.dob);
            const dateObject3 = new Date(expiry_date);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            setPurchaseDate(dateObject.toLocaleDateString('en-US', options))
            setDateOfBirth(dateObject2.toLocaleDateString('en-US', options))
            setExpiryDate(dateObject3.toLocaleDateString('en-US', options))
        }
    }, [data])

    return (
        <div className='md:flex '>
            <div className='m-2 p-2 w-full md:w-8/12 '>
                <div className='md:flex  mb-5 justify-between'>
                    <div className='md:px-2 w-5/12 ' >
                        <h1 className='font-bold text-black sm:p-1 '>My Profile</h1>
                        <p className='text-[10px] font-sans sm:p-1'>Customer ID</p>
                        <p className='text-xs font-sans  font-thin sm:p-1'><span>CID </span>{data?.customer_id}</p>
                    </div>
                    <div className='md:border border-gray-300 md:shadow-sm rounded-sm md:flex md:p-2 md:w-6/12 justify-between items-center sm:p-1'>
                        <div className=''>
                            <p className='text-[10px] '>Purchase Date</p>
                            <p>{PurchaseDate}</p>
                        </div>
                        <div>
                            <p className='text-[10px]'>Expiry Date</p>
                            <p>{ExpiryDate}</p>
                        </div>
                    </div>
                </div>
                <div className='border md:flex justify-between p-3 border-gray-300 rounded-sm'>
                    <div className=' md:w-6/12 m-2'>
                        <div className='p-2'>
                            <p className='text-[10px]'>Full name</p>
                            <div className='flex justify-between'>
                                <p>{data.name}</p>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Phone</p>
                            <div className='flex justify-between'>
                                <p><span>+91 </span>{data.number}</p>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>District</p>
                            <div className='flex justify-between'>
                                <p>{data?.district}</p>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>State</p>
                            <div className='flex justify-between'>
                                <p>{data?.state}</p>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Address</p>
                            <div className='flex justify-between'>
                                <p>{data?.address}</p>
                            </div>
                            <hr className='mt-2' />
                        </div>
                    </div>
                    <div className=' w-full md:w-6/12 m-2'>
                        <div className='p-2'>
                            <p className='text-[10px]'>Date of birth</p>
                            <div className='flex justify-between'>
                                <p>{DateOfBirth}</p>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Email</p>
                            <div className='flex justify-between'>
                                <p>{data?.email_id}</p>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Pincode</p>
                            <div className='flex justify-between'>
                                <p>{data?.pincode}</p>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='p-2'>
                            <p className='text-[10px]'>Country</p>
                            <div className='flex justify-between'>
                                <p>{data?.country}</p>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='pt-7'>
                            <div className='flex justify-end items-end '>
                                <button className='bg-gray-200 rounded-full' onClick={() => (onOpen())}><p className='text-[10px] px-6 p-1 '>Edit</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-2 p-2 w-full  md:w-4/12 flex flex-col justify-between '>
                {/* <div className='border p-5  shadow-sm'>
                    <div className='p-1 pb-0'>
                        <p className='text-[10px]'>Legal</p>
                    </div>
                    <div className='flex justify-between p-1'>
                        <p>KYC Status</p>
                        <div className='bg-[#99FDD2] flex items-center justify-center  rounded-full font-sans px-3' >
                            <p className='text-[10px] font-bold tracking-wider'>Verified</p>
                        </div>
                    </div>
                    <div className='flex justify-between p-1'>
                        <p>KYC Details</p>
                        <div className='bg-gray-100 flex justify-center items-center rounded-full px-3'>
                            <p className='text-[10px] font-bold'>View</p>
                        </div>
                    </div>
                </div> */}
                <div className='rounded-sm'>
                    <img src="/ad-area@2x.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default UserProfileDetails
