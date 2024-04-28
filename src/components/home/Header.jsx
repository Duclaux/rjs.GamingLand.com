import React from 'react'
import Container from '../global/Container'

import Joy_stick from '../../assets/home/joy_stick.png'
import Cry from '../../assets/home/cry.png'
import Unreal from '../../assets/home/unreal.png'
import Unity from '../../assets/home/unity.png'
import CustomBtn from '../global/CustomBtn'

function Header() {
  return (
    <Container style='lg:px-[100px]'>
        <div className='lg:flex lg:items-center lg:justify-between'>
            {/* cote texte */}
            <div className='w-full'>
                <div className='text-center lg:text-start'>
                    <h1 className='poppins-bold text-[#E87D0E] text-[17px] md:text-[20px]'>Proved By prodesigner</h1>
                    <p className='poppins-bold text-[#fff] text-[40px] md:text-[50px] mt-[17px] mb-[26px]'>Work that we<br/> produce for our<br/> clients</p>
                    <p className='poppins-medium text-[#fff] text-[16px] mb-[50px]'>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the industry's<br/> standard.</p>
                    <CustomBtn title='Get more details'/>
                </div>
            </div>

            {/* cote image */}
            <div className='w-full mt-[70px] lg:mt-0'>
                <div className='lg:h-96 relative'>
                    <div className='flex justify-between lg:justify-evenly items-center'>
                        <img src={Cry} alt="" className='w-[101px] h-[91px]'/>
                        <img src={Unreal} alt="" className=' w-[59px] h-[64px]'/>
                        <img src={Unity} alt="" className='lg:hidden w-[96px] h-[30px]'/>
                        <img src={Unity} alt="" className='hidden lg:flex absolute left-[-50px] top-[50%] w-[96px] h-[30px]'/>
                    </div>
                </div>

                <img src={Joy_stick} alt="" className='hidden lg:flex absolute top-0 -z-10 min-[1536px]:right-[230px]'/>
            </div>
        </div>
    </Container>
  )
}

export default Header