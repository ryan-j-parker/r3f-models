/* eslint-disable react/no-unknown-property */
import { Plane, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import LoadingState from './LoadingState';
import Plant from './Plant';

export default function CoffeeTable(props) {
  const model = useLoader(GLTFLoader, '/coffee-table/CoffeeTable_01_4k.gltf');
  const { nodes, materials } = useGLTF('/coffee-table/CoffeeTable_01_4k.gltf');
  console.log('Coffee Table nodes: ', model.nodes);
  const coffeeRef = useRef();

  return (
    <group
      ref={coffeeRef}
      {...props}
      // scale={1.4}
      scale={0.8}
      // position-y={-1}
      // position-x={2}
      position-z={1.2}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CoffeeTable_01.geometry}
        material={nodes.CoffeeTable_01.material}
        // diffusionMap={'/coffee-table/CoffeeTable_01_diff_4k.png'}
      />
      {/* <primitive object={model.scene} /> */}
      <Plant position-y={0.526} />
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

useGLTF.preload('/coffee-table/CoffeeTable_01_4k.gltf');
