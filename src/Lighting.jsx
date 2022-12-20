/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';

export default function Lighting(props) {
  const spotRef = useRef();
  const pinkRef = useRef();
  const blueRef = useRef();

  return (
    <>
      <group {...props} ref={spotRef}>
        <spotLight
          ref={pinkRef}
          intensity={2}
          position={[6, 3, 4]}
          angle={0.8}
          color={'#ff008c'}
          penumbra={4}
          castShadow
          rotation-y={-0.9}
        />
        <spotLight
          ref={blueRef}
          intensity={4}
          position={[-8, 5, -5]}
          angle={-0.4}
          color={'#002fff'}
          penumbra={2}
          castShadow
        />
      </group>
    </>
  );
}
