/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Plant(props) {
  const { nodes, materials } = useGLTF('/potted-plant/potted_plant_04_4k.gltf');
  const model = useLoader(GLTFLoader, '/potted-plant/potted_plant_04_4k.gltf');
  return (
    <group {...props} dispose={null}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.potted_plant_04.geometry}
        material={nodes.potted_plant_04.material}
      /> */}
      <primitive object={model.scene} />
    </group>
  );
}
useGLTF.preload('/potted-plant/potted_plant_04_4k.gltf');