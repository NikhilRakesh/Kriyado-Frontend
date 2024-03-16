import React from 'react';

const CompanyModal = ({ isOpen, onClose, data }) => {

    const formatTime = (timeString) => {
        const date = new Date(`2000-01-01T${timeString}`);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };


    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
                <div className="z-20 bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-3xl">
                    <div className="p-6">
                        <h3 className="text-lg font-bold mb-4">Company Details</h3>
                        <div className="space-y-4">
                            <p><span className="font-semibold">Owner:</span> {data.owner}</p>
                            <p><span className="font-semibold">Organization:</span> {data.organization}</p>
                            <p><span className="font-semibold">Email ID:</span> {data.email_id}</p>
                            <p><span className="font-semibold">Mobile Number:</span> {data.mobile_number}</p>
                            <p><span className="font-semibold">Is Registered:</span> {data.is_registered ? 'Yes' : 'No'}</p>
                            <p><span className="font-semibold">Website:</span> {data.website || 'N/A'}</p>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-lg font-bold mb-4">Branches</h4>
                            <div className="grid grid-cols-1 gap-4">
                                {data?.branches?.map((branch, index) => (
                                    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                        <p className="font-semibold">Location: {branch.District}, {branch.Locality}, {branch.State}</p>
                                        <p><span className="font-semibold">Key Person:</span> {branch.KeyPersonName}</p>
                                        <p><span className="font-semibold">Contact:</span> {branch.KeyPersonContact}</p>
                                        <p><span className="font-semibold">Working Hours:</span> {formatTime(branch.NormalWorkingHoursFrom)} to {formatTime(branch.NormalWorkingHoursTo)}</p>
                                        <p><span className="font-semibold">Pin Code:</span> {branch.PinCode}</p>
                                        <p><span className="font-semibold">Registered Address:</span> {branch.RegisteredAddress}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-end">
                        <button onClick={onClose} className="px-4 py-2 bg-[#80509F] text-white rounded-md hover:bg-[#5c3973] focus:outline-none focus:bg-[#80509F]">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyModal;
