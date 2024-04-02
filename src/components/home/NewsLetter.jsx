import React from 'react'
import Container from '../global/Container'

function NewsLetter() {
  return (
    <Container style='lg:px-[100px] mt-[70px] space-y-[50px] lg:space-y-[35px] z-20 relative'>
        <div className='space-y-[25px] text-white'>
            <h2 className='poppins-semibold text-[20px] lg:text-[25px]'>Lorem Ipsum</h2>
            <p className='poppins-regular text-[13px] lg:text-[16px] mt-[32px]'>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry.</p>
        </div>

        <div className='px-[20px] lg:px-[50px] text-center py-[42px] bg-[#1C140F] rounded-[15px] lg:flex items-center justify-between'>
            <div className='space-y-[10px] text-white mb-[15px] lg:mb-0 text-start'>
                <h2 className='poppins-semibold text-[20px] lg:text-[25px]'>Stay in the loop</h2>
                <p className='poppins-regular text-[13px] lg:text-[16px]'>Subscribe to receive the latest news and updates about TDA.<br className='hidden lg:flex'/> We promise not to spam you!.</p>
            </div>

            <div className='bg-white pr-[20px] pl-[20px] py-[6px] rounded-[8px] flex items-center justify-between mb-[25px] lg:mb-0'>
                <input type="email" className="bg-transparent w-auto" placeholder='Enter email address'/>
                <button className='px-[23.5px] py-[9px] bg-[#DC7000] rounded-[8px] poppins-regular text-[#fff] text-[16px] hidden lg:flex'>Continue</button>
            </div>

            <button className='px-[23.5px] py-[9px] bg-[#DC7000] rounded-[8px] poppins-regular text-[#fff] text-[16px] lg:hidden w-fit mx-auto'>Continue</button>
        </div>
    </Container>
  )
}

export default NewsLetter