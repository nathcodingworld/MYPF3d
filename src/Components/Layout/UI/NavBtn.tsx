import { Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const btnMotion = {
  initial: {
    opacity: 0,
    x: 100,
    y: 0,
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
  leave: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
    },
  },
};

interface NavBtnType {
  name: string;
  path: string;
  nav?: boolean;
  toChild?: () => void;
}

const NavBtn: React.FC<NavBtnType> = ({ name, path, nav = true, toChild }) => {
  const navigate = useNavigate();

  function onNavigateHandler() {
    if (nav) navigate(path);
    else {
      navigate("/");
      if (toChild !== undefined) toChild();
    }
  }

  return (
    <Grid item xs={12} sm={3}>
      <Button children={name} sx={{ width: "100%" }} variant="contained" onClick={onNavigateHandler} component={motion.button} variants={btnMotion} initial="initial" animate="final" exit="leave" />
    </Grid>
  );
};

export default NavBtn;
