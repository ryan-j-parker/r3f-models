/* eslint-disable react/no-unknown-property */
import { useTexture } from '@react-three/drei';
import React from 'react';
import { useRef } from 'react';
import { DoubleSide } from 'three';
import Painting from './Painting';

export default function Walls() {
  const props = useTexture({
    aoMap: '/walls/textures/beige_wall_001_ao_2k.png',
    metalnessMap: '/walls/textures/beige_wall_001_arm_2k.png',
    diffusionMap: '/walls/textures/beige_wall_001_diff_2k.jpg',
    displacementMap: '/walls/textures/beige_wall_001_disp_2k.png',
    normalMap: '/walls/textures/beige_wall_001_nor_gl_2k.jpg',
    roughnessMap: '/walls/textures/beige_wall_001_rough_2k.jpg',
  });

  const wallRef = useRef();

  return (
    <group
      ref={wallRef}
      dispose={null}
      // position-y={-1.99}
      // position-x={-6.2}
      // position-z={-6}
      // rotation-y={2.2}
      scale={5.5}
    >
      {/* left wall */}
      <mesh
        castShadow
        receiveShadow
        position-x={-1.575}
        position-y={1.1}
        position-z={-0.05}
        rotation-y={Math.PI * -0.5}
      >
        <boxGeometry args={[3, 3, 0.25]} />
        <meshStandardMaterial
          {...props}
          attach="material"
          displacementScale={0}
          side={DoubleSide}
        />
      </mesh>
      {/* back wall */}
      <mesh
        castShadow
        receiveShadow
        position-x={-0.0475}
        position-y={1.1}
        position-z={-1.58}
        rotation-z={Math.PI * -0.5}
      >
        <boxGeometry args={[3, 3, 0.25]} />
        <meshStandardMaterial
          {...props}
          attach="material"
          displacementScale={0}
          side={DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position-x={-0.0475}
        position-y={2.725}
        position-z={-0.05}
        rotation-x={Math.PI * -0.5}
      >
        <boxGeometry args={[3, 3, 0.25]} />
        <meshStandardMaterial
          {...props}
          attach="material"
          displacementScale={0}
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
}
