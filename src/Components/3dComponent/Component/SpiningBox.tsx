import React, { useRef, useState } from "react";

import { useFrame } from "@react-three/fiber";

import { MeshWobbleMaterial } from "@react-three/drei";

import { useSpring, a } from "@react-spring/three";

const SpiningBox: React.FC<any> = ({ position, color, speed, args }) => {
  const meshs = useRef<any>();

  useFrame(() => (meshs.current.rotation.x = meshs.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);

  const props = useSpring<{ scale: [x: number, y: number, z: number] }>({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh position={position} ref={meshs} scale={props.scale} onClick={() => setExpand(!expand)} castShadow>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial color={color} speed={speed} attach="material" factor={0.6} />
    </a.mesh>
  );
};

export default SpiningBox;
