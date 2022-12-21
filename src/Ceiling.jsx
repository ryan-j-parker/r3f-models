/* eslint-disable react/no-unknown-property */
import { useTexture } from '@react-three/drei';
import React from 'react';
import { useRef } from 'react';
import { DoubleSide } from 'three';

export default function Ceiling() {
  const ceilingRef = useRef();
  const props = useTexture({
    aoMap: '/walls/textures/beige_wall_001_ao_2k.png',
    metalnessMap: '/walls/textures/beige_wall_001_arm_2k.png',
    diffusionMap: '/walls/textures/beige_wall_001_diff_2k.jpg',
    displacementMap: '/walls/textures/beige_wall_001_disp_2k.png',
    normalMap: '/walls/textures/beige_wall_001_nor_gl_2k.jpg',
    roughnessMap: '/walls/textures/beige_wall_001_rough_2k.jpg',
  });

  return (
    <group ref={ceilingRef} dispose={null}>
      {/* ceiling */}
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
