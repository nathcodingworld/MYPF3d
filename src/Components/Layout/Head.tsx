import NameText from "../../Main/test";
import MiniUniverse from "../3dComponent/MiniUniverse";
import image from "../../Public/clippedbg.png";

const Head: React.FC<any> = () => {
  return (
    <>
      <div style={{ position: "fixed", zIndex: -10, top: "0", left: "0", height: "100vh", width: "100%", backgroundColor: "black" }}>
        <MiniUniverse />
      </div>
      <div style={{ width: "100%", height: "calc(100vh + 110px)", position: "relative" }} id="head">
        <NameText />
        <div style={{ position: "absolute", bottom: "-5px", left: "0", height: "110px", width: "100%", backgroundColor: "transparent", padding: "0" }}>
          <img src={image} width="100%" height="110px" />
        </div>
      </div>
    </>
  );
};

export default Head;
