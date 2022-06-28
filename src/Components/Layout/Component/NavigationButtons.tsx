import { Button, Grid } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import NavBtn from "../UI/NavBtn";

const test = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const NavigationButtons: React.FC = () => {
  const [childOpen, setoChild] = useState(false);

  const setToChild = (state: boolean) => () => {
    setoChild(state);
  };

  return (
    <Grid container spacing={{ sm: 4, xs: 1 }} width="100%" paddingRight={{ sm: 4, xs: 1 }} paddingLeft={{ sm: 4, xs: 1 }} paddingBottom={3}>
      <AnimatePresence exitBeforeEnter>
        {childOpen && <NavBtn name="Back" path="/back" nav={false} toChild={setToChild(false)} key={"back"} />}
        {childOpen && <NavBtn name="Favorites" path="/Favorites" key={"favorite"} />}
        {childOpen && <NavBtn name="Front End" path="/FrontEnd" key={"fe"} />}
        {childOpen && <NavBtn name="Back End" path="/BackEnd" key={"be"} />}
        {!childOpen && <NavBtn name="Skills" path="/Skills" key={"skill"} />}
        {!childOpen && <NavBtn name="Libraries" path="/Libraries" nav={false} toChild={setToChild(true)} key={"library"} />}
        {!childOpen && <NavBtn name="Projects" path="/Projects" key={"project"} />}
        {!childOpen && <NavBtn name="3d Animation" path="/Animation" key={"3d"} />}
      </AnimatePresence>
    </Grid>
  );
};

export default NavigationButtons;
