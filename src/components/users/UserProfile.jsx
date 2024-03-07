import React, { useState } from 'react'
import UserProfileDetails from './UserProfileDetails'
import { useEffect } from 'react';
import SkeltonLoading from '../ResuableComponents/SkeltonLoading';
import api, { get_api } from '../../utils/api';
import { useSelector } from 'react-redux';
import EditProfileModal from './EditProfileModal ';
import { checkDate } from '../../utils/Validation';
import ExpiryModal from './ExpiryModal';

const UserProfile = () => {

    const [loading, setLoading] = useState(true);
    const [Data, setData] = useState({
        name: '',
        number: '',
        district: '',
        state: '',
        address: '',
        dob: '',
        email_id: '',
        pincode: '',
        country: ''
    });
    const [formateddata, setFormatedDate] = useState('')
    const [PurchaseDate, setPurchaseDate] = useState('')
    const [isOpen, setisOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(true);

    const user = useSelector(state => state.auth.user);

    useEffect(() => {

        const loginUser = async () => {
            try {
                const response = await get_api(user?.token).get('/shop/customer/');
                if (response.status === 200) {
                    setData(response.data)
                }
            } catch (error) {
                console.error('Login failed:', error);
            }
        };

        setFormatedDate(new Date(Data?.expiry_date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit'
        }))

        loginUser();
    }, [])

    const onClose = () => {
        setisOpen(false)
    }

    const onOpen = () => {
        setisOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return Data === null ? <SkeltonLoading /> : (
        <div>
            <div className='md:absolute md:top-0 md:right-0 md:mt-28 '>
                <div className='relative'>
                    <img src="/card.svg" className='md:w-4/5' alt="" />
                    <p className='absolute top-3/4 left-9 mb-1 text-xs text-white '>{Data?.name}</p>
                    <p className='absolute top-3/4 left-44 mb-1 text-xs text-white '>{formateddata}</p>
                </div>
            </div>
            <div className='bg-gray-50 rounded-lg m-6 p-2 shadow-lg'>

                <div className='m-2 p-2'>
                    <div className='flex bg-[#99FDD2] items-center pl-3 sm:w-6/12 md:w-3/12 rounded-full '>
                        <div className=''>
                            <h1 className='text-xs'>Active</h1>
                        </div>
                        <div className='bg-black rounded-full h-full p-1 ml-3 w-full  '>
                            <h1 className='text-white text-xs p-1'>Kriyado Lifestyle + Services</h1>
                        </div>
                    </div>
                </div>

                <UserProfileDetails data={Data} onOpen={onOpen} />
            </div>
            <EditProfileModal isOpen={isOpen} onClose={onClose} data={Data} setData={setData} />
            {Data?.days_remaining <= 0 && <ExpiryModal />}

        </div>
    )
}

export default UserProfile
