/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

export default function PottedHerb() {
  const { nodes, materials } = useGLTF('/potted-herb/potted_plant_01_4k.gltf');
  const herbRef = useRef();
  console.log(nodes);
  return (
    <group
      ref={herbRef}
      dispose={null}
      position-y={-1.99}
      position-x={-6.2}
      position-z={-6}
      rotation-y={2.2}
      scale={5.5}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.potted_plant_01_stem.geometry}
        material={nodes.potted_plant_01_stem.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.potted_plant_01_pebbles.geometry}
        material={nodes.potted_plant_01_pebbles.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.potted_plant_01_pot.geometry}
        material={nodes.potted_plant_01_pot.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.potted_plant_01_leaves.geometry}
        material={nodes.potted_plant_01_leaves.material}
      />
    </group>
  );
}
