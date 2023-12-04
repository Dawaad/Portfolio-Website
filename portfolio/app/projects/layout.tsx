"use client";

import React, { useState } from "react";
import { ProjectDetail } from "../../Interfaces";
import { projects } from "../../information/projects";
import AnimatedHorizontalPage from "../AnimatedHorizontalPage";
import ProjectTile from "./projectTile";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
function Layout({ children }: { children: React.ReactNode }) {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);

  return (
    <AnimatedHorizontalPage>
      <main className="flex flex-row overflow-hidden">
        <div className="absolute md:hidden"></div>
        <div
          className={`absolute md:hidden px-8 py-4 flex justify-start items-center text-zinc-100 cursor-pointer transition-all hover:scale-[1.04] duration-300`}
          onClick={() => {
            setSideBarOpen(true);
          }}
        >
          <span className="text-lg font-semibold pr-4">Open Menu</span>
          <ArrowRightIcon className="w-6 h-6 font-semibold " />
        </div>
        <aside
          className={`md:w-fit h-[90dvh] scrollbar-thin md:pr-[5rem] pb-8 lg:pr-8 scrollbar-track-zinc-700 overflow-y-auto overflow-x-hidden tiles rounded-lg absolute md:relative ${
            sideBarOpen
              ? "left-0 right-0"
              : "-translate-x-full md:-translate-x-0"
          } transition-all w-full backdrop-blur-lg`}
        >
          <div
            className="md:hidden px-8 py-4 flex justify-start items-center text-zinc-100 cursor-pointer transition-all hover:scale-[1.04]"
            onClick={() => {
              setSideBarOpen(false);
            }}
          >
            <ArrowLeftIcon className="w-6 h-6 font-semibold " />
            <span className="text-lg font-semibold pl-4">Close Menu</span>
          </div>
          {projects.map((project: ProjectDetail) => {
            return (
              <ProjectTile
                callback={() => {
                  setSideBarOpen(false);
                }}
                key={project.identifier}
                project={project}
              />
            );
          })}
        </aside>

        <section>{children}</section>
      </main>
    </AnimatedHorizontalPage>
  );
}

export default Layout;
