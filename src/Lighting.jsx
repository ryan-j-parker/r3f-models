/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';

export default function Lighting(props) {
  const spotRef = useRef();
  const pinkRef = useRef();
  const blueRef = useRef();
  const yellowRef = useRef();

  return (
    <>
      <group {...props} ref={spotRef} dispose={null}>
        <spotLight
          ref={pinkRef}
          intensity={2.5}
          position={[-8, 3, 9]}
          angle={-0.2}
          color={'#ff008c'}
          penumbra={4}
          castShadow
          rotation-y={-0.9}
        />
        <spotLight
          ref={blueRef}
          intensity={2.5}
          position={[-8, 2, 12]}
          angle={-0.4}
          color={'#002fff'}
          penumbra={2}
          castShadow
        />
        <spotLight
          ref={yellowRef}
          intensity={0.5}
          position={[-5, 2, 14]}
          angle={-0.4}
          color={'#fff000'}
          penumbra={2}
          castShadow
        />
      </group>
    </>
  );
}
