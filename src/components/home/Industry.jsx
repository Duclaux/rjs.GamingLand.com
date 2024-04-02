import React from 'react'
import Container from '../global/Container'
import CardIndustry from './CardIndustry'

import Phone from '../../assets/home/phone.png'
import Shape from '../../assets/home/shape.png'
import Vr from '../../assets/home/vr-glasses.png'
import Desktop from '../../assets/home/desktop.png'
import D3 from '../../assets/home/D3.png'
import Ps4 from '../../assets/home/ps4.svg'

function Industry() {
  return (
    <div className='py-[93px] text-white text-center relative industry'>
        <div className='w-full h-full absolute top-0 bg-black opacity-60'></div>
        <Container style='lg:px-[100px] mt-[70px] space-y-[50px] lg:space-y-[100px] z-20 relative'>
            <div className='space-y-[25px]'>
                <h1 className='text-[25px] lg:text-[30px] poppins-bold'>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry.</h1>
                <p className='poppins-regular text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,</p>
            </div>

            <div className='space-y-[50px]'>
                <div className='lg:flex lg:items-center lg:justify-evenly space-y-[50px] lg:space-y-0'>
                    <CardIndustry img={Phone} h1='Mobile Game Development'/>
                    <CardIndustry img={Shape} h1='PC Game Development'/>
                    <CardIndustry img={Ps4} h1='PS4 Game Development'/>
                    <CardIndustry img={Vr} h1='AR/VR Solutions'/>
                </div>

                <div className='lg:flex lg:items-center lg:justify-evenly lg:px-[200px] space-y-[50px] lg:space-y-0'>
                    <CardIndustry img={Desktop} h1='AR/ VR design'/>
                    <CardIndustry img={D3} h1='AR/VR Solutions'/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Industry