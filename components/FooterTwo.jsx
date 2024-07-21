import React from 'react'
import { collFour, collOne, collThree, decOne, graffiSeven, graffithree, graffitwo } from '../logo/logo'

const FooterTwo = () => {
  return (
   <div className='h-[100vh] flex flex-col items-center w-full px-[6vw] '>
     <div   className='flex-center   text-black w-full  '>
    <div className='flex justify-between items-center '>
        <div data-scroll className='flex-center flex-col relative     '>
        <h1 data-scroll data-scroll-speed='0.3'  className='leading-tight uppercase  font-Oswold font-[200] text-[3vw]'>Nike designed the Air Jordan I based on the Chicago Bulls' red and black team colors with only 23% white. </h1>
        {/* <img data-scroll data-scroll-speed='0.'  src={decOne} className='w-[5vw] right-[2%] top-[-2%] absolute'  alt="" />
         */}
        </div>
        <img  data-scroll  data-scroll-speed='-0.2'  className='w-[50vw]' src={collFour} alt="" />
    </div>

    
 </div>
   <div className='w-full leading-[5vw] flex-col relative flex-center'>
    <h1 className='text-[1.5vw] font-[100]'>Limited Edition</h1>
    <h1 className='font-NikeFont tracking-tight uppercase font-[700] text-[5vw]'>Nike Air Jordan 1</h1>
   {/*  <img src={graffithree} className='w-[8vw] absolute  right-[26%] top-[30%]' alt="" /> */}
  
   </div>
 
   </div>
  )
}

export default FooterTwo
