/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function PottedHerb() {
  const { nodes, materials } = useGLTF('/potted-herb/potted_plant_01_4k.gltf');
  const herbRef = useRef();
  const model = useLoader(GLTFLoader, '/potted-herb/potted_plant_01_4k.gltf');

  return (
    <group
      ref={herbRef}
      dispose={null}
      position-y={-1.99}
      position-x={-6.2}
      position-z={-6}
      rotation-y={2.2}
      scale={6.75}
    >
      <primitive object={model.scene} />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.potted_plant_01_stem.geometry}
        material={nodes.potted_plant_01_stem.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.potted_plant_01_pebbles.geometry}
        material={nodes.potted_plant_01_pebbles.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.potted_plant_01_pot.geometry}
        material={nodes.potted_plant_01_pot.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.potted_plant_01_leaves.geometry}
        material={nodes.potted_plant_01_leaves.material}
      /> */}
    </group>
  );
}
useGLTF.preload('/potted-herb/potted_plant_01_4k.gltf');