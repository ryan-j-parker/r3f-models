/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import Bust from './Bust';
import Lantern from './Lantern';

export default function Console() {
  const { nodes, materials } = useGLTF('/console/ClassicConsole_01_4k.gltf');
  const consoleRef = useRef();

  return (
    <group
      ref={consoleRef}
      dispose={null}
      rotation-y={1.57}
      position-x={-7}
      position-y={-2}
      position-z={1.2}
      scale={2.6}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ClassicConsole_01.geometry}
        material={nodes.ClassicConsole_01.material}
      />
      <Bust />
      <Lantern />
    </group>
  );
}
