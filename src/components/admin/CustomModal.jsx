import React, { useEffect, useState } from 'react';
import { getErrorMessage } from '../../utils/Validation';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { get_api } from '../../utils/api';

const CustomModal = ({ isOpen, onClose, data, reRender }) => {
    const [isEditMode, setisEditMode] = useState(false)
    const [formData, setFormData] = useState({});
    const [Categories, setCategories] = useState({
        categories: ''
    });
    const [effect, seteffect] = useState(false);
    const user = useSelector(state => state.adminAuth.adminUser)

    useEffect(() => {
        setFormData(data)
        const updateCategories = () => {
            const formattedCategoryIds = data.categories.map(category => category.id);
            setFormData(prevState => ({
                ...prevState,
                categories: formattedCategoryIds,
            }));
        };
        updateCategories()
    }, [effect])

    const closing = () => {
        setisEditMode(false)
        onClose()
    }

    const saving = () => {
        setisEditMode(false)
        UpdatePackage()
        console.log('Saved data:', formData);

    }

    const handleInputChange = (e) => {
        const { name, value, options } = e.target;
        if (name === 'categories') {
            const selectedCategories = Array.from(options)
                .filter(option => option.selected)
                .map(option => option.value);
            setFormData({ ...formData, [name]: selectedCategories });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const setEdit = async () => {
        await fetchCategories()
        setisEditMode(true)
        seteffect(prevEffect => !prevEffect);
    }

    const fetchCategories = async () => {
        try {
            const response = await get_api(user?.token).get(`/shop/categories/?is_active=true`);
            if (response.status === 200) {
                const formattedCategories = response.data.map(category => ({
                    id: category.id,
                    name: category.name
                }));
                // setFormData({ ...formData, categories: formattedCategories });
                setCategories({ ...Categories, categories: formattedCategories });
            }
        } catch (error) {
            console.error('Fetching handleAddType failed:', error);
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

    const UpdatePackage = async () => {
        try {
            const response = await get_api(user?.token).put(`/shop/packages/${formData.id}/update/`, formData);
            if (response.status === 200) {
                toast.success('package updaated successfuly')
                reRender()
                onClose()
            }
        } catch (error) {
            console.error('Fetching handleAddType failed:', error);
            const errorMessages = getErrorMessage(error)
            const generalErrors = errorMessages.filter((error) => error.field === 'general' || error.field === 'non_field_errors' || error.field === 'name');
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
        <div className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full">
                    <div className="bg-white px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">{isEditMode ? 'Edit Package' : 'Package'}</h3>
                        {isEditMode && <p className="mt-1 text-sm text-gray-500">Enter your details:</p>}
                    </div>
                    <div className="bg-gray-50 px-4 py-4 sm:px-6">
                        <div >
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold ">Name:</label>
                                {isEditMode ? (
                                    <input defaultValue={data.name} onChange={handleInputChange} type="text" id="name" name="name" autoComplete="name" className="mt-1 outline-[#80509F] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                ) : (
                                    <p className="text-sm  text-gray-700">{data.name}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-semibold ">Description:</label>
                                {isEditMode ? (
                                    <textarea defaultValue={data.discription} onChange={handleInputChange} id="description" name="discription" autoComplete="description" className="mt-1 outline-[#80509F] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                                ) : (
                                    <p className="text-sm text-gray-700 ">{data.discription}</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="type" className="block text-sm font-semibold ">Type:</label>
                            {isEditMode ? (
                                <select
                                    defaultValue={data.type}
                                    id="type"
                                    onChange={handleInputChange}
                                    name="type"
                                    autoComplete="type"
                                    className="mt-1 focus:ring-indigo-500 outline-[#80509F] focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                >
                                    <option value="BASIC">BASIC</option>
                                    <option value="COMBO">COMBO</option>
                                    <option value="ALL">ALL</option>
                                </select>

                            ) : (
                                <p className="text-sm  text-gray-700">{data.type}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="categories" className="block text-sm font-medium ">Categories:</label>
                            {isEditMode ? (
                                <select
                                    onChange={handleInputChange}
                                    id="categories"
                                    name="categories"
                                    autoComplete="categories"
                                    className="mt-1 focus:ring-indigo-500 outline-[#80509F] focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    multiple
                                >
                                    {data.categories.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                            selected
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                    {Categories.categories.filter((category) => !data.categories.some((c) => c.id === category.id)).map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                            multiple
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <div>
                                    {data.categories.map((category, index) => (
                                        <p key={index} className="text-sm  text-gray-700">{category.name}</p>
                                    ))}
                                </div>
                            )}

                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-[#80509F] px-5 py-1 text-white rounded-md' onClick={isEditMode ? () => setisEditMode(false) : () => setEdit()}>
                                {isEditMode ? `Back` : 'Edit'}
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={saving} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#80509F] text-base font-medium text-white hover:bg-[#674081] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#80509F] sm:ml-3 sm:w-auto sm:text-sm">
                            Save
                        </button>
                        <button onClick={closing} type="button" className="mt-3 w-full inline-flex justify-center text-white rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#9F5080] text-base font-medium  hover: focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default CustomModal;
