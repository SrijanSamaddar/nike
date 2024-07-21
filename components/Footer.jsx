
import React, { useEffect, useRef } from 'react';
import { graffifive } from '../logo/logo';


const Footer = () => {


  return (
    <div data-scroll-sticky className='flex-center relative h-[100vh] w-full'>
      <div className='flex gap-[5vw] font-Oswold font-[500] text-[15vw]'>
      <div data-scroll className='text-black flex'>
        <span data-scroll data-scroll-speed='0.9'   >C</span>
        <span data-scroll data-scroll-speed='0.6'>O</span>
        <span data-scroll data-scroll-speed='0.4'>L</span>
        <span data-scroll data-scroll-speed='0.5'>L</span>
        <span data-scroll data-scroll-speed='0.1'>E</span>
      </div>
      <div className='text-black flex'>
      
        <span data-scroll data-scroll-speed='0.2'>C</span>
        <span data-scroll data-scroll-speed='0.5'>T</span>
        <span data-scroll data-scroll-speed='0.5'>I</span>
        <span data-scroll data-scroll-speed='0.4'>O</span>
        <span data-scroll data-scroll-speed='0.6'>N</span>
        <span data-scroll data-scroll-speed='0.9'>S</span>
      </div>
      </div>
      <img data-scroll-direction="horizontal"  data-scroll-section data-scroll data-scroll-speed='0.8' src={graffifive} className='w-[30vw] top-[20%] absolute' alt="" />
    </div>
  )
}

export default Footer
