/* eslint-disable react/no-unknown-property */
import {
  ArcballControls,
  Environment,
  MapControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  ScrollControls,
  TrackballControls,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
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
import Walls from './Walls';
import Painting from './Painting';
import Room from './Room';

export default function Experience() {
  // const camera2 = new THREE.PerspectiveCamera(50, 1, 0.1, 800);

  const props = {
    makeDefault: true,
    // position: [5, 8, 38],
    position: [23, 12, 28],
    fov: 50,
    near: 1,
    far: 100,
    // rotationY: 13.5,
    // rotationX: 4.5,
    onUpdate: (self) => self.updateProjectionMatrix(),
  };

  return (
    <Canvas
      shadows
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
        // gl.setClearColor(0x000000);
        gl.antialias = true;
      }}
    >
      <PerspectiveCamera {...props} />
      <Perf position="top-left" />
      <Suspense fallback={<LoadingState />}>
        <Environment background files={'./solitude_interior_4k.hdr'} intensity={0.2} />
        <Room />

        {/* <rectAreaLight args={['#03ccda', 3, 2, 2]} position={[2, 2, 2]} /> */}
        {/* <hemisphereLight args={['#ec17ff', '#03da47', 4]} position={[-3, 0, -2]} /> */}
        {/* <OrbitControls /> */}
        {/* <MapControls /> */}
        <TrackballControls />
      </Suspense>
    </Canvas>
  );
}
