import { ImageProps } from "next/image";
import icon from "../public/images/Flextask/flextask-icon.jpg";
import homepage from "../public/images/Flextask/homepage.jpg";
import calendarview from "../public/images/Flextask/calendarview.jpg";
import login from "../public/images/Flextask/login.jpg";
import projectinformation from "../public/images/Flextask/projectinformation.jpg";
import projectview from "../public/images/Flextask/projectview.jpg";
import projectpage from "../public/images/Flextask/projectpage.jpg";

export const FTImages: ImageProps[] = [
  {
    src: homepage,
    alt: "FlexTask Homepage",
  },
  {
    src: calendarview,
    alt: "FlexTask Calendar View",
  },
  {
    src: login,
    alt: "FlexTask Login Page",
  },
  {
    src: projectinformation,
    alt: "FlexTask Project Information",
  },
  {
    src: projectview,
    alt: "FlexTask Project View",
  },
  {
    src: projectpage,
    alt: "FlexTask Project Page",
  },
];

export const FTIcon: ImageProps = {
  src: icon,
  alt: "FlexTask Icon",
};
