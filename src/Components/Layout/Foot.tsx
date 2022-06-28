import BoxGroup from "../3dComponent/GoupBox";
import image from "../../Public/clippedbgend.png";
import { useEffect, useState } from "react";

const FootStyle: React.CSSProperties = { position: "relative", height: "max-content", backgroundColor: "white", zIndex: -7 };
const DividerStyle: React.CSSProperties = { width: "100%", backgroundColor: "transparent", padding: "0" };

const Foot: React.FC = () => {
  const [dis, setInd] = useState<"none" | "block">("none");

  useEffect(() => {
    let observer = new IntersectionObserver((c, o) => {
      c.forEach((ch) => {
        if (ch.isIntersecting) {
          setInd("none");
        }
        if (!ch.isIntersecting) {
          setInd("block");
        }
      });
    });
    const head = document.getElementById("head");
    if (head) observer.observe(head);
  }, []);

  return (
    <div style={FootStyle}>
      <div style={DividerStyle}>
        <img src={image} width="100%" style={{ aspectRatio: "1200/110" }} />
      </div>
      <div style={{ height: "100vh", backgroundColor: "transparent" }}>
        <BoxGroup dis={dis} />
      </div>
    </div>
  );
};

export default Foot;
