import { ReactNode } from "react";
import { ImageProps } from "next/image";

export interface ImageLocationProps {
  imageSrc: string;
  alt: string;
}

export interface ProjectDetail {
  title: string;
  identifier: string;
  description: string;
  icon: ImageProps;
  images: ImageLocationProps[];
  techStack: ReactNode[];
  links: {
    name: string;
    icon: ReactNode;
    link: string;
  }[];
}

