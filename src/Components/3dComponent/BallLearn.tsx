import Cloud from "./Component/WordSphere";
import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const lang = [
  "Javascript",
  "Typescript",
  "Css",
  "Sass",
  "Html",
  "Three js",
  "_lodash",
  "React js",
  "Material UI",
  "Redux-toolkit",
  "React Router Dom",
  "React Player",
  "Apollo Client",
  "Express js",
  "Graphql",
  "Socket IO",
  "Mongoose",
  "Apollo Server",
];

const BallLearn: React.FC = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <mesh>
        <fog attach="fog" args={["#202025", 0, 80]} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <Cloud ring={3} radius={15} language={lang} />
        <TrackballControls />
      </mesh>
    </Canvas>
  );
};

export default BallLearn;
