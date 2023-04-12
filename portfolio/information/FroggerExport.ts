import { ImageProps } from "next/image";
import { ImageLocationProps } from "../Interfaces";
const locationURL =
  "https://raw.githubusercontent.com/Dawaad/portfolio-project/master/portfolio/public/images/Frogger/";
export const FroggerImages: ImageLocationProps[] = [
  {
    imageSrc: `${locationURL}Screen.png`,
    alt: "Frogger Screen",
  },
];
