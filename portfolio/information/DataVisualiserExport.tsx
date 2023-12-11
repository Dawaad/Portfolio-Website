import { ImageProps } from "next/image";
import icon from "../public/images/Graph/Graph-Icon.png";
import graph from "../public/images/Graph/Graph.png";
import deletion from "../public/images/Graph/Deletion.png";
import newEdge from "../public/images/Graph/NewEdge.png";
import traversal from "../public/images/Graph/Traversal.png";
import dijkstras from "../public/images/Graph/Dijkstras.png";

export const GraphImages: ImageProps[] = [
  {
    src: graph,
    alt: "Graph",
  },
  {
    src: deletion,
    alt: "Deletion",
  },
  {
    src: newEdge,
    alt: "New Edge",
  },
  {
    src: traversal,
    alt: "Traversal",
  },
  {
    src: dijkstras,
    alt: "Dijkstras",
  },
];

export const GraphIcon: ImageProps = {
  src: icon,
  alt: "Graph",
};
