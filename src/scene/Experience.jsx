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
import CardboardBox from '../../src/CardboardBox';
import * as THREE from 'three';
import Sofa from '../../src/Sofa';
import { Suspense } from 'react';
import LoadingState from '../../src/LoadingState';
import Lighting from '../../src/Lighting';
import Spaceship from '../../src/Spaceship';
import Floor from '../../src/Floor';
import Console from '../../src/Console';
import Barber from '../../src/Barber';
import PottedHerb from '../../src/PottedHerb';
import Walls from '../../src/Walls';
import Painting from '../../src/Painting';
import Room from './Room';
import AssetsLoading from '../../src/AssetsLoading';

export default function Experience() {

  const props = {
    makeDefault: true,
    position: [23, 12, 28],
    fov: 50,
    near: 1,
    far: 100,
    onUpdate: (self) => self.updateProjectionMatrix(),
  };

  return (
    <Canvas
      shadows
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
        gl.antialias = true;
      }}
    >
      <PerspectiveCamera {...props} />
      <Perf position="top-left" />
      <Suspense fallback={<LoadingState />}>
        <Environment background files={'./solitude_interior_4k.hdr'} />
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
