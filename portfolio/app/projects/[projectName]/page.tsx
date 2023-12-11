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
      items: 2,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
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
      <div
        className={`m-[2rem] mt-[4rem] md:mx-[3rem] lg:mx-[7rem]  md:mt-[5rem] text-zinc-200  `}
      >
        <div className="w-fit mb-4">
          <h1 className="text-5xl font-bold">{project?.title}</h1>
          <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-11/12" />
        </div>
      </div>
      <div className="w-[70dvw] flex justify-center">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          itemClass="carousel-item-padding-40-px"
          className="md:max-w-[50dvw]  border-zinc-200 border-2 rounded-lg  mx-12 h-[30dvh] md:h-[50dvh]"
          partialVisible={false}
        >
          {project?.images.map((image, index) => {
            return (
              <div className="" key={index}>
                <Image
                  {...image}
                  alt={image.alt}
                  fill
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </AnimatedVerticalPage>
  );
}

export default ProjectsPage;
