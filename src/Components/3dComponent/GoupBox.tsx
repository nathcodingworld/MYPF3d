import { Canvas } from "@react-three/fiber";

import { softShadows, OrbitControls } from "@react-three/drei";
import SpiningBox from "./Component/SpiningBox";

softShadows();

const BoxGroup: React.FC<{ dis: "none" | "block" }> = ({ dis }) => {
  return (
    <div style={{ position: "fixed", bottom: "0", left: "0", height: "100%", width: "100%", zIndex: -5, display: dis }}>
      <Canvas camera={{ position: [-5, 2, 10], fov: 60 }} shadows>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <SpiningBox position={[0, 1, 0]} color="lightblue" args={[3, 2, 1]} speed={2} />
          <SpiningBox position={[-2, 1, -5]} color="pink" speed={6} />
          <SpiningBox position={[5, 1, -2]} color="pink" speed={6} />
        </group>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default BoxGroup;
