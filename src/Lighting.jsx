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
          intensity={4}
          position={[-2, 5, 0]}
          angle={0.6}
          color={'#ff008c'}
          penumbra={2}
          castShadow
        />
        <spotLight
          ref={blueRef}
          intensity={4}
          position={[12, 5, 0]}
          angle={-0.4}
          color={'#002fff'}
          penumbra={2}
          castShadow
        />
      </group>
    </>
  );
}
