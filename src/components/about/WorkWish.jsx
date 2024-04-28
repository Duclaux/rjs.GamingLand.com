import React from 'react'
import CardWork from './CardWork'

function WorkWish() {
  return (
    <div className='space-y-[30px]'>
        <p className='text-white text-[24px] poppins-semibold text-center lg:text-left'>Why work with us</p>

        <div className='space-y-[19px] lg:space-y-0 lg:flex lg:items-center lg:justify-between'>
            <CardWork/>
            <CardWork/>
            <CardWork/>
        </div>
    </div>
  )
}

export default WorkWish