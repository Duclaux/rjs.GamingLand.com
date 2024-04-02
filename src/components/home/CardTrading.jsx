import React from 'react'

import Fire from '../../assets/home/fire.svg'

function CardTrading(props) {
  return (
    <div className='space-y-[25px] w-fit mx-auto lg:mx-0'>
        <img src={props.img} alt="" />
        <div className='flex items-center space-x-[9px] w-fit mx-auto'>
            <img src={Fire} alt="" />
            <p className='poppins-regular text-[22px] text-white'>40 Followers</p>
        </div>
    </div>
  )
}

export default CardTrading