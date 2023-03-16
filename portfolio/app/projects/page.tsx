"use client";

import React from "react";
import Image from "next/image";

import { projectOverview } from "../../information/projects";
import Link from "next/link";
import AnimatedVerticalPage from "../AnimatedVerticalPage";
function ProjectsPage() {
  return (
    <AnimatedVerticalPage>
    <div className="h-[50rem] ">
      <div className="m-[2rem] mt-[2rem] md:mx-[7rem]  md:mt-[5rem] text-zinc-200">
        <div className="w-fit mb-4">
          <h1 className="text-5xl font-bold">My Project Portfolio</h1>
          <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-11/12" />
        </div>
        <section className=" h-fit  rounded-lg grid lg:grid-cols-2">
          {projectOverview.map((item, index) => {
            return (
              <Link
                key={item.title}
                href={`/projects/${item.title}`}
                className="grid grid-cols-3 rounded-lg bg-opacity-40 bg-zinc-700 m-4 p-4 transition-all hover:scale-[1.02] hover:bg-zinc-600 hover:bg-opacity-50"
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
              </Link>
            );
          })}
        </section>
      </div>
    </div>
    </AnimatedVerticalPage>
  );
}

export default ProjectsPage;
