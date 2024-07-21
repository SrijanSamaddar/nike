import Lights from "../components/Lights"; // Make sure to import Lights properly
import * as THREE from 'three';
import Shoes from "../canvas/Shoes";
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CamaraRig from "../canvas/CamaraRig";
import Backdrop from "../canvas/Backdrop";
import ShoesTwo from "../canvas/ShoesTwo";

const ViewModels = () => {
  return (
    <Canvas 
     shadows
     style={{height: '92.5vh',width: '65vw'}}
    >
        <ambientLight/>
        <Lights/>
         <Environment preset="sunset" /> 
        <CamaraRig>
           {/* <Backdrop/>  */}
        <Center >
           <Shoes scale={[2,2,2]}/>
        </Center>
        </CamaraRig>
    </Canvas>
  )
}

export default ViewModels
