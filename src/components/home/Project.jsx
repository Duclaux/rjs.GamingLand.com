import React from 'react'
import Container from '../global/Container'

import Pict1 from '../../assets/home/pict1.png'
import Pict2 from '../../assets/home/pict2.png'
import Pict3 from '../../assets/home/pict3.png'
import Pict4 from '../../assets/home/pict4.png'
import Pict5 from '../../assets/home/pict5.png'
import Pict6 from '../../assets/home/pict6.png'

function Project() {
  return (
    <Container style='lg:px-[100px] mt-[70px] space-y-[71px]'>
        <div className='text-center text-white space-y-[15px]'>
            <h1 className='poppins-bold text-[30px]'>Our Recent Projects</h1>
            <p className='poppins-regula text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. </p>
        </div>

        <div className='space-y-[33px] text-center'>
            <div className='lg:flex lg:items-center lg:justify-evenly space-y-[33px] lg:space-y-0'>
                <img src={Pict1} alt=""  className='w-full lg:w-auto'/>
                <img src={Pict2} alt=""  className='w-full lg:w-auto'/>
                <img src={Pict3} alt=""  className='w-full lg:w-auto'/>
            </div>

            <div className='lg:flex lg:items-center lg:justify-evenly space-y-[33px] lg:space-y-0'>
                <img src={Pict4} alt=""  className='hidden lg:flex'/>
                <img src={Pict5} alt=""  className='w-full lg:w-auto'/>
                <img src={Pict6} alt=""  className='w-full lg:w-auto'/>
            </div>

            <button className='uppercase text-white text-[20px] px-[30px] py-[10px] rounded-[10px] bg-[#FFFFFF]/10'>see all</button>
        </div>
    </Container>
  )
}

export default Project