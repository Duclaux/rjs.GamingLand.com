import React from 'react'

function CustomBtn(props) {
  return (
    <div>
        <button className={`px-[30px] py-[14px] bg-gradient-to-l to-[#FA8305] from-[#FB9E3C] rounded-[40px] poppins-medium text-[#fff] text-[16px] ${props.style}`}>
            <p>{props.title}</p>
            <img src={props.img} alt="" />
        </button>
    </div>
  )
}

export default CustomBtn