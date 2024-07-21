import React, { useState } from 'react'
import { graffifive, graffifour, graffisix } from "../logo/logo";
import { motion } from 'framer-motion';

const FeatureTwo = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseMove = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const xPos = event.clientX - rect.left;
      const yPos = event.clientY - rect.top;
      setX(xPos - rect.width / 2);
      setY(yPos - rect.height / 2);
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      setX(0);
      setY(0);
    };
    return (
       <div className='flex justify-center relative pb-[2vw] flex-col items-center'>
        <div className='w-full uppercase flex justify-center gap-[7vw]'>
            <h1 className='tracking-tighter font-[700] text-[5.5vw]  font-Oswold'>SKY</h1>
             <h1 className='tracking-tighter font-[700] text-[5.5vw]  font-Oswold' >No limits</h1>
        </div>
        <motion.img
        src={graffisix}
        className='absolute w-[13vw] left-[37%] -rotate-12 top-0'
        alt=""
        animate={{
          x: isHovered ? x : 0,
          y: isHovered ? y : 0,
          rotate: isHovered ? -12 + (x / 20) : -12,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ zIndex: isHovered ? 10 : 1 }} // Optional: bring image to front on hover
      />
        <div className='w-[50%] flex fex-col litems-center'>
            <h1 className='font-[500] text-[1rem] ' >griend,slide,carve,flip - tackle every trick fearless and set no limits. Inspirted by her heritage and the confidence skateboarding inspires in the young Olympian. </h1>
           
        </div>
         <button className='bg-[#191d1d] text-[#ddd] font-[500] px-[1.5vw] py-[.3vw] rounded-full mt-[1vw] hover:bg-black' >Shop</button>
       </div>
    )
}

export default FeatureTwo
