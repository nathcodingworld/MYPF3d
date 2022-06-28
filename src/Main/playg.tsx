import BallLearn from "../Components/3dComponent/BallLearn";
// import OneBox from "../Components/OneBox";
import NameText from "./test";

import "./pg.css";

import MiniUniverse from "../Components/3dComponent/MiniUniverse";

import ThreeDIcon from "../Components/3dComponent/ThreeDIcon";
import OneBox from "../Components/3dComponent/OneBox";

const clipbg = require("../Public/clippedbg.png");

const Playg: React.FC = (props) => {
  return (
    <>
      {/* <div style={{ position: "fixed", top: "0", left: "0", height: "100%", width: "100%", backgroundColor: "black" }}>
        <BallLearn />
      </div> */}
      <div style={{ position: "fixed", top: "0", left: "0", height: 300, width: 300, backgroundColor: "black" }}>
        <OneBox color="lightblue" dimension={[1, 2, 3]} speed={1} />
      </div>
      <div style={{ position: "fixed", top: "0", right: "0", height: 300, width: 300, backgroundColor: "black" }}>
        <OneBox color="lightblue" dimension={[1, 2, 3]} speed={1} />
      </div>
      <div style={{ position: "fixed", bottom: "0", right: "0", height: 300, width: 300, backgroundColor: "black" }}>
        <OneBox color="lightblue" dimension={[1, 2, 3]} speed={1} />
      </div>

      {/* <div style={{ position: "fixed", zIndex: -10, top: "0", left: "0", height: "100vh", width: "100%", backgroundColor: "black" }}>
        <MiniUniverse />
      </div>
      <div style={{ width: "100%", height: "calc(100vh + 110px)", position: "relative" }}>
        <NameText />
        <div style={{ position: "absolute", bottom: "-5px", left: "0", height: "110px", width: "100%", backgroundColor: "transparent", padding: "0" }}>
          <img src={clipbg} width="100%" height="110px" />
        </div>
      </div>
      <div>spa</div>
      <div className="drager" style={{ height: "400px", width: "400px", border: "1px solid black", backgroundColor: "white" }}>
        <ThreeDIcon icon="graphql" />
      </div>
      <div className="drager" style={{ height: "400px", width: "400px", border: "1px solid black", backgroundColor: "white" }}>
        <ThreeDIcon icon="react" />
      </div> */}
    </>
  );
};

export default Playg;
