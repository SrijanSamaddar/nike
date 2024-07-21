import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from "gsap";
import VideoCarousel from './VideoCarousel';
import {  nikeJordan, nikeLogo, graffione, graffitwo, graffithree, graffifour } from "../logo/logo";
import { motion } from "framer-motion";
import { slideAnimation,headTextAnimation, fadeAnimation } from "../config/motion";

const Highlights = () => {
   useGSAP(()=>{
    gsap.to("#title",{
     opacity:1,
     y:0,
     ease: 'power1.inOut',
     yoyo:true,
     

    })
    gsap.to('.link',{
       opacity:1,
       y:0,
       stagger: .25,
       duration: 2
    })
   },[])
  return (
    <section className='w-full px-[6vw]  py-[4vw]  overflow-hidden' >
      <div className='screen-max-width ' >
        <div className='w-full md:flex  items-end     justify-between' >
          <motion.h1 {...slideAnimation('left')} id='title' className='font-Oswold font-[700] text-[4vw] max-sm:text-[10vw]  uppercase'>get the Highlights.</motion.h1>
         <div className='items-center flex max-md:flex max-sm:justify-evenly   '  >
         {/*  <a className='link' href="">Watch the film</a> */}
          <motion.img {...fadeAnimation} src={graffitwo}  className='rotate-[30deg] w-[8vw] max-sm:w-[25vw] ' alt="" />  
          <motion.img {...fadeAnimation} src={graffione}  className='hidden max-sm:block w-[8vw] max-sm:w-[25vw] ' alt="" />  
          <motion.img {...fadeAnimation} src={graffithree}  className='rotate-[-30deg] w-[8vw] max-sm:w-[25vw] ' alt="" />          
         </div>
         
        </div>
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights
