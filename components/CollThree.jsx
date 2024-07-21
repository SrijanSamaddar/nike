import React from 'react'
import { collOne, collThree, collTwo } from '../logo/logo'

const CollThree = () => {
  return (
    <div className='h-[100vh] w-full px-[6vw]'>
    <div  data-scroll  className='flex-center relative'>
  <h1 data-scroll data-scroll-speed='-0.2'  className='leading-tight uppercase  font-Oswold font-[200] text-[2vw]'>First debuting as a limited release in Hawaii for the Honolulu Marathon in 1978 </h1>

  <img data-scroll-direction='horizontal'  data-scroll data-scroll-speed='0.8' className='w-[70vw]' src={collTwo} alt="" />


    <div   className='flex-col leading-[3.5vw] bottom-[0%] flex-center absolute'>
      <h1 className='font-[100]' >Limited Edition</h1>
    <h1  className='font-NikeFont font-[700] uppercase  bottom-[0] text-[5vw] ' >Nike Air Max</h1>
    </div>
    </div>
    
</div>
  )
}

export default CollThree
