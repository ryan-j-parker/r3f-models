/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Painting() {
  const model = useLoader(GLTFLoader, '/painting/fancy_picture_frame_01_4k.gltf');
  const paintingRef = useRef();

  return (
    <group
      ref={paintingRef}
      dispose={null}
      scale={8}
      position-x={-7.975}
      position-y={6}
      position-z={0}
      rotation-y={Math.PI * 0.5}
    >
      <primitive object={model.scene} />
    </group>
  );
}
useGLTF.preload('/painting/fancy_picture_frame_01_4k.gltf');