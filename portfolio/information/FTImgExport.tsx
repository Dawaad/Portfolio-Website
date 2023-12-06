import { ImageProps } from "next/image";

const locationURL =
  "https://raw.githubusercontent.com/Dawaad/portfolio-project/dev/portfolio/public/images/Flextask/";

export const FTImages: ImageProps[] = [
  {
    src: `${locationURL}homepage.jpg`,
    alt: "FlexTask Homepage",
  },
  {
    src: `${locationURL}calendarview.jpg`,
    alt: "FlexTask Calendar View",
  },
  {
    src: `${locationURL}login.jpg`,
    alt: "FlexTask Login Page",
  },
  {
    src: `${locationURL}projectinformation.jpg`,
    alt: "FlexTask Project Information",
  },
  {
    src: `${locationURL}projectview.jpg`,
    alt: "FlexTask Project View",
  },
  {
    src: `${locationURL}projectpage.jpg`,
    alt: "FlexTask Project Page",
  },
];

export const FTIcon: ImageProps = {
  src: `${locationURL}flextask-icon.jpg`,
  alt: "FlexTask Icon",
};
