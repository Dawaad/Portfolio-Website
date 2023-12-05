"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "../../../information/projects";
import AnimatedVerticalPage from "../../AnimatedVerticalPage";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { ProjectDetail } from "../../../Interfaces";

function ProjectsPage({ params }: { params: { projectName: string } }) {
  const [project, setProject] = useState<ProjectDetail | undefined>(
    projects.find((project) => project.identifier === params.projectName)
  );
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
        </div>
      </div>
    </AnimatedVerticalPage>
  );
}

export default ProjectsPage;
