import React from 'react'
import { graffifive, graffithree, trendOne,trendTwo } from '../logo/logo'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Dontmiss = () => {
    useGSAP(() => {
        gsap.to('.image-holderse', {
            ease: 'power2.inOut',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            rotate: 0,
            scrollTrigger: {
                trigger: '.image-holderse',
                start: 'top center', // Change the start position
                end: '+=100%', // Adjust the end value
                scrub: 1,
            },
        });
    
        gsap.to('.image-holderse img', {
            ease: 'power2.inOut',
            scale: 1,
            scrollTrigger: {
                trigger: '.image-holderse',
                start: 'top center', // Change the start position
                end: '+=100%', // Adjust the end value
                scrub: 1,
            },
        });
      }, []);
   
  return (
    <div className='w-full max-sm:hidden'>
    <div className='px-[3vw] py-[2vw] relative'>
        <div>
            <h1 className='text-[2vw] font-[400] mb-[1vw]'>Trending</h1>
        </div>
        <div className='website-content'>
            <div className='image-holderse relative h-[70vh] clip-polygon rotate-[30deg]'>
                <img className='relative scale-[1.5]  h-[100%] w-full object-cover' src={trendTwo} alt='' />
            </div>
        </div>
    </div>  
</div>
  )
}

export default Dontmiss
