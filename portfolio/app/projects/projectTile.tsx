"use client";

import React, { useEffect } from "react";
import { ProjectDetail } from "../../Interfaces";
import Image from "next/image";
import Link from "next/link";
import { spotifyIcon } from "../../information/SpotifyImgExport";
type Props = {
  project: ProjectDetail;
  callback: () => void;
};

const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  for (const card of document.getElementsByClassName("tile")) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.
    const y = e.clientY - rect.top; //y position within the element.
    (card as HTMLDivElement).style.setProperty("--mouse-x", `${x}px`);
    (card as HTMLDivElement).style.setProperty("--mouse-y", `${y}px`);
  }
};

function ProjectTile(project: Props) {
  return (
    <Link
      onClick={() => {
        project.callback();
      }}
      href={`/projects/${project.project.identifier}`}
    >
      <div
        onMouseMove={(e) => {
          handleOnMouseMove(e);
        }}
        className="rounded-lg relative bg-neutral-800/50 hover:bg-neutral-800 transition-all duration-300  cursor-pointer md:w-[20rem] lg:w-[30rem] h-[13rem] lg:h-[20rem] px-[0.35rem] md:px-0 my-2 mx-4   md:mx-4 tile  flex justify-center items-center z-[3] hover:before:opacity-100"
      >
        <div className="tile-border hover:opacity-100 mx-4"></div>
        <div className="w-full md:w-[19.5rem] lg:w-[29.5rem] h-[12.5rem] lg:h-[19.5rem] rounded-lg  bg-neutral-900/80 z-[2] relative flex overflow-hidden items-end">
          <Image fill {...spotifyIcon} />
          <h1 className="text-2xl lg:text-4xl font-bold text-zinc-100 mb-10 ml-10">
            {project.project.title}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default ProjectTile;
