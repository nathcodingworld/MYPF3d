import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Euler, Vector3 } from "three";
import Debree from "./debree";

interface SpaceType {
  to: string;
  area: number;
  debrees: number;
  clearSpace?: number;
}

const MiniSpace: React.FC<SpaceType> = ({ debrees, to, area, clearSpace }) => {
  const ref = useRef<any>();
  useFrame(() => {
    ref.current.rotation.y -= 0.004;
  });
  const space = useMemo(() => {
    const Debrees: any = [];
    const clearance = clearSpace ? clearSpace : 90;
    for (let i = 1; i < debrees + 1; i++) {
      const vector = new Vector3()
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize()
        .multiplyScalar(clearance + Math.random() * area);
      const pos: any = [vector.x, vector.y, vector.z];
      const rot: any = [Math.random() * 2, Math.random() * 2, Math.random() * 2];
      Debrees.push({ pos, rot });
    }
    return Debrees;
  }, []);
  return (
    <mesh ref={ref}>
      {space.map((debree: { pos: Vector3; rot: Euler }, i: number) => {
        return <Debree position={debree.pos} rotation={debree.rot} key={i} to={to} />;
      })}
    </mesh>
  );
};

export default MiniSpace;
