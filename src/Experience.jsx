/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
// import TorusMesh from '../Meshes/TorusMesh';
import CardboardBox from './CardboardBox';
import * as THREE from 'three';

export default function Experience() {


  return (
    <Canvas>
      <Perf position="top-left" />
      <Environment background files={'./solitude_interior_4k.hdr'}>
        {/* <color args={['#000000']} attach="background" /> */}
      </Environment>
      <CardboardBox
         
        // scale={5}
        // position-z={-10}
      />
      <rectAreaLight args={['#03ccda', 3, 2, 2]} position={[2, 2, 2]} />
      {/* <hemisphereLight args={['#ec17ff', '#03da47', 4]} position={[-3, 0, -2]} /> */}
      <OrbitControls />
      {/* <TorusMesh /> */}
    </Canvas>
  );
}
