import React, { useEffect, useRef } from 'react'
import { collFive, collFour, collOne, collThree, collTwo, FootLogo, graffiEight, graffifive, graffiSeven, graffisix, graffitwo, marQFive, marQFour, marQOne, nikeLogo } from '../logo/logo'
import { gsap, Power3 } from 'gsap';
import { GoArrowUpRight } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import Collfour from './Collfour';


const End = () => {
  const picEL = useRef([]);

  useEffect(() => {
    picEL.current.forEach((ele) => {
      let rot = 0;
      let diffRot = 0;

      const handleMouseMove = (dts) => {
        let diff = dts.clientY - ele.getBoundingClientRect().top;
        let curr = dts.clientX;
        diffRot = curr - rot;
        rot = curr;
        gsap.to(ele.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dts.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffRot),
        });
      };

      const handleMouseLeave = () => {
        gsap.to(ele.querySelector("img"), {
          opacity: 0,
          ease: Power3,
        });
      };

      ele.addEventListener("mousemove", handleMouseMove);
      ele.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        ele.removeEventListener("mousemove", handleMouseMove);
        ele.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);
  return (
    <div  className='py-[5vw] relative  w-full text-white bg-black flex-center  flex-col px-[3vw]'>

    <div  data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full mb-[2vw]'>
      <h1 className='text-[4vw] font-NikeFont uppercase font-[500]'>Social media and contact</h1>
      </div>  
      
     <div className='w-full flex-col flex-center' >
     <div ref={el => picEL.current[0] = el} className="relative flex items-center justify-between border-t border-gray-300 w-full">
        <img src={graffiEight} alt="projects" className="opacity-0 pointer-events-none h-[140%] z-[999] absolute transform -translate-x-1/2 -translate-y-1/2" />
        <h1 className="opacity-70 text-[5vw] text-gray-300 uppercase ml-[4vw]">Instagram</h1>
        <GoArrowUpRight className='text-[2vw]' />
      </div>
      <div ref={el => picEL.current[1] = el} className="relative flex items-center justify-between border-t border-gray-300 w-full">
        <img src={graffifive} alt="anime" className="opacity-0 pointer-events-none h-[140%] z-[999] absolute transform -translate-x-1/2 -translate-y-1/2" />
        <h1 className="opacity-70 text-[5vw] text-gray-300 uppercase ml-[4vw]">Facebook</h1>
        <GoArrowUpRight className='text-[2vw]' />
      </div>
      <div ref={el => picEL.current[2] = el} className="relative flex items-center justify-between border-t border-b border-gray-300 w-full">
        <img src={collThree} alt="coding" className="opacity-0 pointer-events-none h-[140%] z-[999] absolute transform -translate-x-1/2 -translate-y-1/2" />
        <h1 className="opacity-70 text-[5vw] text-gray-300 uppercase ml-[4vw]">youtube </h1>
        <GoArrowUpRight className='text-[2vw]' />
      </div>
      <div ref={el => picEL.current[3] = el} className="relative flex items-center justify-between border-t border-gray-300 w-full">
        <img src={collTwo} alt="projects" className="opacity-0 pointer-events-none h-[140%] z-[999] absolute transform -translate-x-1/2 -translate-y-1/2" />
        <h1 className="opacity-70 text-[5vw] text-gray-300 uppercase ml-[4vw]">Twitter</h1>
        <GoArrowUpRight className='text-[2vw]' />
      </div>
      <div ref={el => picEL.current[4] = el} className="relative flex items-center justify-between border-t border-b border-gray-300 w-full">
        <img src={collOne} alt="anime" className="opacity-0 pointer-events-none h-[140%] z-[999] absolute transform -translate-x-1/2 -translate-y-1/2" />
        <h1 className="opacity-70 text-[5vw] text-gray-300 uppercase ml-[4vw]">LinkedIN</h1>
        <GoArrowUpRight className='text-[2vw]' />
      </div>
      
     </div>
    
    <div className='flex mt-10  gap-[15vw] justify-center items-center w-full'>
     <div>
      <h1 className='uppercase'>
        Main Office 
      </h1>
      <h1 className='text-[1.5vw]' >Beaverton, Oregon, United States</h1>
      <button className='bg-white text-black px-[6vw] py-[1vw] rounded-full mt-4'>Contact Now</button>
     </div>
     <div>
      <img src={FootLogo} className='w-[15vw]' alt="" />
     </div>
     <div>
      <h1>
        Main Office 
      </h1>
      <h1 className='text-[1.5vw]' >Beaverton, Oregon, United States</h1>
      <button className='bg-white text-black px-[6vw] py-[1vw] rounded-full mt-4'>Contact Now</button>
     </div>
    
    </div>
   <div className='footerIcons border-b border-[#414040] pb-[4vw] flex justify-evenly mt-10 items-center w-full text-white'> 
     <FooterIcons title="Icons" options={[
     "Air Force 1",
     "Huarache",
     "Air Max 90",
     "Air Max 95",
     

     ]} />
      <FooterIcons title="Shoes" options={[
    "All Shoes",
    "Custom Shoes",
    "Jordan Shoes",
    "Running Shoes"
     

     ]} />
      <FooterIcons title="Clothing" options={[
    "All Clothing",
    "Modest Wear",
    "Hoodies & Pullovers",
    "Shirts & Tops"
     

     ]} />
      <FooterIcons title="Kids" options={[
     "Infant & Toddler Shoes",
     "Kids' Shoes",
     "Kids' Jordan Shoes",
     "Kids' Basketball Shoes"
     

     ]} />
     
   </div>
  
   <div className='flex justify-between px-[4vw] items-start w-full mt-16' >
      <FooterIcons title="Resources" options={[
       " Find A Store",
        "Become A Member",
        "Send Us Feedback"
      ]} />  
      <FooterIcons title="Help" options={[
       "Get Help",
      " Order Status",
       "Delivery",
       "Returns",
       "Payment Options",
       "Contact Us On Nike.com Inquiries",
       "Contact Us On All Other Inquiries"
      ]} /> 
       <FooterIcons title="Company" options={[
     "About Nike",
     "News",
     "Careers",
      "Investors",
      "Sustainability"
      ]} />  
      <div className='flex justify-center gap-1 items-center'>
      <CiGlobe />
        <p>India</p>
        </div> 
   </div>
   {/* <div className='px-[20vw] w-full' >
    <p className='text-xs opacity-50 mt-10 '>Nike, founded in 1964 by Bill Bowerman and Phil Knight, is a global leader in athletic footwear, apparel, and equipment. Renowned for its innovative designs, Nike combines cutting-edge technology with stylish aesthetics. The brand's iconic "Swoosh" logo and "Just Do It" slogan symbolize its commitment to inspiring athletes worldwide. Nike continually pushes the boundaries of performance and sustainability, developing products that enhance athletic performance and reduce environmental impact. The company's dedication to quality, creativity, and social responsibility has solidified its status as a leading force in the sports industry, influencing both professional athletes and everyday fitness enthusiasts.</p>
   </div> */}
      <div className='flex w-full gap-[2vw] absolute  bottom-[1%] left-[5%] justify-start items-center'>
     <p className='text-xs opacity-50' >© 2024 Nike, Inc. All rights reserved</p>
     <p className='text-xs opacity-50'>Terms of Sale</p>
     <p className='text-xs opacity-50'>Terms of Use</p>
     <p className='text-xs opacity-50'>Nike Privacy Policy</p>
     </div> 
    </div>
  )
}

export default End


export  const FooterIcons = ({title,options}) => {
    return (
       <div className='flex-col justify-center items-center' >
         <h1 className='font-[400] capitalize text-[1.2vw]' >{title}</h1>
         {
          options.map((items) => (
            <div className='flex-col justify-center items-center mt-1'>
              <a className='opacity-50 text-xs' href="#">{items}</a>
            </div>
          ))
         }
       </div>
    )
}
