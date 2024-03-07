import React, { useEffect, useState } from 'react'
import VendorSubmissionModal from '../admin/VendorSubmissionModal';
import { Link } from 'react-router-dom';

const VendorEmailSubmission = () => {

    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    };


    return (
        <div className='bg-gray-50 rounded-lg h-[550px] overflow-scroll customscrollbar  '>
            <div className='mt-5  p-4'>
                <div className='flex justify-center '>
                    <img src="/email-removebg-preview.png" alt="" className='w-1/2' />
                </div>
                <div className='flex justify-center m-5'>
                    <h1 className='text-xl font-bold'>Verify your email address</h1>
                </div>
                <div className='flex justify-center m-5'>
                    <h1 className=''>You've entered <span className='font-semibold'>user@domain.com</span> as the email address for your account</h1>
                </div>
                <div className='flex justify-center m-5'>
                    <h1 className=''>Please verify this email address by clicking button below.</h1>
                </div>
                <div className='flex justify-center items-end  m-5'>
                    <button className='bg-[#80509F] py-3 text-sm 3/12 text-white mb-2 px-12 rounded-md' onClick={handleModalOpen}>Verify your email</button>
                </div>
                <div className='flex justify-center items-center mt-14 gap-5'>
                    <button className='bg-[#80509F] py-2 text-sm 3/12 text-white mb-2 px-10 rounded-md'>Previous</button>
                    <button className='bg-[#9F5080] py-2 text-sm 3/12 text-white mb-2 px-10 rounded-md' >Submit</button>
                </div>
                {showModal && (
                    <VendorSubmissionModal setShowModal={setShowModal} />
                )}
            </div>
        </div>

    )
}

export default VendorEmailSubmission
