import React, { useEffect, useState } from 'react'
import { get_api } from '../../utils/api';
import { getErrorMessage } from '../../utils/Validation';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const AllNotification = () => {

    const [notifications, setNotifications] = useState([])
    const [effect, seteffect] = useState(false)
    const user = useSelector(state => state.adminAuth.adminUser)

    useEffect(() => {
        fetchNotifications()
    }, [effect])

    const fetchNotifications = async () => {
        try {
            const response = await get_api(user?.token).get('/shop/notification/admin/');
            if (response.status === 200) {
                setNotifications(response.data)
            }
        } catch (error) {
            console.error('Fetching data failed:', error);
            const errorMessages = getErrorMessage(error)
            const generalErrors = errorMessages.filter((error) => error.field === 'general' || error.field === error.field || error.field === 'name');
            if (generalErrors.length >= 0) {
                const newErrors = generalErrors.map(error => error.message);
                newErrors.forEach(error => toast.error(error));
                return newErrors;
            }
            else if (error.message) {
                toast.error(`${error.message || 'Somthing went wrong'}`)
            }
        }
    }
    const AcceptNotification = async (notification) => {
        try {
            if (notification?.notification_type === 'DELETE_B') {
                const response = await get_api(user?.token).delete(`/shop/vendor/branches/${notification?.Branch_id}/delete/`);
                if (response.status === 204) {
                    seteffect(!effect)
                    toast.success('Approved')
                }
            }
        } catch (error) {
            console.error('Fetching data failed:', error);
            const errorMessages = getErrorMessage(error)
            const generalErrors = errorMessages.filter((error) => error.field === 'general' || error.field === error.field || error.field === 'name');
            if (generalErrors.length >= 0) {
                const newErrors = generalErrors.map(error => error.message);
                newErrors.forEach(error => toast.error(error));
                return newErrors;
            }
            else if (error.message) {
                toast.error(`${error.message || 'Somthing went wrong'}`)
            }
        }
    }
    console.log(notifications);

    return (
        <div className=' py-2 customscrollbar overflow-scroll h-[450px]'>

            {notifications.map((notification, index) =>
            (
                <div className='bg-[#f6edff] rounded-sm  py-2' key={notification?.id}>
                    <div className='px-5'>
                        <div><p className='text-xs'>{notification?.message}</p></div>
                        <div className='py-2 flex gap-4'>
                            <div><button className='bg-[#80509F] py-1 px-4 text-white text-xs rounded-sm' onClick={() => AcceptNotification(notification)}>Accept</button></div>
                            <div><button className='bg-white py-1 px-4  text-xs rounded-sm'>Decline</button></div>
                        </div>
                    </div>
                </div>
            ))

            }

            {/* <div className='bg-white  py-2'>
                <div className='px-5 '>
                    <div><p className='text-xs'><span className='text-xs font-medium'>PartnerName</span> approved</p></div>
                    <div className='py-2 flex gap-4'>
                        <div><button className='bg-[#C31071] py-1 px-4 text-white text-xs rounded-sm'>Remove</button></div>
                        <div><button className='bg-white py-1 px-4  text-xs rounded-sm'>Update</button></div>
                    </div>
                </div>
            </div> */}

            <Toaster />
        </div>
    )
}

export default AllNotification
