import React, { useEffect, useState } from 'react'
import { getErrorMessage } from '../../utils/Validation';
import toast, { Toaster } from 'react-hot-toast';
import { get_api } from '../../utils/api';
import { useSelector } from 'react-redux';

const CustomersList = () => {

  const [count, useCount] = useState([1, 2, 1, 1, 1, 1, 1, 1, 1, 11, 1])
  const [customers, setcustomers] = useState([])

  const user = useSelector(state => state.adminAuth.adminUser)


  useEffect(() => {
    fetchCustomer()
  }, [])

  const fetchCustomer = async () => {
    try {
      const response = await get_api(user?.token).get(`/shop/customer/`);
      console.log(response);
      if (response.status === 200) {
        setcustomers(response.data)
      }
    } catch (error) {
      console.error('Fetching fetchCustomer failed:', error);
      const errorMessages = getErrorMessage(error)
      const generalErrors = errorMessages.filter((error) => error.field === 'general' || error.field === 'non_field_errors' || error.field === 'name');
      if (generalErrors.length >= 0) {
        const newErrors = generalErrors.map(error => error.message);
        console.log('', newErrors);
        newErrors.forEach(error => toast.error(error));
        return newErrors;
      }
      else if (error.message) {
        toast.error(`${error.message || 'Somthing went wrong'}`)
      }
    }

  }


  return (
    <div className='overflow-x-scroll h-[400px] customscrollbar'>
      {customers.map((Customer, index) => (
        <div className='bg-white border border-gray-300 rounded-md mt-3 p-3' key={Customer.id}>
          <p className='font-bold text-sm font-sans'>{Customer.name}</p>
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
      <Toaster />
    </div>
  )
}

export default CustomersList
