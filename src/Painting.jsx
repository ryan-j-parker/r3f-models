/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Painting() {
  // const { nodes, materials } = useGLTF('/painting/fancy_picture_frame_01_4k.gltf');
  const model = useLoader(GLTFLoader, '/painting/fancy_picture_frame_01_4k.gltf');
  const paintingRef = useRef();
  console.log(model.nodes);

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
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.fancy_picture_frame_01.geometry}
        material={nodes.fancy_picture_frame_01.material}
      /> */}
      <primitive object={model.scene} />
    </group>
  );
}
