/* eslint-disable react/no-unknown-property */
import { Environment, MapControls, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import CardboardBox from './CardboardBox';
import * as THREE from 'three';
import Sofa from './Sofa';
import { Suspense } from 'react';
import LoadingState from './LoadingState';
import Lighting from './Lighting';
import Spaceship from './Spaceship';
import Floor from './Floor';
import Console from './Console';
import Barber from './Barber';
import PottedHerb from './PottedHerb';

export default function Experience() {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 0.4, 5], fov: 50 }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
        // gl.setClearColor(0x000000);
        gl.antialias = true;
      }}
    >
      <Suspense 
        fallback={<LoadingState />}
      >
        <Perf position="top-left" />
        <Environment background files={'./solitude_interior_4k.hdr'} />
        <Spaceship />
        <Sofa />
        <Console />
        <Barber />
        <Floor />
        <Lighting />
        <PottedHerb />
        <CardboardBox />
        {/* <rectAreaLight args={['#03ccda', 3, 2, 2]} position={[2, 2, 2]} /> */}
        {/* <hemisphereLight args={['#ec17ff', '#03da47', 4]} position={[-3, 0, -2]} /> */}
        <OrbitControls />
        {/* <MapControls /> */}
      </Suspense>
    </Canvas>
  );
}
