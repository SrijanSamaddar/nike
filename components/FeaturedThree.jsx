import React from 'react'
import { graffiEight, graffiSeven, graffifive, graffifour, graffione, graffisix, graffithree, graffitwo } from '../logo/logo'

const FeaturedThree = () => {
  return (
    <div className='flex py-[2vw]  relative flex-col items-center justify-center'>
        <div>
            <h1 className='capitalize font-[700] text-[1vw]'>Nike Football</h1>
        </div>
        <div className='flex w-full justify-center '>
            <h1 className='uppercase font-[700]  font-NikeFont text-[7.5vw]'>2024 National t</h1>
            <h1 className='uppercase font-[700]  font-NikeFont text-[7.5vw]'>eam collections</h1>
        </div>
        <img src={graffiSeven}  className='absolute w-[10vw]  z-[-50] right-[12%] top-[-8%]' alt="" />
        <button className='bg-[#191d1d]  text-[#ddd] font-[500] px-[1.5vw] py-[.3vw] rounded-full  hover:bg-black' >Shop</button>

    
    </div>
  )
}

export default FeaturedThree
