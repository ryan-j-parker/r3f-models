/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React from 'react';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function CeilingLight() {
  const ceilingLightRef = useRef();
//   const bulbRef = useRef();
  const model = useLoader(GLTFLoader, '/ceiling-light/modern_ceiling_lamp_01_4k.gltf');

  return (
    <>
      <group ref={ceilingLightRef} dispose={null} position-y={7.265} scale={6}>
        {/* <mesh ref={bulbRef} position-y={0.45}>
          <sphereGeometry args={[0.025, 32, 32]} />
          <pointLight 
            castShadow={false}
            receiveShadow={false} 
            intensity={0.25} 
            position={[0, 0, 0]} 
            color={'0xffeb82'}
          />
        </mesh> */}
        <primitive object={model.scene} />
      </group>
    </>
  );
}

useGLTF.preload('/ceiling-light/modern_ceiling_lamp_01_4k.gltf');