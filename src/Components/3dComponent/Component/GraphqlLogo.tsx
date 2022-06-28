import { Point, Points, Sphere, Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import MiniSpace from "./MiniSpace";

const GraphqlLogo: React.FC = (props) => {
  const ringone = useRef<any>();
  //   const ringtwo = useRef<any>();
  //   const ringthree = useRef<any>();
  useFrame(() => {
    // ringone.current.rotation.x -= 0.004;
    ringone.current.rotation.y += 0.01;
  });
  return (
    <>
      <mesh>
        <Torus args={[10, 0.4, 16, 6]} ref={ringone}>
          <meshBasicMaterial color={"#e535ab"} />
          <Sphere args={[1]} position={[5, 8.5, 0]}>
            <meshBasicMaterial color={"#e535ab"} />
          </Sphere>
          <Sphere args={[1]} position={[5, -8.5, 0]}>
            <meshBasicMaterial color={"#e535ab"} />
          </Sphere>
          <Sphere args={[1]} position={[-5, -8.5, 0]}>
            <meshBasicMaterial color={"#e535ab"} />
          </Sphere>
          <Sphere args={[1]} position={[-5, 8.5, 0]}>
            <meshBasicMaterial color={"#e535ab"} />
          </Sphere>
          <Sphere args={[1]} position={[10, 0, 0]}>
            <meshBasicMaterial color={"#e535ab"} />
          </Sphere>
          <Sphere args={[1]} position={[-10, 0, 0]}>
            <meshBasicMaterial color={"#e535ab"} />
          </Sphere>
          <Torus args={[10, 0.4, 16, 3]}>
            <meshBasicMaterial color={"#e535ab"} />
          </Torus>
        </Torus>
      </mesh>
      <MiniSpace area={50} debrees={150} to="graphql" clearSpace={20} />
    </>
  );
};

export default GraphqlLogo;
