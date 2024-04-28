import React from 'react'
import { Link } from 'react-router-dom'

function Indice(props) {
  return (
    <div className={`text-white flex text-[12px] poppins-regular items-center space-x-2 ${props.style}`}>
      <Link to='/'>Home</Link>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>

      <Link className='text-[#E47500]' to='/about'>{props.title}</Link>
    </div>
  )
}

export default Indice