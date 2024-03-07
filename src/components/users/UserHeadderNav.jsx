import React from 'react'
import { Link } from 'react-router-dom'

const UserHeadderNav = ({ icon, text, to }) => {
  return (
    <Link to={to} className="flex flex-col items-center px-2 py-2 mt-2 md:mt-0 cursor-pointer">
      <img src={icon} alt={text} className='w-4' />
      <p className='text-[#9F5080] text-xs font-sans ml-2'>{text}</p>
    </Link>
  )
}

export default UserHeadderNav
