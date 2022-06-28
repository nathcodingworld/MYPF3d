import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import SkillContent from "../Contents/SkillContent";

const ContensStyle = { border: "1px solid Black", padding: "16px", margin: "16px auto", maxWidth: "1200px" };

const Contents: React.FC = () => {
  return (
    <Grid sx={ContensStyle}>
      <Routes>
        <Route path="/" element={<div children={"hello"} />} />
        <Route path="/Skills" element={<SkillContent />} />
      </Routes>
    </Grid>
  );
};

export default Contents;
