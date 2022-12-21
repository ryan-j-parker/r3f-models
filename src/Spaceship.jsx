/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Spaceship(props) {
  // const { nodes, materials } = useGLTF('/spaceship/scene.gltf');
  const model = useLoader(GLTFLoader, '/spaceship/scene.gltf');

  return (
    <group 
      {...props} 
      dispose={null}
      scale={0.2}
      position-x={5}
      position-y={6}
      position-z={-5}
      rotation-y={-0.5}
      opacity={1}
    >
      <primitive object={model.scene} />
    </group>
  );
}
