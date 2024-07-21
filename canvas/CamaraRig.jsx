import React, { useRef } from 'react';
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import state from "../store/index";
const CamaraRig = ({children}) => {
    const group = useRef();
    const snap = useSnapshot(state);
    useFrame((state, delta) => {
        const isBreakPoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;
    
        let target = [-0.2, -0.2, 2.3];
        if(isBreakPoint) {
            target = [-0.1, -0.4, 6];
        } else if (isMobile) {
            target = [-0.1, -0.4, 5];
        }
        
        easing.damp3(state.camera.position, target, 0.25, delta);
        easing.damp3(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);
      });   
  return (
   <group ref={group}>
    {children}
   </group>
  )
}

export default CamaraRig
