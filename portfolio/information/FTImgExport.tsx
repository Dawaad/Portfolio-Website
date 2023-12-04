import { ImageProps } from "next/image";
import { ImageLocationProps } from "../Interfaces";

const locationURL =
  "https://raw.githubusercontent.com/Dawaad/portfolio-project/master/portfolio/public/images/Flextask/";

export const FTImages: ImageLocationProps[] = [
  {
    imageSrc: `${locationURL}homepage.jpg`,
    alt: "FlexTask Homepage",
  },
  {
    imageSrc: `${locationURL}calendarview.jpg`,
    alt: "FlexTask Calendar View",
  },
  {
    imageSrc: `${locationURL}login.jpg`,
    alt: "FlexTask Login Page",
  },
  {
    imageSrc: `${locationURL}projectinformation.jpg`,
    alt: "FlexTask Project Information",
  },
  {
    imageSrc: `${locationURL}projectview.jpg`,
    alt: "FlexTask Project View",
  },
  {
    imageSrc: `${locationURL}projectpage.jpg`,
    alt: "FlexTask Project Page",
  },
];

export const FTIcon: ImageProps = {
  src: `${locationURL}flextask-icon.jpg`,
  alt: "FlexTask Icon",
};
