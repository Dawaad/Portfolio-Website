import { ImageProps } from "next/image";
import { ImageLocationProps } from "../Interfaces";

const locationURL =
  "https://raw.githubusercontent.com/Dawaad/portfolio-project/master/portfolio/public/images/Kanban/";

export const KanbanIcon: ImageProps = {
  src: `${locationURL}kanban-icon.jpg`,
  alt: "Kanban Board Plus Icon",
};
