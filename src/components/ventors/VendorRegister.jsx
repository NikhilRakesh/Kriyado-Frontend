import React, { useRef, useState } from 'react'
import backgroundImage from '/kriyado_profile_bg[1].png';

import { Outlet } from 'react-router-dom';

const VendorRegister = () => {

    const [formData, setFormData] = useState({})
    const [imageError, setimageError] = useState('');

    const addImage = useRef(null);

    const handleSubmitForForm = (event) => {
        event.preventDefault();
        if (imageError) {
            return;
        }
        console.log(formData);
    }

    return (
        <div
            className="bg-cover bg-center w-full h-screen md:flex fixed  "
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className='w-full md:w-4/12 '>
            </div>
            <div className=' w-full md:w-8/12 flex flex-col justify-center  items-center h-full md:gap-5 md:flex-row  '>
                <div className='w-3/12'>
                    <img src="/Kriyado Black Logo.png" alt="" />
                </div>
                <div className='md:w-[500px] md:pl-5 md:ml-20'>
                    <form onSubmit={handleSubmitForForm} className='overflow-scroll rounded-md customscrollbar  py-4 shadow-lg bg-gray-50 ' >
                        <div className='flex justify-center items-center'>
                            <h1 className='font-bold text-2xl font-sans '>Vendor Register</h1>
                        </div>
                        <Outlet />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VendorRegister
