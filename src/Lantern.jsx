/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React from 'react';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Lantern() {
  const { nodes, materials } = useGLTF('/lantern/Lantern_01_4k.gltf');
  const lanternRef = useRef();
  const model = useLoader(GLTFLoader, '/lantern/Lantern_01_4k.gltf');

  return (
    <group
      ref={lanternRef}
      dispose={null}
      position-y={0.95}
      position-x={0.3}
      position-z={-0.06}
      rotation-y={0.3}
      scale={2.5}
    >
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lantern_01.geometry}
        material={nodes.Lantern_01.material}
      /> */}
      <primitive object={module.scene} />
    </group>
  );
}
useGLTF.preload('/lantern/Lantern_01_4k.gltf');