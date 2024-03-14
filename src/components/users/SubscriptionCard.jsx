import React from 'react';

const SubscriptionCard = () => {
    return (
        <div className="bg-[#fbe6fb] rounded-md p-6 shadow-md mb-5">
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2 text-[#5f1c7c] ">Kriyado</h2>
                <h3 className="text-lg font-semibold mb-2 text-[#5f1c7c]">Utility</h3>
                <p className="text-sm text-gray-700 font-poppins">Dive into savings on everyday essentials with Kriyado Utilities</p>
            </div>
            <div className="md:flex justify-between items-center mb-4">
                <div>
                    <div className='md:flex items-center gap-1'>
                        <p className="text-sm line-through text-gray-500"><span className='text-[#99a5d0]'>₹ 1499</span> </p>
                        <p className="text-[#64657e]"><span className='text-[#b31998] text-2xl font-bold'>₹ 999</span> for 1 year</p>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">for limited period *</p>
                </div>
                <button className="bg-[#9F5080] text-white px-4 py-2 rounded-md font-semibold">Subscribe Now</button>
            </div>
            <div>
                <h4 className="text-lg font-bold mb-2">Features</h4>
                <ul className="list-disc pl-4">
                    <li className='text-sm '>Groceries</li>
                    <li className='text-sm '>Super Market</li>
                    <li className='text-sm '>Hypermarkets</li>
                    <li className='text-sm '>Bakery/Grills/Teaspots</li>
                </ul>
            </div>
        </div>
    );
}

export default SubscriptionCard;
