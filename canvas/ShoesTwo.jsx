import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import state from "../store/index";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
export default function Model(props) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/public/airforce.glb')
  useFrame((state,delta) => {
    easing.dampC(materials.verdel.color,snap.color,0.25,delta);
    easing.dampC(materials.material_grund.color,snap.color,0.25,delta);
    easing.dampC(materials.baksida_logga.color,snap.color,0.25,delta);
    easing.dampC(materials.framsida.color,snap.color,0.25,delta);
    easing.dampC(materials.framsida_vre.color,snap.color,0.25,delta);
    easing.dampC(materials.sko_sula_framifrn.color,snap.color,0.25,delta);
    easing.dampC(materials.sko_sula_underdel.color,snap.color,0.25,delta);
  
   
})
const string = JSON.stringify(state);
  return (
    <group rotation={[0,4.6,0]} {...props} dispose={null} key={state}>
      <group scale={0.108}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.material_grund}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.nike_logga}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.baksida_logga}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.framsida}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.verdel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.framsida_vre}
        />
      </group>
      <group scale={0.108}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.sko_sula_underdel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.sko_sula_sida}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.sko_sula_framifrn}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.metall_svart}
        position={[0.067, 0.044, -0.048]}
        rotation={[-3.008, -0.005, -2.218]}
        scale={[-0.01, 0.01, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials['Material.006']}
        scale={[0.11, 0.108, 0.108]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials['Material.004']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials['Material.001']}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.Material}
        scale={0.108}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials['Material.003']}
        position={[0.017, 0.116, -0.112]}
        rotation={[0.045, -0.145, 0.007]}
        scale={[0.108, 0.108, 0.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials.sula_insida}
        scale={[0.11, 0.108, 0.108]}
      />
    </group>
  )
}

useGLTF.preload('/public/airforce.glb')
