import { Html, Loader, useProgress } from '@react-three/drei';
import React from 'react';

export default function AssetsLoading() {
  const { progress } = useProgress();

  return (
    <Html
      center
      as="div"
      style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      {progress === 100 ? 'Finishing up...' : 'Assets loading...'}
      <br />
      {progress}%
    </Html>
  );
}
