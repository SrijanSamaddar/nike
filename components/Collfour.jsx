import React from 'react'
import { collFive } from '../logo/logo'

const Collfour = () => {
  return (
    <div className='h-[100vh] pt-[10vw] mb-[5vw] w-full px-[6vw]'>
    <div  data-scroll  className='flex-center relative'>
  <h1   className='leading-tight uppercase  font-Oswold font-[200] text-[3vw]'>First debuting as a limited release in Hawaii for the Honolulu Marathon in 1978 </h1>

  <img data-scroll data-scroll-speed="-0.2" className='w-[50vw]' src={collFive} alt="" />

   <div className='absolute leading-[4vw] bottom-[-20%]  flex-col flex-center '>
    <h1 className='font-[100]'>Limited Edition</h1>
    <h1 className='font-Oswold font-[700] uppercase text-[5vw] tracking-tighter'>Nike Air jordan Red 5</h1>
   </div>
    </div>
  
</div>
  )
}

export default Collfour
