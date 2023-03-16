import {
  SiReact,
  SiFastapi,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import Image from "next/image";
import flexTaskSVG from "../public/Project Icons/flextask.svg";
import spotifyRedesignSVG from "../public/Project Icons/spotify.svg";
import graphVisualiserSVG from "../public/Project Icons/graphvisualiser.svg";
import froggerSVG from "../public/Project Icons/frogger.svg";

import { IconType } from "react-icons";
import { ImageProps } from "next/image";

interface singularProject {
  title: string;
  memo: string;
  description: string;
  images: string[];
  logo: string;
  techStack: IconType[];
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

export const projects = [
  {
    title: "FlexTask",
    memo: "AI Powered Task Management System",
    description:
      "One of the trickiest aspects of project task management, be that for work, school or leisure is breaking it down into manageable chunks. It’s often common to be completely overloaded with ideas, but no feasible first steps on how to start working on them.\n Flextask is an AI powered time management app that will help you manage your project by breaking it down into more manageable tasks. We provide the user with an intuitive interface, prompting them for information about their project and generating the tasks with an OpenAI query.  ",
    images: [],

    techStack: [
      <SiReact />,
      <SiFastapi />,
      <SiTypescript />,
      <SiJavascript />,
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiHtml5 />,
      <SiCss3 />,
    ],
    links: [
      {
        name: "Github",
        link: "https://github.com/Davit-G/barbell-squat-enthusiasts",
      },
      {
        name: "Website",
        link: "https://flextask.app/",
      },
      {
        name: "Devpost",
        link: "https://devpost.com/software/quick-tasks",
      },
    ],
  },
];
