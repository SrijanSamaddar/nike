import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ViewModels from './ViewModels'
import { motion } from "framer-motion";
import { slideAnimation,headContainerAnimation,headTextAnimation,fadeAnimation } from "../config/motion";
import { Add } from '@mui/icons-material';
import { nikeLogo } from "../logo/logo";

const Hero = () => {
  
  return (
   <Grid container  height={"75vh"} >
    <Grid md={3}   sx={{display: 'flex',justifyContent:'center',alignItems: 'center'}}  display={{xs:"none",md:"block"}}  >
        <div className='max-sm:hidden font-[Futura] text-[7vw]  font-[700] leading-20'>
          <motion.h1  {...headTextAnimation } >Just</motion.h1>
          <motion.h1  {...headTextAnimation } >Do</motion.h1>
          <motion.h1 {...headTextAnimation } >It</motion.h1>
        </div>
       {/*  <motion.div {...slideAnimation('left')} className='max-sm:hidden bg-[#FE1010] w-[10vw] h-[15vw] absolute top-0 right-[96vw] z-[50] rounded-br-[2rem]'></motion.div> */}
    </Grid>
    <Grid md={6} xs={12} alignItems={"center"} justifyContent={"center"} sx={{display: 'flex'}}  >
    {/*  <h1 className='text-[29vw] opacity-5 font-[400] font-NikeFont max-sm:text-[65vw] '></h1> */}
      <motion.div {...headTextAnimation} className='absolute '><img className='w-[59vw] opacity-30  max-sm:w-[100vw]  ' src={nikeLogo} alt="" /></motion.div>
       <Stack   sx={{display:{sm:'none',xs:'block'}, position: 'absolute',top:'15%', zIndex: "999" }} direction={'column-reverse'} >
          <motion.h1 {...slideAnimation("right")} className='font-Oswold mt-10 ml-[2vw] font-[600] text-[22vw]'>Just Do It</motion.h1>
          {/* <motion.h1 className='font-Oswold font-[600] text-[15vw]'>It</motion.h1> */}
       </Stack>
      <div className='absolute'>
        <ViewModels/>
      </div>
       <Stack sx={{position: 'absolute',zIndex: '999', bottom: '12%',}} direction={'column'} display={{sm: 'none',xs: 'block'}}>
       <motion.h1 {...slideAnimation('down')} className='capitalize font-Oswold font-[700] text-[13vw]'>nike airforce </motion.h1>
          <motion.h1 {...slideAnimation('left')} className='capitalize  font-NikeFont text-[8vw]'>new collection</motion.h1>
          <motion.p className='text-2xl' {...slideAnimation('right')}>120$</motion.p>
         <div className='flex-center mt-5'> <motion.button {...slideAnimation('up')} type='filled' className='bg-[#ddd] py-2 px-8 rounded-full' >Add to Cart <Add/> </motion.button></div>
       </Stack>
    </Grid>
    <Grid md={3} display={{xs:"none",md:"block"}} sx={{display: 'flex',justifyContent: 'center',alignItems: 'center'}} >
        <div className='max-sm:hidden  flex flex-col gap-1' >
          <motion.h1 {...slideAnimation('down')} className='capitalize font-[Futura] tracking-tighter text-[3vw]'>nike airforce </motion.h1>
          <motion.h1 {...slideAnimation('left')} className='capitalize font-NikeFont text-[1.5vw]'>new collection</motion.h1>
          <motion.p className='text-xl' {...slideAnimation('right')}>120$</motion.p>
         <motion.button {...slideAnimation('up')} type='filled' className='bg-[#ddd] py-2 rounded-full mt-1' >Add to Cart <Add/> </motion.button>
          
        </div>
       {/*  <motion.div {...slideAnimation('right')} className=' max-sm:hidden bg-[#FE1010] w-[18vw] h-[18vw] absolute bottom-[40vw] right-[0] z-[50] rounded-bl-[2rem]'></motion.div> */}
        
    </Grid>
   </Grid>
  )
}

export default Hero
