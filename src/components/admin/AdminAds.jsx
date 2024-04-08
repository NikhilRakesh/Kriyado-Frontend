import React, { useEffect, useState } from 'react'
import CoustomInput from './CoustomInput'
import Dropdown from './Dropdown'
import { getStates, keralaDistricts } from '../../utils/formData'
import { getErrorMessage } from '../../utils/Validation'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { get_api, get_api_form } from '../../utils/api'

const AdminAds = () => {
    const [count] = useState([1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1])
    const [districts] = useState(keralaDistricts);
    const [states] = useState(getStates());
    const [effect, setEffect] = useState(false)
    const [advertisements, setadvertisements] = useState([])
    const [formData, setFormData] = useState({
        image: '',
        url: '',
        district: '',
        state: '',
        country: '',
        place: '',
        expiry_date: '',
    });
    const user = useSelector(state => state.adminAuth.adminUser)
    useEffect(() => {
        fetchAdd()
    }, [effect])
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const updateDistrict = (newDistrict) => {
        setFormData(prevState => ({
            ...prevState,
            district: newDistrict,
        }));
    };
    const updateState = (State) => {
        setFormData(prevState => ({
            ...prevState,
            state: State,
        }));
    };
    const updatePlace = (Place) => {
        setFormData(prevState => ({
            ...prevState,
            place: Place,
        }));
    };
    const updateCountry = (Country) => {
        setFormData(prevState => ({
            ...prevState,
            country: Country,
        }));
    };
    const PostAdd = async () => {
        try {
            const response = await get_api_form(user?.token).post('/shop/advertisements/create/admin/', formData);
            if (response.status === 201) {
                setEffect(!effect)
                setFormData({
                    image: '',
                    url: '',
                    district: '',
                    state: '',
                    country: '',
                    place: '',
                    expiry_date: '',
                })
                toast.success('Advertisement Created')
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
    const fetchAdd = async () => {
        try {
            const response = await get_api(user?.token).get('/shop/advertisements/');
            if (response.status === 200) {
                setadvertisements(response.data)
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
    const DeleteAdd = async (id) => {
        try {
            const response = await get_api(user?.token).delete(`/shop/advertisements/${id}/`);
            if (response.status === 204) {
                toast.success('Advertisement Deleted')
                setEffect(!effect)
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

    return (
        <div className='m-6 p-2 bg-gray-50 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold p-3'>Add Ads</h1>
                <div className="relative m-3">
                    <input
                        type="text"
                        className="border rounded-full pl-10 pr-4 py-2 w-full"
                        placeholder="Search package"
                    />
                    <svg
                        className="absolute left-3 top-2 h-5 w-5 text-gray-500 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.5 17.5l2.5 2.5"
                        />
                    </svg>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='m-2 p-3 border  border-gray-300 w-3/12  rounded-sm '>
                    <div>
                        <h1 className='font-bold'>Add New</h1>
                        <div className='m-2'>
                            <label htmlFor='imageUpload' className='block text-sm font-medium text-gray-700 cursor-pointer'>
                                <input
                                    type='file'
                                    id='imageUpload'
                                    name='image'
                                    accept='image/*'
                                    className='sr-only'
                                    onChange={handleImageChange}
                                />
                                <p className='text-xs text-gray-400 mt-1'>Choose Image</p>
                                <input
                                    type='text'
                                    className='bg-gray-100 border w-full p-3 outline-[#80509F] disabled text-xs text-gray-50 cursor-pointer'
                                    placeholder='Add image'
                                    readOnly
                                    onClick={() => document.getElementById('imageUpload').click()}
                                />
                            </label>
                        </div>
                        <div className='m-2'>
                            <p className='text-xs text-gray-400 '>Enter URL</p>
                            <input
                                type="text"
                                name="url"
                                value={formData.url}
                                onChange={handleChange}
                                className='bg-gray-100 border w-full  p-3 outline-[#80509F] text-xs text-gray-800'
                                placeholder='Enter Url'
                            />
                        </div>
                        <div className='m-2'>
                            <p className='text-xs text-gray-400 '>Expiry Date</p>
                            <input
                                type="date"
                                name="expiry_date"
                                value={formData.expiry_date}
                                onChange={handleChange}
                                className='bg-gray-100 border w-full  p-3 outline-[#80509F] text-xs text-gray-800'
                                placeholder='Enter Expiry date'
                            />
                        </div>
                        <div className='flex flex-col gap-2 m-2 pb-4'>
                            <p className='text-xs text-gray-400'>Select District</p>
                            <Dropdown text="Choose District" p='3' font="font-normal" textcolor="text-gray-400" data={districts} onUpdate={updateDistrict} />
                        </div>
                        <div className='flex flex-col gap-2 m-2 pb-4'>
                            <p className='text-xs text-gray-400'>Select State</p>
                            <Dropdown text="Choose State" p='3' font="font-normal" textcolor="text-gray-400" data={states} onUpdate={updateState} />
                        </div>
                        <div className='flex flex-col gap-2 m-2'>
                            <p className='text-xs text-gray-400'>Select Country</p>
                            <Dropdown text="Choose Country" p='3' font="font-normal" textcolor="text-gray-400" data={["India"]} onUpdate={updateCountry} />
                        </div>
                        <div className='flex flex-col gap-2 m-2'>
                            <p className='text-xs text-gray-400'>Place</p>
                            <Dropdown text='Place' data={['NORMAL', 'MAIN']} onUpdate={updatePlace} />
                        </div>
                    </div>
                    <div className='flex justify-center my-5 '>
                        <button className='bg-[#80509F] px-8 rounded-md text-white py-1' onClick={() => PostAdd()}>Post</button>
                    </div>
                </div>
                <div className='w-9/12 border m-2 p-2  border-gray-300   rounded-sm'>
                    <div className='border border-gray-300  shadow-md rounded-lg'>
                        <div className='hidden md:block'>
                            <div className='p-4 flex  '>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>Ad Image</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>Link</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>District</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>State</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>Country</p></div>
                                <div className='md:w-2/12'><p className='font-medium text-sm'>Action</p></div>
                            </div>
                        </div>
                        <div className='md:hidden'>
                            <p className='font-medium text-sm text-center'>Ad Images</p>
                        </div>
                        <hr />
                        <div className='overflow-scroll h-[550px] customscrollbar'>
                            {advertisements.length === 0 ? (
                                <div className='flex justify-center items-center h-full '>
                                    <p className='text-sm font-medium font-poppins'>No Advertisement Found</p>
                                </div>
                            ) : (
                                advertisements.map((add, index) => (
                                    <div className='p-4 md:flex' key={index}>
                                        <div className='md:w-2/12'><img className='md:w-10' src="/WhatsApp Image 2024-02-05 at 17.25.25_63afbb9d.jpg" alt="" /></div>
                                        <div className='md:w-2/12 flex items-center'> <p className='text-xs truncate'>{add?.url}</p></div>
                                        <div className='md:w-2/12 flex items-center'> <p className='text-xs'>{add?.district}</p></div>
                                        <div className='md:w-2/12 flex items-center'> <p className='text-xs'>{add?.state}</p></div>
                                        <div className='md:w-2/12 flex items-center'> <p className='text-xs'>{add?.country}</p></div>
                                        <div className='md:flex justify-between border border-gray-300 rounded-md bg-gray-100'>
                                            {/* <div className=' border-gray-300 p-1 px-4 border-r'>
                    <img src="/edit.png" alt="" className='w-5' />
                </div> */}
                                            <div className='p-1 px-4 cursor-pointer flex justify-center'>
                                                <img src="/delete (3).png" alt="" onClick={() => DeleteAdd(add?.id)} className='w-5' />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default AdminAds
