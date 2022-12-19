/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Spaceship(props) {
  const { nodes, materials } = useGLTF('/spaceship/scene.gltf');
  const model = useLoader(GLTFLoader, '/spaceship/scene.gltf');
  // console.log('Cardboard box nodes: ', model.nodes);

  return (
    <group 
      {...props} 
      dispose={null}
      scale={2}
    >
      {/* <mesh castShadow receiveShadow /> */}
      <primitive object={model} />
    </group>
  );
}