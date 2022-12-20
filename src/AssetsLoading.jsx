import { Html, Loader, useProgress } from '@react-three/drei';
import React from 'react';

export default function AssetsLoading() {
  const { progress } = useProgress();

  return (
    <Html
    // //   center
    //   as="div"
    //   style={{
    //     color: 'white',
    //     fontSize: '2rem',
    //     fontWeight: 'bold',
    //     // textAlign: 'center',
    //     position: 'absolute',
    //     backgroundColor: 'grey',
    //     borderRadius: '25%',
    //     padding: '1.5vh 1.5vw',
    //     // top: '50%',
    //     // left: '50%',
    //     // transform: 'translate(-50%, -50%)',
    //     opacity: 0.5,
    //   }}
    >
      {/* //   {/* Assets loading...
    //   <br />
    //   {progress}% */}
      <Loader />
    </Html>
  );
}
