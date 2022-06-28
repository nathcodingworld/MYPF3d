import React from "react";
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
export const skills = [
  {
    head: "Strength",
    body: [
      {
        subhead: "Fast Learner",
        subbody: "",
      },
      {
        subhead: "Mathematics",
        subbody: "",
      },
      {
        subhead: "logical skills",
        subbody: "",
      },
    ],
  },
  {
    head: "Weakness",
    body: [
      {
        subhead: "Graphic Design",
        subbody: "",
      },
    ],
  },
];

export const libraries = [
  {
    head: "Front End",
    body: [
      {
        subbhead: "Typescript",
        subbody: "",
      },
      {
        subbhead: "React Js",
        subbody: "",
      },
      {
        subhead: "Material UI",
        subbody: "",
      },
      {
        subhead: "Redux",
        subbody: "",
      },
      {
        subhead: "Framer Motion",
        subbody: "",
      },
    ],
  },
  {
    head: "Back End",
    body: [
      {
        subbhead: "Express Js",
        subbody: "",
      },
      {
        subbhead: "Graphql",
        subbody: "",
      },
      {
        subhead: "Material UI",
        subbody: "",
      },
      {
        subhead: "Redux",
        subbody: "",
      },
      {
        subhead: "Framer Motion",
        subbody: "",
      },
    ],
  },
];

interface testType {
  Component: ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>;
}

const te = motion.div;

const test: React.FC<testType> = ({ Component = motion.button }) => {
  return <Component></Component>;
};
