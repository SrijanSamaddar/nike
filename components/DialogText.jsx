import React from 'react'
import { graffifive, graffifour, graffithree, graffitwo } from '../logo/logo'
import { Button } from '@mui/material'


const DialogText = () => {
  return (
    <div className='w-full max-sm:py-[6vw] max-sm:pb-[9vw] pb-[4vw]'>
      <div className='leading-[3vw] flex max-sm:flex-col max-sm:gap-[3vw] justify-center items-center flex-col'>
        <p className='text-[1vw] max-sm:text-[3vw] font-[600]'>Lifestyle Running Shoes</p>
       <div className='flex items-center justify-center relative'>
       <h1 className='font-[700] font-Oswold text-[4vw] max-sm:text-[10vw]'>EXTRA-ORDINARY</h1>
       <img className='max-sm:hidden w-28 absolute right-[99%] bottom-[-30%]  rotate-[50deg]' src={graffitwo} alt="" />
       <img className='hidden max-sm:block absolute top-[-400%] left-[80%] w-[25vw]' src={graffifive} alt="" />
       </div>
        <p className='text-[0.75vw] max-sm:text-[1.5vw]  font-[500]'>Meet the latest collection of retro running inspired shoes.The unlikely heroes of your easiest styling hack.</p>
        <div className='flex max-sm:hidden justify-evenly gap-[5vw] mt-2 items-center'>
          <Button  sx={{backgroundColor: '#222', px: '1vw',color: 'white' , fontWeight: '600',borderRadius: '100px',":hover":{backgroundColor: 'black'}}} >Buy It</Button>
          <Button sx={{backgroundColor: '#222',px: '1vw',color: 'white' , fontWeight: '600',borderRadius: '100px',":hover":{backgroundColor: 'black'}}} >Style It</Button>
        </div>
        <div className='hidden max-sm:block flex   '>
          <button className='bg-black text-white text-xs px-[3vw] py-[1vw]' >Buy It</button>
          <button className='bg-black ml-10 text-white text-xs px-[3vw] py-[1vw]' >Style It</button>
        </div>
      </div>
    </div>
  )
}

export default DialogText
