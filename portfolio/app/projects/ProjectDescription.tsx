import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { projects } from "../../information/projects";
import SlideShow from "./Slideshow";
import { ImageProps } from "next/image";
function ProjectDescription({
  selectedID,
  setSelectedID,
}: {
  selectedID: string;
  setSelectedID: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const project = projects.find((item) => item.title === selectedID);
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
      className="w-3/4 h-[30rem] md:h-[40rem] bg-zinc-800 rounded-lg  shadow-2xl shadow-zinc-800 overflow-y-scroll overflow-x-hidden"
    >
      <div className="h-[5rem]  flex justify-end items-center">
        <div className="px-8" onClick={() => setSelectedID(null)}>
          <XCircleIcon className="w-10 h-10 text-zinc-400 hover:text-red-400 hover:scale-[1.1   ] transition-all duration-100" />
        </div>
      </div>
      <div className="h-fit ">
        <SlideShow images={project?.images as ImageProps[]} />
      </div>
      <div className="p-8">
        <h1 className="text-4xl font-extrabold text-zinc-200 flex justify-center">
          {project?.title}
        </h1>
        <div className="text-zinc-200 py-8 px-14 text-xs md:text-base">
          {project?.description}
        </div>
        <div className="p-8">
          <h2 className="text-3xl text-zinc-200 font-semibold">Tech Stack</h2>
          <div className="flex space-x-5 p-4">
            {project?.techStack.map((item) => {
              return item;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectDescription;
