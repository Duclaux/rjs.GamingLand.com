import React from 'react'
import CardTeam from './CardTeam'

import Bill1 from '../../assets/about/bill1.png'
import Bill2 from '../../assets/about/bill2.png'
import Bill3 from '../../assets/about/bill3.png'
import Bill4 from '../../assets/about/bill4.png'


function Team() {
  return (
    <div className='space-y-[40px]'>
        <h1 className='poppins-semibold text-white text-[25px] text-center lg:text-left'>Our Team</h1>
        <div className='space-y-[17px] lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:space-x-[28px]'>
            <CardTeam img={Bill1}/>
            <CardTeam img={Bill2}/>
            <CardTeam img={Bill3}/>
            <CardTeam img={Bill4}/>
        </div>
    </div>
  )
}

export default Team