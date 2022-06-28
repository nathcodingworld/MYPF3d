import { Canvas } from "@react-three/fiber";

import { softShadows, OrbitControls } from "@react-three/drei";
import SpiningBox from "./Component/SpiningBox";
import React from "react";

softShadows();

interface OneBoxType {
  color: string;
  dimension: number[];
  speed: number;
}

const OneBox: React.FC<OneBoxType> = ({ color, dimension, speed }) => {
  return (
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
          <planeBufferGeometry attach="geometry" args={[10, 10]} />
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>
        <SpiningBox position={[1, 1, 1]} color={color} args={dimension} speed={speed} />
      </group>
      <OrbitControls />
    </Canvas>
  );
};

export default OneBox;
