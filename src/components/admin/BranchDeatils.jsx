import React, { useRef, useState } from 'react'
import CoustomInput from './CoustomInput'
import { validatePincode } from '../../utils/Validation';
import { useFormData, useFormData2, getCities, getStates, keralaDistricts } from '../../utils/formData';
import Dropdown from './Dropdown';


const BranchDeatils = () => {

    const [checkedOption, setCheckedOption] = useState(null);
    const [formData2, setFormData2] = useFormData2()
    const [imageError, setimageError] = useState('');
    const [pincodeError, setPincodeError] = useState('');
    const [districts] = useState(keralaDistricts);
    const [states] = useState(getStates());
    const [formData, setFormData] = useFormData()
    const [checkedOption2, setCheckedOption2] = useState('wholesaler');




    const addImage = useRef(null);


    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setCheckedOption(value);
        setFormData2(prevState => ({
            ...prevState,
            HomeDelivery: value,
        }));
    }

    const handleChangeImage = (event) => {
        if (event.target.files.length > 2) {
            setimageError('You can only select up to  2 images.');
            return;
        }
        const selectedImages = Array.from(event.target.files).map((file) => file);
        console.log(selectedImages);
        setFormData2({
            ...formData2,
            Photosofstore: selectedImages,
        });
        setimageError('')
    }

    const handleClickAddimg = () => {
        addImage.current.click();
    }

    const handleInputChange = (event) => {
        setFormData2({
            ...formData2,
            [event.target.name]: event.target.value,
        });
    }

    const handleRemoveImage = (index) => {
        setFormData2((prevState) => ({
            ...prevState,
            Photosofstore: prevState.Photosofstore.filter((_, i) => i !== index),
        }));
    };

    const Onsubmit = (event) => {
        event.preventDefault();
        if (imageError) {
            return;
        }
        formData.Branch = formData2;
        console.log(formData);
    }

    const onblur = (event) => {
        if (event.target.name === "PinCode") {
            validatePincode(event.target.value, setPincodeError);
        }
    }

    const updateDistrict = (newDistrict) => {
        setFormData2(prevState => ({
            ...prevState,
            District: newDistrict,
        }));
    };

    const updateState = (State) => {
        setFormData2(prevState => ({
            ...prevState,
            State: State,
        }));
    };

    const updateCountry = (Country) => {
        setFormData2(prevState => ({
            ...prevState,
            country: Country,
        }));
    };

    const handleCheckboxChange2 = (event) => {
        const value = event.target.value;
        setCheckedOption2(value);
        setFormData2(prevState => ({
            ...prevState,
            businessType: value,
        }));
    };


    return (
        <div className='mt-5 mb-4'>
            <h1 className='font-bold'>Branch Details</h1>
            <form className='mt-4' onSubmit={Onsubmit}>
                <div className='flex gap-6'>

                    <div className='w-4/12'>
                        <CoustomInput headder='Key person name / Manager name' Placeholder='Enter' type='text' name='Keypersonname' onChange={handleInputChange} />
                    </div>
                    <div className='w-4/12'>
                        <CoustomInput headder='Key Person Contact (Manager) Number' Placeholder='Enter' type='text' name='KeyPersonContact' onChange={handleInputChange} />
                    </div>
                    <div className='w-4/12'>
                        <CoustomInput headder='Locality' Placeholder='Enter' type='text' name='Locality' onChange={handleInputChange} />
                    </div>

                </div>

                <div className='flex gap-6'>

                    <div className='w-4/12'>
                        <CoustomInput headder='Registered Address' Placeholder='Enter' type='Address' name='RegisteredAddress' onChange={handleInputChange} />
                    </div>
                    <div className='w-4/12'>
                        <p className='text-xs text-gray-400'>Business Type</p>
                        <div className='flex pt-6'>
                            <div className='flex w-2/4 gap-3'>
                                <input
                                    type="radio"
                                    id="wholesaler"
                                    name="businessType"
                                    value="wholesaler"
                                    checked={checkedOption2 === 'wholesaler'}
                                    onChange={handleCheckboxChange2}
                                />
                                <label htmlFor="wholesaler" className='text-sm text-gray-400'>Wholesaler</label>
                            </div>
                            <div className='flex w-2/4 gap-3'>
                                <input
                                    type="radio"
                                    id="retail"
                                    name="businessType"
                                    value="retail"
                                    checked={checkedOption2 === 'retail'}
                                    onChange={handleCheckboxChange2}
                                />
                                <label htmlFor="retail" className='text-sm text-gray-400'>Retail</label>
                            </div>
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <CoustomInput headder='Pin Code' Placeholder='Enter' type='text' name='PinCode' onChange={handleInputChange} onBlur={onblur} />
                        {pincodeError && (<p className='text-xs text-center text-red-500'>{pincodeError}</p>)}
                    </div>

                </div>

                <div className='flex gap-6'>

                    <div className='w-4/12 flex flex-col justify-center'>
                        <p className='text-xs text-gray-400'>Country</p>
                        <Dropdown text="Choose Country" p='3' font="font-normal" textcolor="text-gray-400" data={["India"]} onUpdate={updateCountry} />
                    </div>
                    <div className='w-4/12 flex flex-col justify-center'>
                        <p className='text-xs text-gray-400'>District</p>
                        <Dropdown text="Choose District" p='3' font="font-normal" textcolor="text-gray-400" data={districts} onUpdate={updateDistrict} />
                    </div>
                    <div className='w-4/12 flex flex-col justify-center'>
                        <p className='text-xs text-gray-400'>State</p>
                        <Dropdown text="Choose State" p='3' font="font-normal" textcolor="text-gray-400" data={states} onUpdate={updateState} />
                    </div>

                </div>

                <div className='flex gap-6'>

                    <div className='w-4/12'>
                        <CoustomInput headder='Town' Placeholder='Enter' type='text' name='Town' onChange={handleInputChange} />
                    </div>
                    <div className='w-4/12'>
                        <CoustomInput headder='Land phone' Placeholder='Enter Number' type='text' name='Landphone' onChange={handleInputChange} />
                    </div>
                    <div className='w-4/12 flex'>

                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Normal Working hours [from time, to time]</p>
                            <div className='py-2 flex gap-3'>
                                <input type="time" name='NormalWorkinghoursFrom' onChange={handleInputChange} required className="border w-2/4 border-gray-300 outline-0 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                                <input type="time" name='NormalWorkinghoursTo' onChange={handleInputChange} required className="border w-2/4 border-gray-300 outline-0 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                            </div>
                        </div>
                    </div>

                </div>


                <div className='flex gap-6'>

                    <div className='w-4/12'>
                        <CoustomInput headder='Google Map link' Placeholder='Paste your Google Map link' type='text' name='GoogleMaplink' onChange={handleInputChange} />
                    </div>
                    <div className='w-4/12'>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Select Type</p>
                            <div className='py-2'>
                                <Dropdown text="Choose Type" p='3' font="font-normal" textcolor="text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Home delivery/home service [Y/N]</p>
                            <div className='py-2 flex'>
                                <div className='flex items-center p-3 gap-5'>
                                    <input
                                        type="checkbox"
                                        value="yes"
                                        checked={checkedOption === 'yes'}
                                        onChange={handleCheckboxChange}
                                        className='border text-sm text-gray-400  border-gray-200  rounded-sm bg-gray-100'
                                        placeholder="Enter"
                                    />
                                    <p className='text-xs'>Yes</p>
                                </div>
                                <div className='flex items-center p-3 gap-5'>
                                    <input
                                        type="checkbox"
                                        value="no"
                                        checked={checkedOption === 'no'}
                                        onChange={handleCheckboxChange}
                                        className='border text-sm text-gray-400  border-gray-200  rounded-sm bg-gray-100'
                                        placeholder="Enter"
                                    />
                                    <p className='text-xs'>No</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex gap-6'>
                    <div className='w-6/12'>
                        <p className='text-xs text-gray-400'>Photos of store</p>
                    </div>
                    <div className='w-6/12'>
                        <p className='text-xs text-gray-400'>Head Office Address</p>
                    </div>
                </div>

                <div className='flex gap-6 mt-2 '>
                    <div className='w-6/12'>
                        <div className='flex gap-6'>
                            {formData2 && (formData2?.Photosofstore.map((img, index) => (
                                <div className='w-2/6 h-[100px] shadow-lg  border' key={index}>
                                    <img className='w-full h-full object-cover' src={URL.createObjectURL(img)} alt="" />
                                    <p className=' text-xs text-red-500 cursor-pointer' onClick={() => handleRemoveImage(index)}>Remove</p>
                                </div>
                            )))}

                            <div className='w-2/6  shadow-lg flex items-center justify-center'>
                                <input
                                    type="file"
                                    className='hidden'
                                    ref={addImage}
                                    onChange={handleChangeImage}
                                    accept="image/*"
                                    multiple
                                />
                                <div className='flex flex-col items-center justify-center h-[100px]'>
                                    <div className='rounded-full w-10 h-10 bg-gray-200 flex justify-center items-center cursor-pointer'
                                        onClick={handleClickAddimg}
                                    >
                                        <img src="/camera.png" alt="" className='w-4' />
                                    </div>
                                    <p className='text-[10px] font-bold pt-1 text-[#80509F] font-poppins'>Add your photos</p>
                                </div>
                            </div>
                            {imageError && (<p className='text-xs text-center text-red-500'>{imageError}</p>)}
                        </div>

                    </div>
                    <div className='w-6/12 '>
                        <div className=''>
                            <input type="text" name='HeadOfficeAddress' onChange={handleInputChange} className='border outline-0 h-[100px] text-sm text-gray-400  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter" />
                        </div>
                        <div className='flex  mt-4'>
                            <button className='py-1 px-2 mx-4 bg-[#80509F] rounded-lg text-white w-3/6 '>Previous</button>
                            <button type='submit' className='py-1 px-2 mx-4 bg-[#9F5080] rounded-lg text-white w-3/6 '>Next</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default BranchDeatils
