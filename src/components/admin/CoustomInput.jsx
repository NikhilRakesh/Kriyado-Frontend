import React from 'react'

const CoustomInput = ({ headder, Placeholder, type, name, onChange, onBlur, required, value, branchId }) => {
    return (
        <div className='w-full py-2'>
            <p className='text-xs text-gray-400'>{headder}</p>
            <div className='py-2'>
                <input type={type} name={name} required={required}
                    className='border outline-0 text-sm text-gray-400  border-gray-200 p-3 w-full rounded-sm bg-gray-100'
                    placeholder={Placeholder}
                    onChange={onChange}
                    onBlur={onBlur} value={value}
                    data-branch-id={branchId} />
            </div>
        </div>
    )
}

export default CoustomInput
