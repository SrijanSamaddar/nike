import React from 'react'
import { Center,Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ShoesTwo from "../canvas/ShoesTwo";
import CameraRig from "../canvas/CamaraRig";
const ViewModelsTwo = () => {
  return (
   <Canvas  shadows
   style={{height: '92.5vh',width: '65vw'}}>
     <ambientLight/>
     <Environment preset='dawn'/>
     {/* <OrbitControls 
       enableZoom={false}
       rotateSpeed={.2}
       rotation={true}
     /> */}
     <CameraRig>
     <Center>
       <ShoesTwo scale={[4.2,4.2,4.2]}/>
     </Center>
     </CameraRig>

     
   </Canvas>
  )
}

export default ViewModelsTwo
