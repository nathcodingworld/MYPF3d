import React from "react";

import { Stack, Typography, useMediaQuery } from "@mui/material";

const textstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "linear-gradient(45deg, #ff0000, #ffff00, #ff00f3, #0033ff, #ff00c4, #ff0000)",
  backgroundSize: "400%",
  fontFamily: "sans-serif",
  wordSpacing: "5px",
  color: "transparent",
  backgroundClip: "text",
  animation: "animate 20s linear infinite",
  // textShadow: "1px 1px 7px rgba(255, 255, 255, 0.4)",
};

type NameTextType = {};

const NameText: React.FC<NameTextType> = (props) => {
  const lg = useMediaQuery("(min-width:1100px)");
  const md = useMediaQuery("(min-width:700px)");
  const sm = useMediaQuery("(min-width:550px)");
  console.log(lg);

  return (
    <Stack direction={"column"} sx={textstyle}>
      <Typography children="NATHANIEL MORALES" align="center" textAlign="center" noWrap variant={lg ? "h1" : md ? "h2" : sm ? "h3" : "h4"} fontWeight={600} />
      <Typography children="Full Stack Developer" noWrap textAlign="center" align="center" variant={lg ? "h3" : md ? "h4" : sm ? "h5" : "h6"} />
    </Stack>
  );
};

export default NameText;
