import { Grid, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const paperMotion = {
  initial: {
    width: "max-content",
    backgroundColor: "#00796b",
  },
  final: {
    width: "100%",
    backgroundColor: "#00695c",
    transition: {
      duration: 0.5,
    },
  },
};

const SkillContent = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Paper
        children={<Typography variant="h6" children="STRENGHT" color={"white"} p={1} paddingLeft={2} />}
        elevation={7}
        component={motion.div}
        variants={paperMotion}
        initial={"initial"}
        animate={"final"}
      />
    </Stack>
  );
};

export default SkillContent;
