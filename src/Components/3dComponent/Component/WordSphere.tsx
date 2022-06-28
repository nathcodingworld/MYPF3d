import { Spherical, Vector3 } from "three";
import { useMemo } from "react";
import Word from "./Word";

function WordSphere({ language = [""], ring = 4, radius = 20 }) {
  let count: number = Math.floor(language.length / ring);
  const words = useMemo(() => {
    const temp = [];
    const spherical = new Spherical();
    const phiSpan = Math.PI / (ring + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < ring + 1; i++)
      for (let j = 0; j < count; j++) {
        const num = count * (i - 1) + j;
        temp.push([new Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), language[num]]);
      }

    return temp;
  }, [language, radius]);
  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </>
  );
}

export default WordSphere;
