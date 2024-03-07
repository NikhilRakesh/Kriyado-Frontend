import React, { useRef, useState } from 'react'
import Dropdown from './Dropdown';
import { useFormData, getCities, getStates, keralaDistricts } from '../../utils/formData';
import { validateEmail, validatePincode, ValiatePhoneNumber } from '../../utils/Validation';


const ParnteRegesterPage = () => {

    const [checkedOption, setCheckedOption] = useState(null);
    const [cities] = useState(getCities());
    const [states] = useState(getStates());
    const [districts] = useState(keralaDistricts);
    const [formData, setFormData] = useFormData()
    const [emailError, setEmailError] = useState('');
    const [pincodeError, setPincodeError] = useState('');
    const [NumberError, setNumberError] = useState('');
    const [imageError, setimageError] = useState('');
    const [checkedOption2, setCheckedOption2] = useState('wholesaler');


    const inputFile = useRef(null);
    const addImage = useRef(null);

    const handleClick = () => {
        inputFile.current.click();
    };

    const handleClickAddimg = () => {
        addImage.current.click();
    };

    const handleChangeFirstimage = (event) => {
        setFormData({
            ...formData,
            Logo: event.target.files[0],
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length > 2) {
            setimageError('You can only select up to  2 images.');
            return;
        }
        const selectedImages = Array.from(event.target.files).map((file) => file);
        setFormData({
            ...formData,
            Photosofstore: selectedImages,
        });
        setimageError('')
    };

    const handleSubmitForForm = (event) => {
        event.preventDefault();
        if (emailError || pincodeError || NumberError || imageError) {
            return;
        }
        console.log(formData);
    }

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setCheckedOption(value);
        setFormData(prevState => ({
            ...prevState,
            HomeDelivery: value,
        }));
    };

    const updateDistrict = (newDistrict) => {
        setFormData(prevState => ({
            ...prevState,
            District: newDistrict,
        }));
    };

    const updateState = (State) => {
        setFormData(prevState => ({
            ...prevState,
            State: State,
        }));
    };

    const updateCountry = (Country) => {
        setFormData(prevState => ({
            ...prevState,
            country: Country,
        }));
    };

    const handleRemoveImage = (index) => {
        setFormData((prevState) => ({
            ...prevState,
            Photosofstore: prevState.Photosofstore.filter((_, i) => i !== index),
        }));
    };

    const handleCheckboxChange2 = (event) => {
        const value = event.target.value;
        setCheckedOption2(value);
        setFormData(prevState => ({
            ...prevState,
            businessType: value,
        }));
    };


    return (
        <div className='mt-5 mb-4'>
            <form onSubmit={handleSubmitForForm}>
                <h1 className='font-bold '>Registration</h1>
                <div className='flex justify-center items-center p-5'>
                    <input
                        type="file"
                        className='hidden'
                        ref={inputFile}
                        onChange={handleChangeFirstimage}
                        accept="image/*"
                    />
                    <div>
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex justify-center items-center" onClick={handleClick}>
                            <img src="/camera.png" alt="" className='w-6' />
                        </div>
                        <p className='text-xs font-bold pt-3 text-[#80509F] font-poppins'>Upload Logo</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <div className='w-4/12'>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Name of Organization</p>
                            <div className='py-2'>
                                <input type="text" name='Organization' required onChange={handleInputChange} className='border outline-0 text-sm text-gray-400  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter name" />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Pin Code</p>
                            <div className='py-2'>
                                <input type="text" required name='PinCode'
                                    onChange={handleInputChange}
                                    className='border text-sm text-gray-400 outline-0  border-gray-200 p-3 w-full rounded-sm bg-gray-100'
                                    placeholder="Enter Pin Code"
                                    onBlur={(e) => validatePincode(e.target.value, setPincodeError)} />
                                {pincodeError && (<p className='text-xs text-center text-red-500'>{pincodeError}</p>)}
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400 '>Select District</p>
                            <div className='py-2'>
                                <Dropdown text="Choose District" p='3' font="font-normal" textcolor="text-gray-400" data={districts} onUpdate={updateDistrict} />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Key person name / Manager name</p>
                            <div className='py-2'>
                                <input type="text" required name='Keypersonname' onChange={handleInputChange} className='border text-sm outline-0 text-gray-400  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter name" />
                            </div>
                        </div>
                    </div>

                    <div className='w-4/12'>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Name of Owner</p>
                            <div className='py-2'>
                                <input type="text" name='Owner' required onChange={handleInputChange} className='border text-sm text-gray-400 outline-0  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter name" />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Locality</p>
                            <div className='py-2'>
                                <input type="text" name='Locality' required onChange={handleInputChange} className='border text-sm text-gray-400 outline-0  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter " />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Select State</p>
                            <div className='py-2'>
                                <Dropdown text="Choose State" p='3' font="font-normal" textcolor="text-gray-400" data={states} onUpdate={updateState} />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Key Person Contact (Manager) Number</p>
                            <div className='py-2'>
                                <input type="text" name='KeyPersonContact' required onChange={handleInputChange} className='border text-sm text-gray-400 outline-0  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter Owners name" />
                            </div>
                        </div>
                    </div>

                    <div className='w-4/12'>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Mobile Number</p>
                            <div className='py-2'>
                                <input type="text" name='MobileNumber'
                                    required onChange={handleInputChange}
                                    className='border text-sm text-gray-400  outline-0 border-gray-200 p-3 w-full rounded-sm bg-gray-100'
                                    placeholder="Enter number"
                                    onBlur={(e) => ValiatePhoneNumber(e.target.value, setNumberError)} />
                                {NumberError && (<p className='text-xs text-center text-red-500'>{NumberError}</p>)}
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Town</p>
                            <div className='py-2'>
                                <input type="text" name='Town' required onChange={handleInputChange} className='border text-sm text-gray-400 outline-0  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter number" />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Select country</p>
                            <div className='py-2'>
                                <Dropdown text="Choose Country" p='3' font="font-normal" textcolor="text-gray-400" data={["India"]} onUpdate={updateCountry} />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Land phone</p>
                            <div className='py-2'>
                                <input type="text" name='Landphone' onChange={handleInputChange} className='border text-sm text-gray-400 outline-0  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter number" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-6'>
                    <div className='w-4/12'>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Registered Address</p>
                            <div className='py-2'>
                                <input type="text" name='RegisteredAddress' required onChange={handleInputChange} className='border text-sm text-gray-400  outline-0 border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Address" />
                            </div>
                        </div>
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
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Select Type</p>
                            <div className='py-2'>
                                <Dropdown text="Choose Type" p='3' font="font-normal" textcolor="text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-6'>
                    <div className='w-4/12'>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Email id</p>
                            <div className='py-2'>
                                <input type="email" name='Emailid'
                                    required onChange={handleInputChange}
                                    className='border text-sm  text-gray-400 outline-0  border-gray-200 p-3 w-full rounded-sm bg-gray-100'
                                    placeholder="Enter email"
                                    onBlur={(e) => validateEmail(e.target.value, setEmailError)} />
                                {emailError && (<p className='text-xs text-center text-red-500'>{emailError}</p>)}
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Facebook link</p>
                            <div className='py-2'>
                                <input type="text" name='Facebooklink' onChange={handleInputChange} className='border text-sm text-gray-400  outline-0 border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter" />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Normal Working hours [from time, to time]</p>
                            <div className='py-2'>
                                <input type="time" name='NormalWorkinghoursFrom' required onChange={handleInputChange} className="border border-gray-300 outline-0 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                            </div>
                        </div>
                    </div>

                    <div className='w-4/12'>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Website</p>
                            <div className='py-2'>
                                <input type="text" name='Website' onChange={handleInputChange} className='border text-sm text-gray-400 outline-0  border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter" />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Instagram link</p>
                            <div className='py-2'>
                                <input type="text" name='Instagramlink' onChange={handleInputChange} className='border text-sm text-gray-400 outline-0 border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter" />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs  text-white'>to</p>
                            <div className='py-2'>
                                <input type="time" name='NormalWorkinghoursTo' required onChange={handleInputChange} className="border border-gray-300 outline-0 rounded-md px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                            </div>
                        </div>
                    </div>

                    <div className='w-4/12'>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Google Map link</p>
                            <div className='py-2'>
                                <input type="text" name='GoogleMaplink' onChange={handleInputChange} className='border text-sm text-gray-400 outline-0 border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter" />
                            </div>
                        </div>
                        <div className='w-full py-2'>
                            <p className='text-xs text-gray-400'>Youtube link</p>
                            <div className='py-2'>
                                <input type="text" name='Youtubelink' onChange={handleInputChange} className='border text-sm text-gray-400 outline-0 border-gray-200 p-3 w-full rounded-sm bg-gray-100' placeholder="Enter" />
                            </div>
                        </div>
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
                            {formData && (formData?.Photosofstore.map((img, index) => (
                                <div className='w-2/6 h-[100px] shadow-lg  border' key={img}>
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

export default ParnteRegesterPage
