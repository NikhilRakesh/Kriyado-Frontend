import React, { useEffect, useState } from 'react';
import CustmorPackageModal from './CustmorPackageModal';
import { get_api } from '../../utils/api';
import { getErrorMessage } from '../../utils/Validation';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const CustomerDetailsModal = ({ isOpen, onClose, data, render, addPackage }) => {

    const [packages, setpackages] = useState([])
    const [isOPen, setisOPen] = useState(false)

    const user = useSelector(state => state.adminAuth.adminUser)

    useEffect(() => {
        fetchPackages()
    }, [])

    const fetchPackages = async () => {
        try {
            const response = await get_api(user?.token).get('/shop/packages/options/');
            if (response.status === 200) {
                setpackages(response.data)
            }
        } catch (error) {
            console.error('Fetching categories failed:', error);
            const errorMessages = getErrorMessage(error)
            const generalErrors = errorMessages.filter((error) => error.field === 'general' || error.field === 'non_field_errors' || error.field === 'name');
            if (generalErrors.length >= 0) {
                const newErrors = generalErrors.map(error => error.message);
                console.log(newErrors);
                newErrors.forEach(error => toast.error(error));
                return newErrors;
            }
            else if (error.message) {
                console.log('here');
                toast.error(`${error.message || 'Somthing went wrong'}`)
            }
        }
    };

    const updatePackageInFormData = async (packageId) => {
        try {
            const response = await get_api(user?.token).post('/shop/customer/package/update/', { package: packageId, user: data.id });
            if (response.status === 201) {
                addPackage(response.data)
                render()
                onCloseModal()
                toast.success('package added')
            }
        } catch (error) {
            console.error('Fetching categories failed:', error);
            const errorMessages = getErrorMessage(error)
            const generalErrors = errorMessages.filter((error) => error.field === 'general' || error.field === error.field || error.field === 'name');
            if (generalErrors.length >= 0) {
                const newErrors = generalErrors.map(error => error.message);
                console.log(newErrors);
                newErrors.forEach(error => toast.error(error));
                return newErrors;
            }
            else if (error.message) {
                toast.error(`${error.message || 'Somthing went wrong'}`)
            }
        }
    };

    const onCloseModal = () => {
        setisOPen(false)
    }


    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full">
                    <div className="bg-[#80509F] px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-white">Customer Details</h3>
                    </div>
                    <div className='flex justify-center w-full px-5 py-3 '>
                        <img src={data.image} alt="Customer" className="w-full h-auto" />
                    </div>
                    <div className="bg-white px-4 py-4 sm:px-6 ">
                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold">Name: {data.name}</p>
                                <p>Email: {data.email_id}</p>
                                <p>Number: {data.number}</p>
                                <p>Date of Birth: {data.dob}</p>
                                <p>Address: {data.address}</p>
                                <p>District: {data.district}</p>
                                <p>State: {data.state}</p>
                                <p>Country: {data.country}</p>
                                <p>Pincode: {data.pincode}</p>
                            </div>
                            {data.isActive ?
                                (<div>
                                    <h4 className="font-semibold">Packages:</h4>
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package Name</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration (days)</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purchase Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {data.package_c.map((pkg) => (
                                                <tr key={pkg.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">{pkg.package_name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{pkg.package_price}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{pkg.package_duration}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">{pkg.purchase_date}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>)
                                :
                                (< div className='flex justify-center' >
                                    <button className='bg-[#9F5080] text-white px-5 py-2 text-sm rounded-md' onClick={() => { setisOPen(true) }}><p >Add Package</p></button>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={onClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#80509F] text-base font-medium text-white hover:bg-[#674081] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#80509F] sm:ml-3 sm:w-auto sm:text-sm">
                            Close
                        </button>
                    </div>
                </div>
            </div>
            <CustmorPackageModal packages={packages} isOpen={isOPen} onClose={onCloseModal} updatePackageInFormData={updatePackageInFormData} />
            <Toaster />
        </div >
    );
};

export default CustomerDetailsModal;
