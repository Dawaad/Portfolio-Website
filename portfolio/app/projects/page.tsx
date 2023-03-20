"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projectOverview } from "../../information/projects";
import Link from "next/link";
import AnimatedVerticalPage from "../AnimatedVerticalPage";
import { XCircleIcon } from "@heroicons/react/24/outline";
import ProjectDescription from "./ProjectDescription";
function ProjectsPage() {
  const [selectedID, setSelectedID] = useState<string | null>(null);
  return (
    <AnimatedVerticalPage>
      <div className={`h-fit `}>
        <div
          className={`m-[2rem] mt-[2rem] md:mx-[7rem]  md:mt-[5rem] text-zinc-200  `}
        >
          <div className="w-fit mb-4">
            <h1 className="text-5xl font-bold">My Project Portfolio</h1>
            <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-11/12" />
          </div>
          <section className=" h-fit  rounded-lg grid lg:grid-cols-2">
            {projectOverview.map((item, index) => {
              return (
                <motion.div
                  layout={true}
                  transition={{ duration: 0.2 }}
                  key={item.title}
                  onClick={() => {
                    setSelectedID(item.title);
                  }}
                  layoutId={item.title}
                  className="grid grid-cols-3 rounded-lg bg-opacity-40 bg-zinc-800 m-4 p-4 transition-all hover:scale-[1.02] hover:bg-zinc-600 hover:bg-opacity-50 shadow-lg shadow-black"
                >
                  <div>
                    <div className="max-w-[200px] max-h-[200px] rounded-full bg-zinc-100 mx-4">
                      <Image {...item.logo} />
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col justify-center p-2">
                    <div className="text-zinc-400 text-sm truncate-1-lines">
                      {item.memo}
                    </div>
                    <h2 className="text-zinc-200 text-2xl md:text-3xl lg:text-4xl  font-bold truncate-1-lines pb-2">
                      {item.title}
                    </h2>
                  </div>
                </motion.div>
              );
            })}
          </section>
        </div>
        <AnimatePresence>
          {selectedID && (
            <motion.div
            onClick={() => setSelectedID(null)}
              className={`fixed top-0 bottom-0 left-0 right-0 flex w-full h-full justify-center items-center  backdrop-blur-lg`}
            >
             <ProjectDescription selectedID={selectedID} setSelectedID={setSelectedID}/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedVerticalPage>
  );
}

export default ProjectsPage;
