import React from 'react'

function Container({children, style}) {
  return (
    <div className={`w-full px-[20px] md:px-0 md:w-[713px] md:mx-auto min-[850px]:w-[795px] lg:w-[969px] xl:w-[1225px] 2xl:w-[1481px] py-[20px] md:py-[44px] ${style}`}>{ children }</div>
  )
}

export default Container