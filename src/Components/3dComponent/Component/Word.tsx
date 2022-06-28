import { Color } from "three";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
const Font = require("../../Public/Inter-Bold.woff");

const Word: React.FC<any> = ({ children, ...props }) => {
  const color = new Color();
  const fontProps = { font: Font, fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, "material-toneMapped": false };
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  useEffect((): any => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);
    ref.current.material.color.lerp(color.set(hovered ? "#fa2720" : "black"), 0.1);
  });
  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />;
};

export default Word;
