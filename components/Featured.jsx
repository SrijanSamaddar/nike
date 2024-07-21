import React from 'react'
import { detailsFour } from '../logo/logo'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Featured = () => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo('.header .letters:first-child', {
            x: -window.innerWidth * 8, // Move the font to the left initially
            scale: 0,
        }, {
            x: 0, // Move back to center
            scale: 5,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.header',
                start: 'top bottom', // Change the start position
                end: '+=50%', // Adjust the end value
                scrub: 1,
            },
        });
        gsap.fromTo('.header .lettersSE', {
            x: -window.innerWidth * 8, // Move the font to the left initially
            scale: 0,
        }, {
            x: 0, // Move back to center
            scale: 5,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.header',
                start: 'top bottom', // Change the start position
                end: '+=50%', // Adjust the end value
                scrub: 1,
            },
        });
        gsap.fromTo('.header .lettersSR', {
            x: window.innerWidth * 8, // Move the font to the right initially
            scale: 0,
        }, {
            x: 0, // Move back to center
            scale: 5,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.header',
                start: 'top bottom', // Change the start position
                end: '+=50%', // Adjust the end value
                scrub: 1,
            },
        });
    
        gsap.fromTo('.header .letters:last-child', {
            x: window.innerWidth * 8, // Move the font to the right initially
            scale: 0,
        }, {
            x: 0, // Move back to center
            scale: 5,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.header',
                start: 'top bottom', // Change the start position
                end: '+=50%', // Adjust the end value
                scrub: 1,
            },
        });
        gsap.to('.image-holder', {
            ease: 'power2.inOut',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            rotate: 0,
            scrollTrigger: {
                trigger: '.image-holder',
                start: 'top center', // Change the start position
                end: '+=100%', // Adjust the end value
                scrub: 1,
            },
        });
    
        gsap.to('.image-holder img', {
            ease: 'power2.inOut',
            scale: 1,
            scrollTrigger: {
                trigger: '.image-holder',
                start: 'top center', // Change the start position
                end: '+=100%', // Adjust the end value
                scrub: 1,
            },
        });
    }, []);

    return (
        <div className='w-full max-sm:hidden'>
            <div className='px-[3vw] py-[3vw] relative'>
                <div>
                    <h1 className='text-[2vw] font-[400] mb-[1vw]'>Featured</h1>
                </div>
                <div className='header justify-evenly font-NikeFont absolute text-[4vw] top-[52%] left-[52%] -translate-x-[50%] -translate-y-[50%] font-[700] flex w-full z-[99] '>
                    <div className='letters flex uppercase'>
                        <div>G</div>
                        <div>E</div>
                        <div>T</div>
                    </div>
                    <div className='lettersSE  ml-[13vw] flex uppercase'>
                        <div>o</div>
                        <div>v</div>
                        </div>
                        <div className='lettersSR  mr-[13vw] flex uppercase'>
                        <div>E</div>
                        <div>R</div>
                        </div>
                        <div className='letters flex uppercase'>
                        <div>I</div>
                        <div>T</div>
                        </div>
                </div>
                <div className='website-content'>
                    <div className='image-holder relative h-[90vh] clip-polygon rotate-[30deg]'>
                        <img className='relative scale-[2] h-[100%] w-full object-cover' src={detailsFour} alt='' />
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Featured
