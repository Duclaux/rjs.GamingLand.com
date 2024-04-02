import React from 'react'
import Container from '../global/Container'
import Spider1 from '../../assets/home/spider.png'

function Spider() {
  return (
    <div>
        <Container style='lg:px-[100px] mt-[70px]'>
            <div className='text-white'>
                <h1 className='poppins-semibold text-[35px] text-center mb-[50px] lg:mb-[67px]'>Lorem Ipsum is simply dummy text of the<br className='hidden lg:flex'/> printing and typesetting industry.</h1>

                <div>
                    <h2 className='poppins-semibold text-[20px] lg:text-[25px]'>Lorem Ipsum</h2>
                    <p className='poppins-regular text-[13px] lg:text-[16px] mt-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the industry's standard dummy text<br/> ever since the 1500s,</p>
                    <img src={Spider1} alt="" className='w-full mt-[45px]'/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Spider