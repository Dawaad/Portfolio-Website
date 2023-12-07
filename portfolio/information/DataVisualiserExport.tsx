import { ImageProps } from "next/image";

const locationPath = "/images/Graph/";
export const GraphImages: ImageProps[] = [
  {
    src: `${locationPath}Graph.png`,
    alt: "Graph",
  },
  {
    src: `${locationPath}Deletion.png`,
    alt: "Deletion",
  },
  {
    src: `${locationPath}NewEdge.png`,
    alt: "New Edge",
  },
  {
    src: `${locationPath}Traversal.png`,
    alt: "Traversal",
  },
  {
    src: `${locationPath}Dijkstras.png`,
    alt: "Dijkstras",
  },
];

export const GraphIcon: ImageProps = {
  src: `${locationPath}Graph-Icon.png`,
  alt: "Graph",
};
