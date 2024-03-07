import React, { useRef, useState } from 'react';

const VendorSubmissionModal = ({ setShowModal }) => {
    const [otpValue, setOtpValue] = useState('');
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleSubmit = () => {
        console.log('OTP submitted:', otpValue);
        handleModalClose();
    };

    const handleOtpChange = (index, value) => {
        const newOtpValue = otpValue.substring(0, index) + value + otpValue.substring(index + 1);
        setOtpValue(newOtpValue);

        if (value !== '' && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        } else if (value === '' && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-md flex flex-col items-center relative">
                <button className="absolute top-2 right-2" onClick={handleModalClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4">Check Your Email!</h2>
                <p>Please enter 4-digit verification code that was sent to your email</p>
                <p>The code is valid for 30 minutes</p>
                <div className="flex justify-between my-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <input
                            key={index}
                            ref={inputRefs[index]}
                            type="text"
                            value={otpValue[index] || ''}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            maxLength={1}
                            className="border border-gray-300 p-2 rounded-md w-16 text-center outline-none"
                        />
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#80509F] py-2 px-4 text-white rounded-md" onClick={handleSubmit}>
                        Verify Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VendorSubmissionModal;
