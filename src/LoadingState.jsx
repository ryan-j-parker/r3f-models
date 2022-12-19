import { Html, Loader, useProgress } from '@react-three/drei';

export default function LoadingState() {
  const { progress } = useProgress();
  return (
    <Html
      center
      // as="div"
      // transform
      // sprite
      // distanceFactor={10}
      // opacity={1}
      style={{
        color: 'purple',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      {/* {progress}% */}
      <Loader />
    </Html>
  );
}
