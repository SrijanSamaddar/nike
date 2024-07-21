import React, { useRef } from 'react'
import { AccumulativeShadows,RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef()
  return (
   
    <AccumulativeShadows
    frames={100}
    ref={shadows}
    temporal
    alphaTest={0.85}
    scale={10}
    rotation={[Math.PI / 2, 0, 0]}
    position={[1, 1, -0.10]}
    color={'#white'} // Set the color to white or any desired color to match the background
  >
    <RandomizedLight
      radius={9}
      amount={1}
      intensity={3}
      ambient={25}
      position={[0, 6, -10]}
    />
  </AccumulativeShadows>
  
  )
}

export default Backdrop
