import { ImageProps } from "next/image";
import { ImageLocationProps } from "../Interfaces";

const locationURL =
  "https://raw.githubusercontent.com/Dawaad/portfolio-project/master/portfolio/public/images/Graph/";
export const GraphImages: ImageLocationProps[] = [
  {
    imageSrc: `${locationURL}Graph.png`,
    alt: "Graph",
  },
  {
    imageSrc: `${locationURL}Deletion.png`,
    alt: "Deletion",
  },
  {
    imageSrc: `${locationURL}NewEdge.png`,
    alt: "New Edge",
  },
  {
    imageSrc: `${locationURL}Traversal.png`,
    alt: "Traversal",
  },
  {
    imageSrc: `${locationURL}Dijkstras.png`,
    alt: "Dijkstras",
  },
];
