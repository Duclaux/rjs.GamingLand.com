import React, { useState } from 'react'
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom'
import Container from './Container'

function Navbar() {

  const [ nav, setNav ] = useState(false)

  const showNav = () => {
    setNav(!nav)
  }

  return (
    <Container>
      <div className='flex items-center justify-between space-x-3'>
          {/* logo */}
          <div>
            <p className='text-white text-[28px] poppins-extrabold uppercase'>logo</p>
          </div>

          {/* liens */}
          <div className={ nav ? `text-black md:text-white absolute top-[75px] right-0 rounded-l-[30px] py-[30px] md:py-0 bg-white w-[90%] flex flex-col space-y-[48px] md:space-y-0 md:flex-row md:space-x-[48px] lg:space-x-[88px] text-center poppins-regular text-[16px] md:relative md:bg-transparent md:top-0 md:w-auto transition-all duration-500 liens items-center` : `absolute top-[-100%] right-0 rounded-l-[30px] py-[30px] md:py-0 bg-white w-[90%] flex flex-col space-y-[48px] md:space-y-0 md:flex-row md:space-x-[48px] lg:space-x-[88px] text-center poppins-regular text-[16px] md:relative md:right-0 md:bg-transparent md:top-0 md:w-auto transition-all duration-500 text-black md:text-white liens items-center`}>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/about'>About us</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/news'>News</NavLink>
            <NavLink to='/contact'>
              <button className='px-[28.46px] py-[11px] bg-[#FA9021] rounded-[6px] text-white text-[13px]'>Contact us</button>
            </NavLink>
          </div>

          {/* icons close et hambergur */}
          <div className='md:hidden cursor-pointer' onClick={showNav}>
            {
              nav ? <RiCloseLine size={35} color='#FA9021'/> : <RiMenu4Line size={35} color='#FA9021'/>
            }
          </div>
      </div>
    </Container>
  )
}

export default Navbar