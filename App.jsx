import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Nav2 from './components/Nav2'
import Highlights from './components/Highlights'
import Details from './components/Details'
import DialogText from './components/DialogText'
import Featured from './components/Featured'
import XXX from './components/XXX'
import FeatureTwo from "./components/FeatureTwo";
import Customizer from './components/Customizer'
import Trending from './components/Trending'
import DontMiss from "./components/Dontmiss";
import FeaturedThree from './components/FeaturedThree'
import ImageCarousal from './components/ImageCarousal'
import ModelCarousal from './components/ModelCarousal'
import LocomotiveScroll from "locomotive-scroll";
import Footer from './components/Footer'
import FooterTwo from './components/FooterTwo'
import CollTwo from './components/CollTwo'
import CollThree from './components/CollThree'
import Collfour from './components/Collfour'
import End from './components/End'
import Marqee from './components/Marqee'







const App = () => {
  const locomotive = new LocomotiveScroll({
    
  });
  return (
   
     <main className='w-full main  text-black '>
        <Header/>
         <Nav2/>  
        <Hero/>
       <Highlights/>
      <DialogText/>
      <Details/> 
      <Featured/>
     <Customizer/> 
      <Trending/>
     <FeatureTwo/>
     <DontMiss/>
     <FeaturedThree/>
     <ImageCarousal/>
     <ModelCarousal/>
      <Footer/>
      <FooterTwo/>
      <CollTwo/>
      <CollThree/>
      <Collfour/>
      <Marqee/>
       <End/>
    
     
    </main>
  
  )
}

export default App
