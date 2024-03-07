import React from 'react'
import CoustomInput from '../admin/CoustomInput'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const VendorDeclaration = () => {
    
    return (
        <div className='bg-gray-50 rounded-lg h-[550px] overflow-scroll customscrollbar  '   >
            <div className=' mb-4 px-5'>

                <h1 className='font-bold'>DeclarationConfirmation</h1>
                <div className='border h-[800px] my-5 border-gray-300 p-3 rounded-sm customscrollbar overflow-scroll'>

                    <ul >
                        <li >
                            <p className='text-sm leading-6'>Kriyado Empanelment Terms and Conditions</p>
                            <p className='text-sm leading-6'>Welcome to the Kriyado Card Empanelment Program! We appreciate your interest in joining our network of healthcare providers
                                to offer exclusive discounts to our cardholders. Before you proceed with the empanelment process, please carefully read and
                                understand the terms and conditions outlined below:
                            </p>
                        </li>
                        <li className='mt-3'>
                            <h2 className=" font-semibold mb-2  text-sm">1. Eligibility</h2>
                            <p>Hospitals, clinics, and pharmacies interested in participating must meet the eligibility criteria set by Kriyado Card. Only entities with a valid license and compliant with local healthcare regulations are eligible to empanel.</p>
                        </li>
                        <li>
                            <h2 className="text-sm mt-5 font-semibold mb-2">2. Empanelment Process</h2>
                            <p className='text-sm'>Submission of the empanelment form does not guarantee automatic inclusion in the Kriyado Card network. Our team will review the information provided, and successful applicants will be notified.</p>
                        </li>
                        <li>
                            <h2 className="text-sm mt-5 font-semibold mb-2">3. Discount Offer</h2>
                            <p className='text-sm'>By submitting the empanelment form, you agree to offer a specified percentage (%) discount on outpatient consultations, medicine purchases, and diagnostic tests to Kriyado Card cardholders. The entered percentage should be transparent, consistent, and applicable across all services mentioned.</p>
                        </li>
                        <li>
                            <h2 className="text-sm mt-5 font-semibold mb-2">4. Contract Period</h2>
                            <p className='text-sm'>Upon successful empanelment, the agreement is valid for a specified contract period. Renewal terms will be communicated at the end of each contract period.</p>
                        </li>
                        <li>
                            <h2 className="text-sm mt-5 font-semibold mb-2">5. Privacy and Confidentiality</h2>
                            <p className='text-sm'>Privilege Health Card respects the privacy and confidentiality of the information provided in the empanelment form. We will not disclose any sensitive information without your explicit consent.</p>
                        </li>
                        <li>
                            <h2 className="text-sm mt-5 font-semibold mb-2">6. Termination of Empanelment</h2>
                            <p className='text-sm'>Kriyado Card reserves the right to terminate empanelment with any healthcare provider at any time due to violation of terms,
                                unethical practices, or any other reasons deemed necessary.</p>
                        </li>
                        <li>
                            <h2 className="text-sm mt-5 font-semibold mb-2">7. Termination of Empanelment</h2>
                            <p className='text-sm'>Empaneled healthcare providers may be featured on Kriyado Card marketing materials, including the website and promotional
                                content, to highlight the available discounts.</p>
                        </li>
                    </ul>
                </div>
                <div className=' '>
                    <div className=''>
                        <CoustomInput headder='Name' Placeholder='Enter' />
                    </div>
                    <div className=''>
                        <CoustomInput headder='Designation' Placeholder='Enter' />
                    </div>
                </div>

                <div className='flex gap-3 mt-4'>
                    <div>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <p className='text-sm'>I hereby affirm that we have agreed to extend the specified discount rate for Kriyado Card holders, as outlined in the terms of the agreement with Kriyado Card Management. We hereby agree to provide mentioned exclusive discounts on mentioned categories to the customers of Kriyado Card with effective from the date of submission</p>
                    </div>
                </div>

                <div className='flex gap-3 mt-4'>
                    <div>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <p className='text-sm'> I confirm that I am duly authorized to make this commitment on behalf of our institution and that the terms of this agreement are understood and accepted by our organization. This declaration is made in good faith and signifies our commitment to honor the agreed-upon discount rate for Kriyado Card holders.</p>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-14 gap-5'>
                    <button className='bg-[#80509F] py-2 text-sm 3/12 text-white mb-2 px-10 rounded-md'>Previous</button>
                    <Link to='/Vendor-register/Vendor-EmailSubmission'>
                        <button className='bg-[#9F5080] py-2 text-sm 3/12 text-white mb-2 px-10 rounded-md'>Next</button>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default VendorDeclaration
