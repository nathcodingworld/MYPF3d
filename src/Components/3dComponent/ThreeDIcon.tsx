import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GraphqlLogo from "./Component/GraphqlLogo";
import ReactLogo from "./Component/ReactLogo";

interface iconType {
  icon: "react" | "graphql";
}

const ThreeDIcon: React.FC<iconType> = ({ icon }) => {
  return (
    <Canvas camera={{ position: [0, 0, 70], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      {icon === "react" && <ReactLogo />}
      {icon === "graphql" && <GraphqlLogo />}
    </Canvas>
  );
};

export default ThreeDIcon;
