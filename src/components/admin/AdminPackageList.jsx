import React, { useState } from 'react'
import './Admin.css'
import PackageEditModal from './PackageViewModal';
import PackageViewModal from './PackageViewModal';
const AdminPackageList = ({ packages, reRender }) => {

    const [openModal, setOpenmodal] = useState(false)
    const [modalPackageData, setmodalPackageData] = useState({});

    const closemodal = () => {
        setOpenmodal(false)
        reRender()
    }
    const openmodal = (data) => {
        setmodalPackageData(data)
        setOpenmodal(true)
        reRender()
    }

    return (
        <div className='w-full bg-white border border-gray-300 rounded-md p-1 px-4 my-3'>
            <div className='flex items-center justify-between p-2'>
                <p className='text-sm  w-3/12 font-bold '>Package Name</p>
                <p className='text-sm  w-3/12 font-bold '>Created at</p>
                <p className='text-sm  w-3/12 font-bold '>Status</p>
                <p className='text-sm  w-3/12 font-bold '>Discription</p>
                <p className='text-sm font-bold   pr-[50px]'>Action</p>
            </div>
            <hr className='bg-gray-600 m-1' />
            <div className='overflow-x-auto overflow-y-scroll h-[400px] customscrollbar'>

                {packages.map((pack, index) => (
                    <div className='flex items-center px-2 py-3  border-gray-300  border-b' key={pack.id}>
                        <p className='text-sm w-3/12 '>{pack.name}</p>
                        <p className='text-sm w-3/12  '>{pack.created_date}</p>
                        <div className='flex w-3/12'>
                            {pack.is_active ? (<p className='text-sm bg-green-500 px-3 rounded-md py-1 text-white'>Active</p>) : (<p className='text-sm bg-red-500 px-2 rounded-md py-1 text-white'>inActive</p>)}
                        </div>
                        <p className='text-sm w-3/12'>
                            {pack.discription.length > 50 ? pack.discription.slice(0, 20) + '...' : pack.discription}
                        </p>
                        <div className='flex justify-between  border border-gray-300   rounded-md bg-gray-100'>
                            <div className=' border-gray-300 p-1 px-4 border-r cursor-pointer' onClick={() => { openmodal(pack) }}>
                                <img src="/edit.png" alt="" className='w-5 ' />
                            </div>
                            <div className='p-1 px-4 cursor-pointer'>
                                <img src="/delete (3).png" alt="" className='w-5 ' />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {openModal && modalPackageData && <PackageViewModal packageData={modalPackageData} onClose={closemodal} />}
        </div>
    )
}

export default AdminPackageList
