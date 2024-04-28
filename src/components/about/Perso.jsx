import React from 'react'
import Container from '../global/Container'

import Perso1 from '../../assets/about/perso1.png'
function Perso() {
  return (
    <div className='bg-black lg:pt-[113px]'>
        <Container style='lg:px-[100px] lg:grid lg:grid-cols-3 gap-[95px] lg:py-0 space-y-[50px] lg:space-y-0'>
            {/* img */}
            <div className='lg:col-span-1 mx-auto w-fit'>
                <img src={Perso1} alt=""/>
            </div>

            {/* texte */}
            <div className='text-white space-y-[24px] max-w-[536px] lg:max-w-[600px] lg:col-span-2 mx-auto lg:mx-0'>
                <h3 className='poppins-medium text-[16px] text-center lg:text-left'>Lorem ipsum</h3>
                <h1 className='poppins-bold text-[18px] lg:text-[28px] text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                <p className='poppins-medium text-[16px] text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
        </Container>
    </div>
  )
}

export default Perso