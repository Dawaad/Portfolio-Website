import { ImageProps } from "next/image";

const locationURL =
  "https://raw.githubusercontent.com/Dawaad/portfolio-project/dev/portfolio/public/images/Graph/";
export const GraphImages: ImageProps[] = [
  {
    src: `${locationURL}Graph.png`,
    alt: "Graph",
  },
  {
    src: `${locationURL}Deletion.png`,
    alt: "Deletion",
  },
  {
    src: `${locationURL}NewEdge.png`,
    alt: "New Edge",
  },
  {
    src: `${locationURL}Traversal.png`,
    alt: "Traversal",
  },
  {
    src: `${locationURL}Dijkstras.png`,
    alt: "Dijkstras",
  },
];

export const GraphIcon: ImageProps = {
  src: `${locationURL}Graph-Icon.png`,
  alt: "Graph",
};
