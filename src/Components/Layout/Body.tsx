import Contents from "./Component/Contents";
import NavigationButtons from "./Component/NavigationButtons";

const BodyStyle: React.CSSProperties = { width: "100%", position: "relative", backgroundColor: "white" };
const AboutStyle: React.CSSProperties = { height: "50vh", position: "relative" };
const ContentStyle: React.CSSProperties = { minHeight: "50vh", height: "max-content", background: "linear-gradient(0deg, #263238, #37474f, #455a64,#546e7a)" };

const Bodys: React.FC = () => {
  return (
    <div style={BodyStyle}>
      <div style={AboutStyle} />
      <div style={ContentStyle}>
        <NavigationButtons />
        <Contents />
      </div>
    </div>
  );
};

export default Bodys;
