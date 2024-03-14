import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import AnimatedText from '../ResuableComponents/AnimatedText'
import api, { get_api } from '../../utils/api';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const Pricing = () => {

    const user = useSelector(state => state.auth.user);


    function loadRazorpayScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const displayRazorpayPaymentSdk = async () => {
        try {
            const res = await loadRazorpayScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );

            if (!res) {
                toast.error("Razorpay SDK failed to load. Please check your internet connection.");
                return;
            }

            try {
                const result = await get_api(user?.token).post("payment/razorpay_order/", {
                    "package_id": "1"
                });

                if (!result) {
                    toast.error("Server error. Please check your internet connection.");
                    return;
                }

                const { merchantId = null, amount = null, currency = null, orderId = null } = result.data;


                const options = {
                    key: merchantId,
                    amount: amount.toString(),
                    currency: currency,
                    name: "Kriyado",
                    description: "Test Transaction",
                    order_id: orderId,
                    handler: async function (Response) {
                        try {
                            const response = await api.post('/payment/razorpay_callback/', { Response })
                            console.log('/payment/razorpay_callback/', response);
                            if (response.status === 200) {
                                toast.success('Successfully toasted!')
                            }
                        } catch (error) {
                            console.log('handler',error);
                        }
                    },
                    prefill: {
                        name: "Swapnil Pawar",
                        email: "swapnil@example.com",
                        contact: "9999999999",
                    },
                    notes: {
                        address: "None",
                    },
                    theme: {
                        color: "#61dafb",
                    },
                    data_payment_options: "upi",
                };

                const paymentObject = new window.Razorpay(options);


                paymentObject.open();
                paymentObject.on('payment.failed', async function (response) {
                    toast.error("Payment failed. Please try again.")
                    console.log("Payment Failed", response.error);
                    try {
                        const responseFromServer = await api.post('/payment/razorpay_callback/', { error: response.error });
                        console.log('/payment/razorpay_callback/', responseFromServer);
                    } catch (error) {
                        console.log(error);
                    }
                });

            } catch (error) {
                console.error("Error:", error);
                toast.error("An error occurred. Please try again later.");
            }

            return (
                <div className="App">
                    <header className="App-header">
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <p>Razorpay Payments! Try it Once</p>
                        <button className="App-link" onClick={displayRazorpayPaymentSdk}>
                            Pay Now To Test
                        </button>
                    </header>
                </div>
            );


        } catch (error) {
            console.error('Error creating Razorpay order:', error);
        }
    };


    return (
        <div className='bg-white rounded-lg m-6 p-6 shadow-lg md:flex  gap-3'>
            <div className=''>

                <div className=''>
                    <div className='flex justify-center py-8'>
                        <AnimatedText text='The packages for your needs' className='font-bold text-4xl font-poppins text-[#5f1c7c] ' />
                    </div>

                    <div className='flex justify-center '>
                        <div className="flex  border-2 border-[#80509F] rounded-lg px-2 py-2">
                            <div className=' rounded-md bg-[#80509F] text-white px-2 py-2 md:w-[150px] flex items-center justify-center '><p className='font-bold font-poppins text-center '>Basic</p></div>
                            <div className=' rounded-md  px-2 py-2 md:w-[150px] flex items-center justify-center'><p className='font-bold font-poppins  text-center'>Combo</p></div>
                            <div className=' rounded-md  px-2 py-2 w-[150px] flex items-center justify-center'><p className='font-bold font-poppins  text-center'>Grand Package</p></div>
                        </div>

                    </div>
                </div>
                <div className='md:flex  gap-4 py-8'>
                    <SubscriptionCard />
                    <SubscriptionCard />
                    <SubscriptionCard />
                </div>

                <div className='flex justify-center'>
                    <button
                        className='bg-purple-500 text-white px-4 py-2 rounded-md font-semibold'
                        onClick={displayRazorpayPaymentSdk} // Call the function when the button is clicked
                    >
                        Pay with Razorpay
                    </button>
                </div>

            </div>
            <Toaster />
        </div>
    )
}

export default Pricing
