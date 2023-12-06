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

import { ProjectDetail } from "../Interfaces";
import { FTImages, FTIcon } from "./FTImgExport";
import { SpotifyImages, spotifyIcon } from "./SpotifyImgExport";
import { GraphImages, GraphIcon } from "./DataVisualiserExport";
import { setTrackIcon } from "./SetTrackImgExport";
import { KanbanIcon } from "./KanbanImgExport";
const techStackIcon = "min-w-[20px] min-h-[20px] w-10 h-10";

export const projects: ProjectDetail[] = [
  {
    title: "Kanban Board Plus",
    identifier: "kbp",
    description: "",
    icon: KanbanIcon,
    images: [],
    techStack: [],
    links: [],
  },
  {
    title: "SetTrack",
    identifier: "settrack",
    icon: setTrackIcon,
    description: "",
    images: [],
    techStack: [],
    links: [],
  },
  {
    title: "FlexTask",
    identifier: "flextask",
    description:
      "This application was built to leverage OpenAi's natural language processing capabilities accessible through their API to develop a Ai Powered Task breakdown system. Where users are able to input their project ideas and descriptions, which is then broken down into relevant Sub-tasks to help improve the Users work management capabilities and productivity.",
    images: FTImages,
    icon: FTIcon,

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
  {
    title: "Spotify Redesign",
    identifier: "spotify",
    description:
      "The Spotify Redesign Project is an application using NextJS, nextAuth, TailwindCSS and uses the Spotify API, this application allows users to connect their spotify accounts and have complete control over the songs they are currently playing through any official Spotify Application. The application also lets users view their playlists and search for new Artists and Albums. This application is fully responsive with the use of TailwindCSS, allowing for user on all devices.",
    images: SpotifyImages,
    icon: spotifyIcon,
    techStack: [
      <SiReact className={`${techStackIcon}`} color={"#61DBFB"} />,
      <SiTypescript className={`${techStackIcon}`} color={"#3780ed"} />,
      <SiNextdotjs className={`${techStackIcon}`} />,
      <SiTailwindcss className={`${techStackIcon}`} color={"#37d2ed"} />,
      <SiHtml5 className={`${techStackIcon}`} color={"#ed5537"} />,
      <SiCss3 className={`${techStackIcon}`} color={"#3789ed"} />,
    ],
    links: [
      {
        name: "Github",
        icon: <SiGithub />,
        link: "https://github.com/Dawaad/NextJS-Spotify-App",
      },
      {
        name: "Website",
        icon: <RxEnter />,
        link: "https://nextjs-spotify-resdesign.vercel.app/",
      },
    ],
  },
  {
    title: "Graph Visualiser",
    identifier: "graphs",
    description:
      "The Data Structure Visualisation Project is an application built using ReactJS, TypeScript and TailwindCSS, using data structures and algorithms coded from scratch without the use of any external libaries to help display or traverse graphs. This application allows users to create their own graphs with vertices and directional weighted edges in order to run popular algorithms, currently including BFS, DFS and Dijkstras. The graph is fully interactive with users being able to move vertices around, with all edge positioning constantly updated to match the new coordinates to ensure a smooth viewing and user experience.",
    images: GraphImages,
    icon: GraphIcon,
    techStack: [
      <SiReact className={`${techStackIcon}`} color={"#61DBFB"} />,
      <SiTypescript className={`${techStackIcon}`} color={"#3780ed"} />,
      <SiTailwindcss className={`${techStackIcon}`} color={"#37d2ed"} />,
      <SiHtml5 className={`${techStackIcon}`} color={"#ed5537"} />,
      <SiCss3 className={`${techStackIcon}`} color={"#3789ed"} />,
    ],
    links: [
      {
        name: "Github",
        icon: <SiGithub />,

        link: "https://github.com/Dawaad/data-structure-visualiser",
      },
      {
        name: "Website",
        icon: <RxEnter />,
        link: "https://data-structure-visualiser.vercel.app/",
      },
    ],
  },
];
