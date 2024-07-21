import React from 'react'
import { collOne, collThree } from '../logo/logo'

const CollTwo = () => {
  return (
    <div className='h-[100vh] relative  w-full px-[6vw]'>
        <div  data-scroll  className='flex-center'>
      <h1 data-scroll data-scroll-speed='-0.1'  className=' leading-tight uppercase  font-Oswold font-[200] text-[3vw]'>1983. The Air Pegasus is launched as an accessible running shoe suitable for all runners. </h1>

      <img data-scroll-direction='horizontal'  data-scroll data-scroll-speed='0.8' className='w-[50vw]' src={collThree} alt="" />
      <div className='absolute bottom-[-5%] flex-center flex-col' >
      <h1 className='text-[1.5vw] font-[100]'>Limited Edition</h1>
      <h1 className='font-NikeFont tracking-tight uppercase font-[700] text-[5vw]'>Nike Pegasus Trail 4 Men's Trail-running Shoes Size</h1>
      </div>
        </div>
    
    </div>
  )
}

export default CollTwo
