import { ImageProps } from "next/image";

import icon from "@/public/images/Kanban/kanban-icon.jpg";
import Dashboard from "@/public/images/Kanban/Dashboard.png";
import activity from "@/public/images/Kanban/activity.png";
import board from "@/public/images/Kanban/board.png";
import members from "@/public/images/Kanban/members.png";
import overview from "@/public/images/Kanban/overview.png";
import login from "@/public/images/Kanban/login.png";

export const kanbanImages: ImageProps[] = [
  {
    src: login,
    alt: "Kanban Login",
  },
  {
    src: Dashboard,
    alt: "Kanban Dashboard",
  },
  {
    src: activity,
    alt: "Kanban Activity",
  },
  {
    src: board,
    alt: "Kanban Board",
  },
  {
    src: members,
    alt: "Kanban Members",
  },
  {
    src: overview,
    alt: "Kanban Overview",
  },
];

export const KanbanIcon: ImageProps = {
  src: icon,
  alt: "Kanban Board Plus Icon",
};
