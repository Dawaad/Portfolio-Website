"use client";

import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "../../../information/projects";
import AnimatedVerticalPage from "../../AnimatedVerticalPage";
import { XCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/navigation";
import { ProjectDetail } from "../../../Interfaces";

function ProjectsPage({ params }: { params: { projectName: string } }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [project, setProject] = useState<ProjectDetail | undefined>(
    projects.find((project) => project.identifier === params.projectName)
  );
  const router = useRouter();

  useEffect(() => {
    if (!project) {
      router.push("/projects");
    }
  });

  return (
    <AnimatedVerticalPage>
      <div className={`h-fit `}>
        <div
          className={`m-[2rem] mt-[4rem]  md:mx-[7rem]  md:mt-[5rem] text-zinc-200  `}
        >
          <div className="w-fit mb-4">
            <h1 className="text-5xl font-bold">{project?.title}</h1>
            <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-11/12" />
          </div>
          <Carousel
            arrows
            responsive={responsive}
            showDots
            infinite
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            {project?.images.map((image) => {
              return (
                <div
                  key={image.src.toString()}
                  className="w-full h-full relative"
                >
                  <Image
                    {...image}
                    alt={image.alt}
                    className="rounded-lg"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </AnimatedVerticalPage>
  );
}

export default ProjectsPage;
