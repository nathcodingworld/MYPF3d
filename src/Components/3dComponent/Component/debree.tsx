import { Tetrahedron } from "@react-three/drei";
import { Euler, Vector3 } from "three";

interface DebreeType {
  position: Vector3;
  rotation: Euler;
  to?: string;
}

const Debree: React.FC<DebreeType> = ({ position, rotation, to }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <Tetrahedron args={[2, 0]}>
        <meshBasicMaterial color={to === "react" ? "#4696ff" : to === "graphql" ? "#e53596" : "white"} />
      </Tetrahedron>
    </mesh>
  );
};

export default Debree;
