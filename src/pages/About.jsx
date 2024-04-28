import React from 'react'
import Header from '../components/about/Header'
import WorkWish from '../components/about/WorkWish'
import Container from '../components/global/Container'
import Perso from '../components/about/Perso'
import Team from '../components/about/Team'
import NewsLetter from '../components/home/NewsLetter'

function About() {
  return (
    <>
      <Header/>
      <div className='mt-[100px] space-y-[50px] mb-[100px]'>
        <Container style='lg:px-[100px]'>
          <WorkWish/>
        </Container>
        <Perso/>
        <Container style='lg:px-[100px]'>
          <Team/>
        </Container>
        <NewsLetter/>
      </div>
    </>
  )
}

export default About