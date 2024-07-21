import React from 'react'
import { Stack, TextField } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { navOpt } from "../config/nav";
const Navlist = ({w="100%"}) => {
  return (
    <Stack width={w} direction={"column"} alignItems={"self-start"} >
      {
        navOpt.map((i) => (
            <a className='font-semibold  pl-5 py-5 text-xl' href="#">{i}</a>
        ))
      }
    
    <Stack sx={{mt:'2vw'}} gap={"2vw"} direction={"row"} alignItems={"center"} justifyContent={"center"} >
    <CiSearch className='w-5 h-5 rounded-full '/>
            <input className='w-[80%] bg-[#ddd]  border-none outline-none rounded-full px-2 py-1' placeholder='Search' type='text' />   
    </Stack>
      
    </Stack>
  )
}

export default Navlist
