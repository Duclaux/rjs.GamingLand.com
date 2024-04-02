import React from 'react'


import Arrow from '../../assets/home/arrow.svg'

function CardIndustry(props) {
  return (
    <div className='w-fit space-y-[30px] mx-auto lg:mx-0'>
        <div className='bg-white rounded-full w-fit p-[18px] mx-auto'>
            <img src={props.img} alt="" />
        </div>

        <div className='space-y-[25px]'>
            <p className='poppins-medium text-[16px]'>{props.h1}</p>
            <img src={Arrow} alt="" className='w-fit mx-auto'/>
        </div>
    </div>
  )
}

export default CardIndustry