import React, { useEffect, useState } from 'react'
import { graffiSeven, modelEight, modelFive, modelOne, modelSix, modelThree, modelTwo } from '../logo/logo'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarousalItemsList } from '../constants';
/* import { CarousalItemsList } from '../constants'; */

const ModelCarousal = () => {
    
    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div /* data-scroll data-scroll-scetion data-scroll-speed='-0.2' */ className='py-[2vw] w-full gap-[1vw] px-[3vw] flex flex-col'>
      <div className=''>
        <h1 className='text-[2vw] font-[400]'>Member Benefits</h1>
      </div>
     <div className='w-full'>
     <Carousel className='flex ' responsive={responsive}>
     <Items id={1} image={modelOne} style={"w-full object-cover opacity-70"} button={"Shop"} />
     <Items id={2} image={modelThree} style={"w-full object-cover opacity-70"} button={"Customise"}/>
     <Items id={3} image={modelFive} style={"w-full object-cover opacity-70"} button={"Celebrate"} />
     <Items id={4} image={modelSix} style={"w-full object-cover opacity-70"} button={"Customise"}/>
     <Items id={5} image={modelEight} style={"w-full object-cover opacity-70"} button={"Customise"} />
     
      
</Carousel>;
     </div>
     <div className='w-full flex-center flex-col leading-[4vw]' >
      <h1 className='capitalize text-[0.95vw] font-[500]'>grab it fast</h1>
      <h1 className='uppercase font-Oswold tracking-tight font-[700] text-[6vw]'>don't waste your time </h1>
      <h1>sale open for limited time, Customise your designs</h1>
     </div>
    </div>
  )
}

const Items = ({ image, style, id,button }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const foundItem = CarousalItemsList.find(item => item.id === id);
    setData(foundItem);
  }, [id]);

  if (!data) return null; // Or some loading state

  return (
    <div  className='w-[95%]   bg-black flex justify-center items-center  h-[85vh] relative'>
      <img src={image} className={`${style} hoverImage `} alt="" />
      <div key={data.id} className='absolute bottom-[15%] left-[5%]'>
        {data.intro.map((text, i) => (
          <h1 key={i} className='text-white text-[1vw]'>{text}</h1>
        ))}
        {data.product.map((product, i) => (
          <h1 key={i} className='text-white text-[2vw]'>{product}</h1>
        ))}
      </div>
      <button className="bg-white absolute text-black py-[.4vw] px-[1.5vw]  font-[500] rounded-full bottom-[8%] left-[5%]" >{button}</button>
    </div>
  );
};

export default ModelCarousal
