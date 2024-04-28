import React from 'react'


function CardTeam(props) {
  return (
    <div className='text-center w-fit px-[86px] pt-[35px] pb-[30px] bg-[#1C140F] rounded-[20px] mx-auto lg:mx-0'>
        <img src={props.img} alt="" className='w-fit mx-auto'/>

        <div>
            <h1 className='poppins-semibold text-[29px] text-white'>John peter</h1>
            <h1 className='poppins-light text-[#E8E8E8] text-[16px]'>COO</h1>
        </div>
    </div>
  )
}

export default CardTeam