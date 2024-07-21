import { motion } from 'framer-motion'
import React from 'react'
import { marQFive, marQFour, marQOne,marQSix,marQThree,marQTwo } from "../logo/logo";
function Marqee() {
  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 20, // Adjust duration as needed
        },
      },
    },
  };
  const marqueeVariantsY = {
    animate: {
      x: ['-100%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 20, // Adjust duration as needed
        },
      },
    },
  };
  const images = [marQOne, marQTwo, marQThree, marQFour, marQFive, marQSix];
  return (
    <div className='w-full px-[5vw] flex-col py-[2vw]   overflow-hidden  '>
      <div className='w-full flex-center flex-col'>
         <h1 className='font-[400] capitalize'>owned by nike</h1>
         <h1 className='font-Oswold font-[700] text-[2vw] uppercase tracking-tighter'>Top Companies</h1>
      </div>
      <div className='relative'>
        <div className=' absolute bg-gradient-to-r from-white ... top-0 left-[-1%] z-10 w-[200px] h-[140px]'></div>
        <div className=' absolute  z-10 bg-gradient-to-l from-white ... top-0 right-[-1%] w-[200px] h-[140px]'></div>
        <div className=' absolute bg-gradient-to-r from-white ... top-0 left-[-1%] z-10 w-[200px] h-[140px]'></div>
        <div className=' absolute  z-10 bg-gradient-to-l from-white ... top-0 right-[-1%] w-[200px] h-[140px]'></div>
        <div className=' absolute  z-10   bottom-0 bg-gradient-to-r from-white ... left-0-[-1%] w-[200px] h-[140px]'></div>
        <div className=' absolute  z-10 bg-gradient-to-l from-white ... bottom-0 right-[-1%] w-[200px] h-[140px]'></div>
        <div className=' absolute  z-10   bottom-0 bg-gradient-to-r from-white ... left-0-[-1%] w-[200px] h-[140px]'></div>
        <div className=' absolute  z-10 bg-gradient-to-l from-white ... bottom-0 right-[-1%] w-[200px] h-[140px]'></div>
      <div className='images mt-[2vw]  overflow-hidden flex-center gap-[5vw]'>
      <motion.div
        className='flex gap-[5vw]'
        variants={marqueeVariants}
        animate="animate"
      >
        {
           images.concat(images).map((pics,index) => (
             <img src={pics} alt="" 
              className='w-[10vw] object-contain'
             />
          ))
        }
      </motion.div>
    </div>
    <div className='images mt-[5vw]  overflow-hidden flex-center gap-[5vw]'>
      <motion.div
        className='flex gap-[5vw]'
        variants={marqueeVariantsY}
        animate="animate"
      >
        {
           images.concat(images).map((pics,index) => (
             <img src={pics} alt="" 
              className='w-[10vw] object-contain'
             />
          ))
        }
      </motion.div>
    </div>
      </div>
    </div>
  )
}

export default Marqee