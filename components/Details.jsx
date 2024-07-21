import React from 'react'
import { gsap } from "gsap";
import { useGSAP  } from "@gsap/react";
import { motion } from "framer-motion";
import { delOneSm, delThreesm, delTwoSm, detailsFive, detailsFour, detailsOne, detailsThree, detailsTwo, graffione, graffithree } from '../logo/logo'
import { Button } from '@mui/material'
import state from "../store/index";
import { useSnapshot } from 'valtio';


const Details = () => {
  const snap = useSnapshot(state);
  return (
    <div className='  px-[2vw] w-full h-[80vh] max-sm:h-[70vh] '>
       <div className=' relative h-[100%]'>
          <img className='w-full h-[100%] max-sm:hidden object-cover ' src={detailsThree} alt="" />
           <img src={delThreesm} className='hidden max-sm:bg-black max-sm:block  w-full h-[100%] ' alt="" />
          <div className='absolute max-sm:top-[65%] max-sm:gap-5 max-sm:left-[12%] flex flex-col leading-[4vw] left-20 top-[55%] text-white  z-50'>
            <p className='text-xl ml-2 max-sm:text-[3vw] max-sm:font-[500] font-[700]'>Nike Style By</p>
          <div className='flex items-center gap-20 justify-center'>
          <h1 className='font-Oswold font-[700] max-sm:text-[10vw]  text-[4vw]'>NIKE </h1>
          <h1 className='font-Oswold font-[700] max-sm:text-[10vw] text-[4vw]'>CORTEZ</h1>
          <img className=' w-36 rotate-[30deg] absolute left-[30%] max-sm:left-[25%] max-sm:w-32' src={graffithree} alt="" />
          </div>
            <p className='text-[1vw] max-sm:hidden'>unmistakable icon  back with new colours and meterials</p>
            <Button  type='filled' sx={{backgroundColor: 'white',color: 'black',width: '100px',borderRadius: '0.5rem',fontWeight: '700', textTransform: 'capitalize',":hover":{backgroundColor: '#ddd'}}} >Shop</Button>
          </div>
       </div>
    </div>
  )
}

export default Details