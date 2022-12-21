import { Html, Loader, useProgress } from '@react-three/drei';

export default function LoadingState() {
  const { progress } = useProgress();
  return (
    <Html
      center
      style={{
        fontWeight: 'bold',
        width: '50vw',
      }}
    >
      {progress}%
    </Html>
  );
}
