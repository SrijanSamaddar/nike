import React, { useState } from 'react'
import { navOpt } from "../config/nav";
import { VscThreeBars } from "react-icons/vsc";
import {nikeJordan} from "../logo/logo"
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { motion,AnimatePresence } from "framer-motion";
import { Drawer, Stack } from "@mui/material";

import { slideAnimation,fadeAnimation,headContainerAnimation,headTextAnimation } from "../config/motion";
import Navlist from '../shared/Navlist';

const Header = () => {
  const [mobile,setmobile] = useState(false);
  const  handleMobile = ()=>{
    setmobile((prev) => !prev);
  }
  const closeDrawe = () => {
     setmobile(false);
  }

  return (
    <header className='flex justify-between  items-center max-sm:px-5 px-10 py-3'>
       <motion.div {...slideAnimation('left')} className='w-10 h-10 z-[999]'>
          <img src={nikeJordan} alt="jordan" className='max-sm:ml-3'  />
       </motion.div>
       <motion.div {...slideAnimation('down')} className='max-sm:hidden max-lg:hidden max-md:hidden flex gap-6 ml-[9vw]'>
         {
            navOpt.map((items) => (
                <a href="#" className='font-[600] hover:text-[#4c4c4c]'>{items}</a>
            ))
         }
       </motion.div>
       <motion.div className='z-[999]' {...slideAnimation('right')}>
          <div className='flex items-center justify-center gap-2'>
            <div className='w-[180px] max-sm:hidden py-1 px-3 gap-1  bg-[#ddd] rounded-l-full rounded-r-full overflow-hidden flex justify-center items-center'>
            <CiSearch className='w-5 h-5 rounded-full '/>
            <input className='w-[80%] bg-[#ddd]  border-none outline-none rounded-full px-2 py-1' placeholder='Search' type='text' />   
        </div> 
            <div className='hover:bg-[#ddd] rounded-full p-3'> <CiHeart  size={20}/></div>
            <div className='hover:bg-[#ddd] rounded-full p-3'> <FiShoppingBag size={20} /> </div>
            <div  onClick={handleMobile}  className='hover:bg-[#ddd] hidden max-sm:block rounded-full p-3'><VscThreeBars/> </div>
            <Drawer sx={{display:{md: "none", xs:"block"}}} open={mobile} onClose={closeDrawe} >
                <Navlist w={"70vw"} />
            </Drawer>
          </div>
       </motion.div>
    </header>
    
  )
}



export default Header
