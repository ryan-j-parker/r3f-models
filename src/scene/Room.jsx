/* eslint-disable react/no-unknown-property */

import React, { Suspense } from 'react';
import { useRef } from 'react';
import AssetsLoading from '../AssetsLoading';
import Barber from '../Barber';
import CardboardBox from '../CardboardBox';
import CeilingLight from '../CeilingLight';
import Console from '../Console';
import Floor from '../Floor';
import Lighting from '../Lighting';
import Painting from '../Painting';
import Postcard from '../Postcard';
import PottedHerb from '../PottedHerb';
import Sofa from '../Sofa';
import Spaceship from '../Spaceship';
import Walls from '../Walls';

export default function Room() {
  const roomRef = useRef();

  return (
    <>
      <Suspense fallback={<AssetsLoading />}>
        <group 
          ref={roomRef} 
          dispose={null} 
          position={[2, -4.5, 2]} 
          scale={1.3} 
          rotation-x={-0.1}
          rotation-y={-0.6} 
          rotation-z={0.1}
        >
          <Spaceship />
          <Sofa />
          <Console />
          <Barber />
          <Floor />
          {/* <Lighting /> */}
          <PottedHerb />
          <CardboardBox />
          {/* <Ceiling /> */}
          <Postcard />
          <Walls />
          <Painting />
          <CeilingLight />
        </group>
      </Suspense>
    </>
  );
}
