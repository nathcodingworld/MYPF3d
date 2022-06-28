import { Sphere, Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import MiniSpace from "./MiniSpace";

const ReactLogo: React.FC = (props) => {
  const ringone = useRef<any>();
  const ringtwo = useRef<any>();
  const ringthree = useRef<any>();
  useFrame(() => {
    ringone.current.rotation.y -= 0.01;
    ringtwo.current.rotation.y -= 0.01;
    ringthree.current.rotation.y -= 0.01;
  });
  return (
    <>
      <mesh>
        <Torus args={[10, 0.4, 16, 100]} rotation={[0.7, 1, 1]} ref={ringone}>
          <meshBasicMaterial color={"#61DBFB"} />
        </Torus>
        <Torus args={[10, 0.4, 16, 100]} rotation={[1, 2, 1]} ref={ringtwo}>
          <meshBasicMaterial color={"#61DBFB"} />
        </Torus>
        <Torus args={[10, 0.4, 16, 100]} rotation={[1.3, 3, 1]} ref={ringthree}>
          <meshBasicMaterial color={"#61DBFB"} />
        </Torus>
        <Sphere args={[2]}>
          <meshBasicMaterial color={"#61DBFB"} />
        </Sphere>
      </mesh>
      <MiniSpace area={50} debrees={150} to="react" clearSpace={20} />
    </>
  );
};

export default ReactLogo;
