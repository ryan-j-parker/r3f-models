/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import LoadingState from './LoadingState';
import { Clone, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

export default function CardboardBox(props) {
  const { nodes, materials } = useGLTF('/cardboard/cardboard_box_01_4k.gltf');
  const model = useLoader(GLTFLoader, '/hammer/wooden_hammer_01_2k.gltf');
  const boxRef = useRef();

  return (
    <>
      <Suspense 
        fallback={<LoadingState />}
      >
        <group
          {...props}
          dispose={null} 
          ref={boxRef}
          position-z={-5.5}
          position-y={1}
          position-x={6.2}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cardboard_box_01.geometry}
            material={nodes.cardboard_box_01.material}
            scale={5} 
            position-y={-2} 
            rotation-y={-0.6} 
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cardboard_box_01.geometry}
            material={nodes.cardboard_box_01.material}
            scale={5}
            position-y={-2}
            position-x={-2.6}
            rotation-y={0.3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cardboard_box_01.geometry}
            material={nodes.cardboard_box_01.material}
            scale={5}
            position-y={-0.45}
            position-x={-1.6}
            rotation-y={0.9}
          />
          <primitive 
            object={model.scene} 
            position-y={0.29}
            scale={4.5}
            position-x={-1.85}
            position-z={-0.5}
            rotation-x={1.65}
            rotation-y={3.08}
            rotation-z={-1.4}
          />
        </group>
      </Suspense>
    </>
  );
}

useGLTF.preload('/cardboard/cardboard_box_01_4k.gltf');