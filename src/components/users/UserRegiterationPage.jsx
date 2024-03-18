import React from 'react'
import CreateUser from './CreateUser'
import AnimatedText from '../ResuableComponents/AnimatedText'

const UserRegiterationPage = () => {
    return (
        <div className='p-10'>
            <div className='mb-8'>
                <AnimatedText text='Register and unlock Exclusive Kriyado Discounts Today!' className='font-bold text-4xl font-poppins text-[#5f1c7c] ' />
            </div>
            <div className='bg-white border rounded-lg px-8 py-8'>
                <CreateUser />
            </div>
        </div>
    )
}

export default UserRegiterationPage
