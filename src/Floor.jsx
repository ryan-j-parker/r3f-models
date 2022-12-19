/* eslint-disable react/no-unknown-property */
import { useTexture } from '@react-three/drei';
import React from 'react';
import { DoubleSide } from 'three';

export default function Floor() {
  const props = useTexture({
    map: '/floor/textures/floor_tiles_06_diff_2k.jpg',
    normalMap: '/floor/textures/floor_tiles_06_nor_gl_2k.jpg',
    roughnessMap: '/floor/textures/floor_tiles_06_rough_2k.jpg',
  });

  return (
    <mesh rotation-x={Math.PI * -0.5} position-y={-2}>
      <planeGeometry args={[16, 16]} />
      <meshStandardMaterial
        {...props}
        attach="material"
        displacementScale={1.6}
        side={DoubleSide}
      />
    </mesh>
  );
}
