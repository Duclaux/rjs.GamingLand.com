import React from 'react'
import Container from '../global/Container'
import CardTrading from './CardTrading'

import Img1 from '../../assets/home/img1.png'
import Img2 from '../../assets/home/img2.png'
import Img3 from '../../assets/home/img3.png'
import Img4 from '../../assets/home/img4.png'

function TradingGame() {
  return (
    <Container style='lg:px-[100px] mt-[70px]'>

        <div className='space-y-[60px]'>
            <div className='text-center space-y-3 lg:text-start lg:space-y-0 lg:items-center lg:flex lg:justify-between'>
                <h1 className='poppins-bold text-[31px] text-white'>Currently Trending Games</h1>
                <button className='uppercase text-white text-[20px] px-[30px] py-[10px] rounded-[10px] bg-[#FFFFFF]/10'>see all</button>
            </div>

            <div className='space-y-[40px] lg:space-y-0 lg:items-center lg:flex lg:justify-between'>
                <CardTrading img={Img1}/>
                <CardTrading img={Img2}/>
                <CardTrading img={Img3}/>
                <CardTrading img={Img4}/>
            </div>
        </div>
    </Container>
  )
}

export default TradingGame