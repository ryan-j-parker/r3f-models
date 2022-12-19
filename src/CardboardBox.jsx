/* eslint-disable react/no-unknown-property */

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import LoadingState from './LoadingState';
import { Clone, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

export default function CardboardBox(props) {
  // const model = useLoader(GLTFLoader, '/cardboard/cardboard_box_01_4k.gltf');
  const { nodes, materials } = useGLTF('/cardboard/cardboard_box_01_4k.gltf');
  const boxRef = useRef();
  // console.log('Cardboard box nodes: ', model.nodes);
  return (
    <>
      <Suspense fallback={<LoadingState />}>
        <group
          {...props}
          dispose={null} 
          ref={boxRef}
          position-z={-5.5}
          position-y={1}
          position-x={6.2}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cardboard_box_01.geometry}
            material={nodes.cardboard_box_01.material}
            scale={5} 
            position-y={-2} 
            rotation-y={-0.6} 
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cardboard_box_01.geometry}
            material={nodes.cardboard_box_01.material}
            scale={5}
            position-y={-2}
            position-x={-2.6}
            rotation-y={0.3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cardboard_box_01.geometry}
            material={nodes.cardboard_box_01.material}
            scale={5}
            position-y={-0.45}
            position-x={-1.6}
            rotation-y={0.9}
          />
        </group>
      </Suspense>
    </>
  );
}

useGLTF.preload('/cardboard/cardboard_box_01_4k.gltf');

// import React, { useRef } from 'react';
// import { useGLTF } from '@react-three/drei';

// export function CardboardBox(props) {
//   const { nodes, materials } = useGLTF('/cardboard.gltf');
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.cardboard.geometry}
//         material={nodes.cardboard.material}
//         position={[0, 0.2, 0]}
//         userData={{ name: 'cardboard' }}
//       />
//     </group>
//   );
// }

// useGLTF.preload('/cardboard/cardboard_box_01_4k.gltf');
