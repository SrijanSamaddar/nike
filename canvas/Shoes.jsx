import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
import state from "../store/index";
import { useSnapshot } from "valtio";
import { easing } from "maath";
export default function Model(props) {
  const { nodes, materials } = useGLTF('/public/ataksuki.glb')
  const snap = useSnapshot(state);
  useFrame((state,delta) => {
       easing.dampC(materials,snap.color,0.25,delta);
  })
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 5]}
      />
    </group>
  )
}

useGLTF.preload('/public/ataksuki.glb')
