import React, { useState } from 'react';
import backgroundImage from '/kriyado_profile_bg[1].png';
import { getErrorMessage, validateEmail, validatePassword } from '../../utils/Validation';
import { login as loginAction } from "../../Reducer/authReducer";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from "../../utils/api";
import { FaCheck } from 'react-icons/fa';
import { adminLogin } from '../../Reducer/adminAuthReducer';


const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [LoginError, setLoginError] = useState([]);
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError([])
        validateEmail(email, setEmailError);
        validatePassword(password, setPasswordError);

        if (!emailError && !passwordError) {
            try {
                const response = await api.post('/user/login/', { username: email, password });
                if (response.status === 200) {
                    if (response.data.type === 'user') {
                        dispatch(loginAction(response.data));
                        navigate('/')
                    } else if (response.data.type === 'admin') {
                        dispatch(adminLogin(response.data));
                        navigate('/admin-home')
                    } else if (response.data.type === 'vendor') {
                        navigate('/vendors')
                    }
                }
            } catch (error) {    
                const errorMessages = getErrorMessage(error)
                const generalErrors = errorMessages.filter((error) => error.field === 'general' || error.field === 'non_field_errors');
                if (generalErrors) {
                    setLoginError(generalErrors.map(error => error.message));
                }
            }
        }

    };


    return (
        <div
            className="bg-cover bg-center w-full h-screen md:flex fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className='w-full md:w-4/12 '>
            </div>
            <div className=' w-full md:w-7/12 flex flex-col justify-center  items-center h-full md:gap-28 md:flex-row  '>
                <div className='w-3/12'>
                    <img src="/Kriyado Black Logo.png" alt="" />
                </div>
                <div className='w-9/12  md:w-6/12 lg:w-6/12'>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-bold text-2xl font-sans p-2 '>Login</h1>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className='bg-gray-100 rounded-lg  md:py-10'>
                            {LoginError && (
                                <div className='flex justify-center  ml-2  '>
                                    {LoginError.map((error, index) => (
                                        <p key={index} className='text-xs bg-red-500 p-2 w-full rounded-md font-medium text-center text-white'>{error}</p>
                                    ))}
                                </div>
                            )}
                            <div className='mx-4 my-2'>
                                <input
                                    type="text" required
                                    className={`bg-white  rounded-md p-4 text-xs w-full ${emailError ? 'border-red-500' : ''} outline-[#80509F]`}
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => validateEmail(email, setEmailError)}
                                />
                            </div>
                            <div className='pl-2 '>
                                {emailError && <p className='text-red-500 text-xs font-medium'>{emailError}</p>}
                            </div>
                            <div className='mx-4 my-2'>
                                <input
                                    type="password"
                                    className={`bg-white  rounded-md p-4 text-xs w-full ${passwordError ? 'border-red-500' : ''} outline-[#80509F]`}
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={() => validatePassword(password, setPasswordError)}
                                />
                            </div>
                            <div className='pl-2'>
                                {passwordError && <p className='text-red-500 text-xs font-medium'>{passwordError}</p>}
                            </div>
                            <div className='flex justify-end items-center '>
                                <p className='font-bold text-xs  m-1'>Forgot your password?</p>
                                <img className='w-6 h-5' src="/arrow.png" alt="" />
                            </div>
                            <div className='flex justify-center m-4'>
                                <button className='text-white bg-[#80509F] w-full rounded-full p-2 border text-xs shadow-xl'>LOGIN</button>
                            </div>
                            <div className='flex justify-center items-center m-2 mt-10 p-1'>
                                <p className='text-xs font-bold'>Or login with social accounts</p>
                            </div>
                            <div className='flex justify-center items-center m-2 p-1'>
                                <div className='flex justify-between w-6/12'>
                                    <div className='bg-white p-2 px-4 rounded-lg '>
                                        <img className='w-4' src="/google (1).png" alt="" />
                                    </div>
                                    <div className='bg-white p-2 px-4 rounded-lg '>
                                        <img className='w-4' src="/facebook.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
