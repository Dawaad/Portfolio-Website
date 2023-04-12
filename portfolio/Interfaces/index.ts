import { ReactNode } from "react";
import { ImageProps } from "next/image";

export interface ImageLocationProps {
  imageSrc: string;
  alt: string;
}

export interface ProjectDetail {
  title: string;
  description: string;
  images: ImageLocationProps[];
  techStack: ReactNode[];
  links: {
    name: string;
    icon: ReactNode;
    link: string;
  }[];
}

export interface projectOverview {
  title: string;
  memo: string;
  logo: ImageProps;
}