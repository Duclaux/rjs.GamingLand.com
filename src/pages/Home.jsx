import React from 'react'
import Header from '../components/home/Header'
import TradingGame from '../components/home/TradingGame'
import Spider from '../components/home/Spider'
import Industry from '../components/home/Industry'
import Project from '../components/home/Project'
import NewsLetter from '../components/home/NewsLetter'

function Index() {
  return (
    <>
      <Header />
      <div className='mt-[100px] space-y-[50px] mb-[100px]'>
        <TradingGame />
        <Spider />
        <Industry />
        <Project/>
        <NewsLetter/>
      </div>
    </>
  )
}

export default Index