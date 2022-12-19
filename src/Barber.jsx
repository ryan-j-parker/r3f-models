/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
export default function Barber() {
  const { nodes, material } = useGLTF('/barber/BarberShopChair_01_4k.gltf');
  const barberRef = useRef();
  return (
    <group
      ref={barberRef}
      dispose={null}
      position-y={-2}
      position-x={-5.2}
      position-z={5.4}
      rotation-y={2.2}
      scale={3.5}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BarberShopChair_01.geometry}
        material={nodes.BarberShopChair_01.material}
      />
    </group>
  );
}
