import { ImageProps } from "next/image";
import ftCalView from "./calendarview.jpg";
import ftHomepage from "./homepage.jpg";
import ftNewProject from "./newproject.jpg";
import ftLogin from "./login.jpg";
import ftProjectInfo from "./projectinformation.jpg";
import ftProjectPage from "./projectpage.jpg";
import ftProjectView from "./projectview.jpg";
import ftTodayTasks from "./todaytask.jpg";

export const FTImages: ImageProps[] = [
  {
    src: ftCalView,
    alt: "FlexTask Calendar View",
  },
  {
    src: ftHomepage,
    alt: "FlexTask Homepage",
  },
  {
    src: ftNewProject,
    alt: "FlexTask New Project",
  },
  {
    src: ftLogin,
    alt: "FlexTask Login",
  },
  {
    src: ftProjectInfo,
    alt: "FlexTask Project Information",
  },
  {
    src: ftProjectPage,
    alt: "FlexTask Project Page",
  },
  {
    src: ftProjectView,
    alt: "FlexTask Project View",
  },
  {
    src: ftTodayTasks,
    alt: "FlexTask Today Tasks",
  },
];
