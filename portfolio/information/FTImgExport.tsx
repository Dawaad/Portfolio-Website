import { ImageProps } from "next/image";

const locationPath = "/images/Flextask/";

export const FTImages: ImageProps[] = [
  {
    src: `${locationPath}homepage.jpg`,
    alt: "FlexTask Homepage",
  },
  {
    src: `${locationPath}calendarview.jpg`,
    alt: "FlexTask Calendar View",
  },
  {
    src: `${locationPath}login.jpg`,
    alt: "FlexTask Login Page",
  },
  {
    src: `${locationPath}projectinformation.jpg`,
    alt: "FlexTask Project Information",
  },
  {
    src: `${locationPath}projectview.jpg`,
    alt: "FlexTask Project View",
  },
  {
    src: `${locationPath}projectpage.jpg`,
    alt: "FlexTask Project Page",
  },
];

export const FTIcon: ImageProps = {
  src: `${locationPath}flextask-icon.jpg`,
  alt: "FlexTask Icon",
};
