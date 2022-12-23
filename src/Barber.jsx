/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export default function Barber() {
  const { nodes, material } = useGLTF('/barber/BarberShopChair_01_4k.gltf');
  const barberRef = useRef();
  const model = useLoader(GLTFLoader, '/barber/BarberShopChair_01_4k.gltf');
  return (
    <group
      ref={barberRef}
      dispose={null}
      position-y={-2}
      position-x={-5.2}
      position-z={5.4}
      rotation-y={2.2}
      scale={4.5}
    >
      <primitive object={model.scene} />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.BarberShopChair_01.geometry}
        material={nodes.BarberShopChair_01.material}
      /> */}
    </group>
  );
}

useGLTF.preload('/barber/BarberShopChair_01_4k.gltf');