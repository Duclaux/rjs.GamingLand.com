import React from 'react'
import Indice from '../global/Indice'
import Container from '../global/Container'
import CustomBtn from '../global/CustomBtn'

import Arrow1 from '../../assets/about/arrow1.svg'

function Header() {
  return (
    <Container style='lg:px-[100px]'>
        <Indice title="About us" style='mb-[38px]'/>
        <div className='lg:flex lg:items-center lg:justify-between'>
            {/* cote texte */}
            <div className='w-full'>
                <div className='text-center lg:text-start'>
                    <p className='poppins-bold text-[#fff] text-[40px] md:text-[50px] mt-[17px] mb-[26px]'>Lorem Ipsum is simply<br/> dummy text of the printing<br/> and.</p>
                    <p className='poppins-medium text-[#fff] text-[16px] mb-[50px]'>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the industry's<br/> standard.</p>
                    <CustomBtn title='Get in touch' img={Arrow1} style='flex items-center space-x-[20px] mx-auto lg:mx-0'/>
                </div>
            </div>
            
            {/* images */}
            <div></div>
        </div>
    </Container>
  )
}

export default Header