import { ImageProps } from "next/image";
import { ImageLocationProps } from "../Interfaces";

const locationURL =
  "https://raw.githubusercontent.com/Dawaad/portfolio-project/dev/portfolio/public/images/SetTrack/";

export const setTrackIcon: ImageProps = {
  src: `${locationURL}settrack-icon.jpg`,
  alt: "Set Track Icon",
};
