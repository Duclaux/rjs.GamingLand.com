import React from 'react'
import { 
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoTwitter,
    BiLogoLinkedin
} from "react-icons/bi";


import Container from './Container'

function Footer() {
  return (
    <div className='bg-black text-white'>
        <Container>
            <div className='text-center lg:text-start space-y-[60px] md:space-y-0 md:grid md:grid-cols-4'>
                {/* logo */}
                <div className='md:col-span-1'>
                    <p className='text-[28px] poppins-extrabold uppercase'>logo</p>
                    <p className='poppins-regular text-[16px] mt-[15px] mb-[25px]'>Lorem Ipsum is simply dummy text of the<br className=''/> printing and typesetting industry. </p>
                    <h1 className='text-[16px] poppins-extrabold uppercase'>@Fredy Fox</h1>
                </div>
                
                {/* first group links */}
                <div className='md:col-span-1'>
                    <ul>
                        <h1 className='text-[17px] poppins-medium uppercase mb-[15px]'>About us</h1>

                        <li className='text-[16px] poppins-regular mb-[10px]'>Zeux</li>
                        <li className='text-[16px] poppins-regular mb-[10px]'>Portfolio</li>
                        <li className='text-[16px] poppins-regular mb-[10px]'>Careers</li>
                        <li className='text-[16px] poppins-regular'>Contact us</li>
                    </ul>
                </div>

                {/* second group links */}
                <div className='md:col-span-1'>
                    <h1 className='text-[17px] poppins-medium uppercase mb-[20px]'>Contact us</h1>

                    <p className='text-[16px] poppins-regular mb-[11px]'>Lorem Ipsum is simply dummy text<br/> of the printing and typesetting<br/> industry. </p>
                    <li className='text-[16px] poppins-regular list-none'>+908 89097 890</li>
                </div>

                {/* reseaux sociaux */}
                <div className='md:col-span-1 md:items-end flex items-center justify-between min-[456px]:justify-normal min-[456px]:w-fit min-[456px]:mx-auto min-[456px]:space-x-[30px]'>
                    <div className='px-[12px] py-[11px] bg-white rounded-full w-fit hover:bg-[#DC7000] transition-all duration-500'>
                        <BiLogoFacebook className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-black'/>
                    </div>

                    <div className='px-[12px] py-[11px] bg-white rounded-full w-fit hover:bg-[#DC7000] transition-all duration-500'>
                        <BiLogoInstagram className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-black'/>
                    </div>

                    <div className='px-[12px] py-[11px] bg-white rounded-full w-fit hover:bg-[#DC7000] transition-all duration-500'>
                        <BiLogoTwitter className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-black'/>
                    </div>

                    <div className='px-[12px] py-[11px] bg-white rounded-full w-fit hover:bg-[#DC7000] transition-all duration-500'>
                        <BiLogoLinkedin className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-black'/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer