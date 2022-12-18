/* eslint-disable react/no-unknown-property */


import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import LoadingState from './LoadingState';
import { useGLTF } from '@react-three/drei';

export default function CardboardBox() {
  const model = useLoader(
    GLTFLoader, 
    '/cardboard/cardboard_box_01_4k.gltf'
    
  );
//   const { nodes, materials } = useGLTF("/cardboard.gltf");
  console.log(model);
  return (
    <Suspense fallback={<LoadingState />}>
      <primitive 
        object={model.scene} 
        scale={5}
        position-y={-2}
        rotation-y={-0.6}
      />
    </Suspense>
  );
}

// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export function CardboardBox(props) {
//   const { nodes, materials } = useGLTF("/cardboard.gltf");
//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.cardboard.geometry}
//         material={nodes.cardboard.material}
//         position={[0, 0.2, 0]}
//         userData={{ name: "cardboard" }}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/cardboard.gltf");
