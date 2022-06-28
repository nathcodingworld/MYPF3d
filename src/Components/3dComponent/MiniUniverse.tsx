import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MiniSpace from "./Component/MiniSpace";

const MiniUniverse: React.FC = (porps) => {
  return (
    <Canvas camera={{ position: [0, 0, 250], fov: 90 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 0, 0]} intensity={1.5} color={"red"} />
      <directionalLight position={[75, 1, 0.5]} intensity={1.5} color={"blue"} />
      <directionalLight position={[-0.75, -1, 0.5]} intensity={1.5} color={"green"} />
      <MiniSpace area={700} debrees={1200} to="main" />
      <TrackballControls />
    </Canvas>
  );
};

export default MiniUniverse;
