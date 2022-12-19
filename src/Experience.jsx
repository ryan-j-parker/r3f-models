/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
// import TorusMesh from '../Meshes/TorusMesh';
import CardboardBox from './CardboardBox';
import * as THREE from 'three';
import Sofa from './Sofa';
import CoffeeTable from './CoffeeTable';
import Plant from './Plant';
import { Suspense } from 'react';
import LoadingState from './LoadingState';
import Lighting from './Lighting';
import Spaceship from './Spaceship';

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
      <Suspense fallback={<LoadingState />}>
        <Perf position="top-left" />
        {/* <ambientLight 
        intensity={5}
        color={0xffffff}
      /> */}
        <Environment background files={'./solitude_interior_4k.hdr'}>
          {/* <color args={['#000000']} attach="background" /> */}
        </Environment>
        <Spaceship />
        <Sofa />
        <Lighting />
        <CardboardBox
        // scale={5}
        // position-z={-10}
        />
        {/* <rectAreaLight args={['#03ccda', 3, 2, 2]} position={[2, 2, 2]} /> */}
        {/* <hemisphereLight args={['#ec17ff', '#03da47', 4]} position={[-3, 0, -2]} /> */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
