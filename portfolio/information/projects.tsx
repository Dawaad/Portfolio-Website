import {
  SiReact,
  SiFastapi,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiDevpost,
  SiGithub,
} from "react-icons/si";
import { RxEnter } from "react-icons/rx";
import Image from "next/image";
import flexTaskSVG from "../public/Project Icons/flextask.svg";
import spotifyRedesignSVG from "../public/Project Icons/spotify.svg";
import graphVisualiserSVG from "../public/Project Icons/graphvisualiser.svg";
import froggerSVG from "../public/Project Icons/frogger.svg";

import { FTImages } from "./FTImgExport";

import { IconType } from "react-icons";
import { ImageProps } from "next/image";
import { ReactNode } from "react";

interface ProjectDetail {
  title: string;
  description: string;
  images: ImageProps[];
  techStack: ReactNode[];
  links: {
    name: string;
    icon: ReactNode;
    link: string;
  }[];
}

interface projectOverview {
  title: string;
  memo: string;
  logo: ImageProps;
}

export const projectOverview: projectOverview[] = [
  {
    title: "FlexTask",
    memo: "A Fullstack AI Powered Task Management System",
    logo: {
      src: flexTaskSVG,
      alt: "Flex Task Icon",
    },
  },
  {
    title: "Spotify Redesign",
    memo: "A fully functional Spotify clone with a modern design",
    logo: {
      src: spotifyRedesignSVG,
      alt: "Spotify Redesign Icon",
    },
  },
  {
    title: "Graph Visualiser",
    memo: "A visualisation tool for Graphs and its algorithms",
    logo: {
      src: graphVisualiserSVG,
      alt: "Graph Visualiser Icon",
    },
  },
  {
    title: "Frogger",
    memo: "A Frogger inspired game built through Obvservables",
    logo: {
      src: froggerSVG,
      alt: "Frogger Icon",
    },
  },
];

const techStackIcon = "min-w-[20px] min-h-[20px] w-10 h-10";

export const projects: ProjectDetail[] = [
  {
    title: "FlexTask",

    description:
      "One of the trickiest aspects of project task management, be that for work, school or leisure is breaking it down into manageable chunks. It’s often common to be completely overloaded with ideas, but no feasible first steps on how to start working on them.\n Flextask is an AI powered time management app that will help you manage your project by breaking it down into more manageable tasks. We provide the user with an intuitive interface, prompting them for information about their project and generating the tasks with an OpenAI query.  ",
    images: FTImages,

    techStack: [
      <SiReact className={`${techStackIcon}`} color={"#61DBFB"} />,
      <SiFastapi className={`${techStackIcon}`} color={"#4ecc95"} />,
      <SiTypescript className={`${techStackIcon}`} color={"#3780ed"} />,
      <SiJavascript className={`${techStackIcon}`} color={"#edc937"} />,
      <SiNextdotjs className={`${techStackIcon}`} />,
      <SiTailwindcss className={`${techStackIcon}`} color={"#37d2ed"} />,
      <SiHtml5 className={`${techStackIcon}`} color={"#ed5537"} />,
      <SiCss3 className={`${techStackIcon}`} color={"#3789ed"} />,
    ],
    links: [
      {
        name: "Github",
        icon: <SiGithub />,
        link: "https://github.com/Davit-G/barbell-squat-enthusiasts",
      },
      {
        name: "Website",
        icon: <RxEnter />,
        link: "https://flextask.app/",
      },
      {
        name: "Devpost",
        icon: <SiDevpost />,
        link: "https://devpost.com/software/quick-tasks",
      },
    ],
  },
];
