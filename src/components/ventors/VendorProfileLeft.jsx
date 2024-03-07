import React from 'react'

const VendorProfileLeft = () => {
    return (
        <div className='pt-[2rem]'>

            <div>

                <div className='pb-4'>
                    <p className='font-medium text-sm text-center py-2'>Vendor Name</p>
                    <p className='text-xs text-gray-500 text-center '>Shop Address,Location</p>
                    <p className='text-xs  text-center font-mono'>VID 1641316</p>
                </div>

                <div className='flex justify-center gap-5 py-3'>
                    <div className='w-4'>
                        <img src="/instagram.png" alt="" />
                    </div>
                    <div className='w-4'>
                        <img src="/facebook (1).png" alt="" />
                    </div>
                    <div className='w-4'>
                        <img src="/twitter.png" alt="" />
                    </div>
                    <div className='w-4'>
                        <img src="/youtube.png" alt="" />
                    </div>
                    <div className='w-4'>
                        <img src="/gmail.png" alt="" />
                    </div>
                    <div className='w-4'>
                        <img src="/link.png" alt="" />
                    </div>
                </div>

                <div className='flex gap-5 justify-center py-5'>
                    <div>
                        <p className='text-sm font-bold text-center'>185</p>
                        <p className='text-xs text-gray-400'>Custmors</p>
                    </div>
                    <div>
                        <p className='text-sm font-bold text-center'>185</p>
                        <p className='text-xs text-gray-400'>Upvotes</p>
                    </div>
                    <div>
                        <p className='text-sm font-bold text-center'>185</p>
                        <p className='text-xs text-gray-400'>Followings</p>
                    </div>
                </div>

                <div className='border border-gray-300 rounded-sm mt-7 mb-4 mx-5 flex p-2'>
                    <div className='w-6/12'>
                        <div ><p className='text-xs '>Join Date</p></div>
                        <div><p className='text-sm font-medium'>January 4, 2024</p></div>
                    </div>
                    <div className='w-6/12'>
                        <div ><p className='text-xs '>Join Date</p></div>
                        <div><p className='text-sm font-medium'>January 4, 2024</p></div>
                    </div>
                </div>

                <div className='border border-gray-300 p-5  shadow-sm mx-5'>
                    <div className='p-1 pb-0'>
                        <p className='text-[10px]'>Legal</p>
                    </div>
                    <div className='flex justify-between p-1'>
                        <p>KYC Status</p>
                        <div className='bg-[#99FDD2] flex items-center justify-center  rounded-full font-sans px-3' >
                            <p className='text-[10px] font-bold tracking-wider'>Verified</p>
                        </div>
                    </div>
                    <div className='flex justify-between p-1'>
                        <p>KYC Details</p>
                        <div className='bg-gray-100 flex justify-center items-center rounded-full px-3'>
                            <p className='text-[10px] font-bold'>View</p>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300 mx-5 my-5 '>
                    <img className='' src="https://imgs.search.brave.com/RBtQypA79kWPy5kCvpWCEMsXtfFAaFYHr_quDnrsR_I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/LmNvbS9pbWFnZS1j/ZG4vaW1hZ2VzL2t0/czkyOHBkL3Byb2R1/Y3Rpb24vOGU5OWEw/ODlkYjcyZDYyNjVl/MWRhM2ViNDJiZDJj/NGVjY2E1NThhYi05/MjB4NjAwLnBuZz93/PTEwODAmcT03Mg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default VendorProfileLeft
