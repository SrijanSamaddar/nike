import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { graffiEight, graffiSeven, graffifive, graffifour, graffione, graffisix } from '../logo/logo';
import { imageList } from "../constants/index";

const ImageCarousal = () => {
 
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
    <div className='py-[2vw] w-full gap-[2vw] px-[3.5vw] flex flex-col'>
      <div>
      <h1 className='font-[400] text-[2vw]'>New in this week</h1>
      </div>
     <div  className='w-full'>
      <Carousel  draggable={true}  responsive={responsive}>
      <ImageCarousalItems id={1} />
      <ImageCarousalItems id={2} />
      <ImageCarousalItems id={3} />
      <ImageCarousalItems id={4} />
      <ImageCarousalItems id={5} />
      <ImageCarousalItems id={6} />
      </Carousel>
     </div>
    </div>
  )
}

export default ImageCarousal

export const ImageCarousalItems = ({ id, styles }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const foundItem = imageList.find(item => item.id === id);
    setData(foundItem);
  }, [id]);

  if (!data) return null;

  return (
    <div className="bg-[#F6F6F6] relative w-[99%] h-[50vh] flex flex-col items-center justify-center">
      <img 
        src={data.image} 
        className={`w-[80%] h-full object-contain ${styles} hover:scale-110 transform transition-transform duration-300`} 
        alt={data.name} 
      />
      <div className="text-black flex flex-col  justify-start items-start  top-5 absolute left-5 text-center">
        <h2 className="text-2xl uppercase font-[Futura]  font-semibold">{data.name}</h2>
        <p className="text-md">{data.category}</p>
        <p className="text-xs">{data.mrp}</p>
      </div>
    </div>
  );
};