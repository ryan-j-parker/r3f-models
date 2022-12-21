/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Postcard() {
  
  const model = useLoader(GLTFLoader, '/postcard/postcard_set_01_2k.gltf');
  const postcardRef = useRef();

  return (
    <group
      ref={postcardRef}
      dispose={null}
      position-y={6}
      position-x={-2.3}
      position-z={-8.9}
    //   rotation-y={0.1}
      scale={8.5}
    >
      <primitive object={model.scene} />
    </group>

  );
}
