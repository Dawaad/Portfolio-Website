import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { projects } from "../../information/projects";
import { ProjectDetail, ImageLocationProps } from "../../Interfaces";

import { shuffle } from "lodash";

function ProjectDescription({
  selectedID,
  setSelectedID,
}: {
  selectedID: string;
  setSelectedID: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [project, setProject] = useState<ProjectDetail>();
  const [displayImage, setDisplayImage] = useState<ImageLocationProps>();

  useEffect(() => {
    setProject(projects.find((item) => item.title === selectedID));
    setDisplayImage(shuffle(project?.images)[0]);
  });

  return (
    <motion.div
      onClick={(event) => {
        event.stopPropagation();
      }}
      layout={true}
      layoutId={selectedID}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
        stiffness: 100,
      }}
      className="w-[50rem] h-[40rem] bg-zinc-800 rounded-lg  shadow-2xl shadow-zinc-800 overflow-y-scroll overflow-x-hidden relative scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900"
    >
      <div className="h-[17rem] relative">
        <div
          className="h-[17rem]  bg-center bg-no-repeat bg-cover absolute top-0 left-0 right-0 bottom-0 blur-lg  "
          style={{ backgroundImage: `url(${displayImage?.imageSrc})` }}
        ></div>
        <div
          className="h-[15rem] my-12 mx-6 flex  relative bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${displayImage?.imageSrc})` }}
        ></div>
      </div>
      <div className=" m-4 h-[3rem] absolute top-0 right-0  ">
        <div className="px-8" onClick={() => setSelectedID(null)}>
          <XCircleIcon className="w-8 h-8 md:w-14 md:h-14 text-zinc-400 hover:text-red-400 hover:scale-[1.1] transition-all duration-100" />
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-3xl mx-6 mb-3 font-semibold text-zinc-200 flex">
          {project?.title}
        </h1>
        <div className="h-[1px] w-full bg-zinc-400"></div>
        <div className="text-zinc-200 py-8 px-4 md:px-14 text-xs md:text-base">
          {project?.description}
        </div>
        <div className="hidden md:block">
          <h2 className="pt-4 mx-6 mb-2 text-2xl text-zinc-400 font-semibold">Tech Stack</h2>
   
          <div className="flex space-x-5 p-4">
            {project?.techStack.map((item, index) => {
              return <div key={`techStack${index}`}>{item}</div>;
            })}
          </div>
        </div>
        <div className="p-8 flex sm:flex-col md:flex-row justify-center items-center md:justify-end  md:space-x-5">
          {project?.links.map((item) => {
            return (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                className="flex  items-center  text-zinc-200 hover:text-zinc-400 "
              >
                <div className="text-3xl lg:text-4xl m-2 md:m-4 ">
                  {item.icon}
                </div>
                <div className="text-2xl">{item.name}</div>
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDescription;
