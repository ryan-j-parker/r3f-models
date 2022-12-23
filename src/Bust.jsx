/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Bust() {
  // const { nodes, materials } = useGLTF('/bust/marble_bust_01_4k.gltf');
  const bustRef = useRef();
  const model = useLoader(GLTFLoader, '/bust/marble_bust_01_4k.gltf');

  return (
    <group
      ref={bustRef}
      dispose={null}
      position-y={0.975}
      position-x={-0.2}
      position-z={-0.06}
      scale={1.15}
    >
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.marble_bust_01.geometry}
        material={nodes.marble_bust_01.material}
      /> */}
      <primitive object={model.scene} />
    </group>
  );
}
useGLTF.preload('/bust/marble_bust_01_4k.gltf');
