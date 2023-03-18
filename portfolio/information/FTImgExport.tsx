import { ImageProps } from "next/image";

import FTCalendarView from 'public/calendarview.jpg'
import FTHomepage from 'public/homepage.jpg'
import FTNewProject from 'public/newproject.jpg'
import FTLogin from 'public/login.jpg'
import FTProjectInformation from 'public/projectinformation.jpg'
import FTProjectPage from 'public/projectpage.jpg'
import FTProjectView from 'public/projectview.jpg'
import FTTodayTask from 'public/todaytask.jpg'

export const FTImages: ImageProps[] = [
  {
    src: FTCalendarView,
    alt: "FlexTask Calendar View",
  },
  {
    src: FTHomepage,
    alt: "FlexTask Homepage",
  },
  {
    src: FTNewProject,
    alt: "FlexTask New Project",
  },
  {
    src: FTLogin,
    alt: "FlexTask Login",
  },
  {
    src: FTProjectInformation,
    alt: "FlexTask Project Information",
  },
  {
    src: FTProjectPage,
    alt: "FlexTask Project Page",
  },
  {
    src: FTProjectView,
    alt: "FlexTask Project View",
  },
  {
    src: FTTodayTask,
    alt: "FlexTask Today Tasks",
  },
];
