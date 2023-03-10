/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CoffeeTable from './CoffeeTable';
import LoadingState from './LoadingState';

export default function Sofa(props) {
  const { nodes, materials } = useGLTF('/sofa/sofa_02_4k.gltf');
  const model = useLoader(GLTFLoader, '/sofa/sofa_02_4k.gltf');
  const sofaRef = useRef();

  return (
    <group 
      {...props} 
      dispose={null}
      ref={sofaRef}
      position-x={-2.2}
      position-y={-1.99}
      position-z={-4}
      rotation-y={0.5}
      scale={4.6}
    >
      {/* <mesh
        name="sofaBase" 
        castShadow 
        receiveShadow 
        geometry={nodes.sofa_02_Base.geometry}
        material={nodes.sofa_02_Base.material}
        scale={1.2}
      />
      <mesh
        name="sofaSeat"
        castShadow
        receiveShadow
        geometry={nodes.sofa_02_Seat.geometry}
        material={nodes.sofa_02_Seat.material}
        scale={1.25}
        position-y={-0.025}
      /> */}
      <primitive object={model.scene} />
      <CoffeeTable />
    </group>
    // <Suspense fallback={<LoadingState />}>
    //   <primitive
    //     object={model.scene}
    //     scale={7.5}
    //     position-y={-7}
    //     position-x={9.4}
    //     position-z={-3.5}
    //     rotation-y={-0.5}
    //   />
    // </Suspense>
  );
}

useGLTF.preload('/sofa/sofa_02_4k.gltf');
