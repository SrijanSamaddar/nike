import React, { useState } from 'react'

import ViewModelsTwo from './ViewModelsTwo'
import { EditorTabs } from '../constants'
import Tabs from "../components/Tabs";
import ColorPicker from './ColorPicker';
import { graffifive, graffione, graffisix, graffithree, nikeLogo } from '../logo/logo';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


const Customizer = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
          scrollTrigger:{
               trigger:'.two',
               start: '0% 50%',
               end: '120% 50%',
               scrub: 1,
               
               
           }
       });
       
       useGSAP(() => {
           tl.to('.text-hover',{
               width: '100%',
              
              
           })
       })
      
  const [activestabs,setactiveTabs] = useState('');
  const generateTab = () => {
    switch (activestabs) {
       case 'colorpicker':
          return <ColorPicker/>
          break;
  
          default:
          return null;
    }
 }
  return (
    <div className='w-full flex relative justify-center items-center  h-[100vh]' >
       <div className='absolute max-sm:left-[16%] max-sm:top-[5%] flex flex-col items-center  top-[0%] left-[38%] ' >
       <div className='flex  gap-2 items-center '>
       <h1 className='text-[3vw] uppercase max-sm:text-[8vw] font-[700] tracking-tight font-Oswold'>Let's Customize It</h1>
       <img src={graffithree} className='w-[5vw] max-sm:w-[12vw] rotate-[25deg]' alt="" />
       </div>
       <p className='mr-10 max-sm:text-[3vw] font-[500] tracking-tighter'>Customized it the way you want</p>
      </div> 
     
      <div className='w-full   flex  items-center '>
        <img src={graffifive} alt="" className='max-sm:w-[28vw] max-sm:top-[39%] max-sm:left-[75%] w-[15vw] absolute top-[35%] right-[0%] z-10' />
        <img src={graffisix} className='max-sm:w-[20vw] max-sm:top-[40%] max-sm:left-[5%] w-[11vw] absolute top-[45%] rotate-[60deg] left-[8%] z-10' alt="" />
            <div className='one '>
                <div className='text-[8vw] font-Oswold max-sm:top-[43%] absolute left-[4.5%]  top-[40%]  flex w-[100%]  items-center font-[700] uppercase opacity-[.2]'>Classic White air Force 1</div>
            </div>
            <div className='two '>
                <div className='text-[8vw] font-Oswold left-[4.5%] top-[40%] absolute  overflow-hidden  w-[100%] whitespace-nowrap flex  items-center text-hover  font-[700] uppercase max-sm:top-[43%] '>Classic White air Force 1</div>
            </div>
        </div>
      <div className='max-sm:bottom-[3%] absolute left-[13%] bottom-[5%]' >
        <ViewModelsTwo/>
      </div>

      <div className='absolute  bottom-[5%]'>
       <div className='glassmorphism w-[10vw]  rounded-lg flex flex-col gap-2 justify-center items-center ml-1 py-4   '>
       {
          EditorTabs.map((tabs) => (
          <Tabs clickhandler={() => setactiveTabs(tabs.name)} key={tabs.name}  tabs={tabs}/>
          ))
        }
        {generateTab()}
       
       </div>
      </div>
    </div>
  )
}

export default Customizer 
