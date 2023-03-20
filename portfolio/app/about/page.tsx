"use client";
import React from "react";
import AnimatedHorizontalPage from "../AnimatedHorizontalPage";
import Image from "next/image";
import monitorIcon from "../../public/monitor.svg";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
function page() {
  return (
    <AnimatedHorizontalPage>
      <div className="h-[50rem] lg:grid lg:grid-cols-2 ">
        <div className="m-[2rem] mt-[2rem]   md:ml-[7rem] md:mr-[4rem] lg:mr-0 md:mt-[5rem] text-zinc-200">
          <div className="w-fit">
            <h1 className="text-5xl font-bold">About Me</h1>
            <div className="h-[5px] rounded-lg mt-[1rem] bg-gradient-to-r from-orange-600 via-orange-800 w-11/12" />
          </div>
          <div className="py-8 px-4">
            <section className="p-[2rem] md:px-[2rem] md:py-[3rem] h-fit  flex items-center bg-zinc-800 rounded-lg shadow-sm shadow-black  ">
              <div className="text-base md:text-xl ">
                As a Junior Front-End Developer, I possess an impressive array
                of skills in HTML, CSS, JavaScript, React, Tailwind, TypeScript,
                and Next.JS. My expertise lies in designing and maintaining
                responsive websites that offer an exceptional user experience. I
                excel in crafting dynamic, engaging interfaces through writing
                clean, optimized code and utilizing state-of-the-art development
                tools and techniques. Moreover, I am a team player who thrives
                in collaborating with cross-functional teams to create
                outstanding web applications that meet the needs of end-users.
              </div>
            </section>
            <section className="px-4 py-8 flex justify-center " id="Resume">
              <a
                className=" flex p-3 w-fit bg-orange-800 rounded-md transition-all hover:scale-105 hover:bg-orange-900 shadow-sm shadow-black"
                href="https://docs.google.com/document/d/1nhJSRQy71D_f5tQ_msu6eb8ZT9YwV3qO"
                target={"_blank"}
              >
                <ArrowDownOnSquareIcon className="w-5 h-5" />
                <div className="mx-2 font-semibold">Download Resume</div>
              </a>
            </section>
          </div>
        </div>
        <div className=" justify-center items-center hidden lg:flex -translate-y-12">
          <Image
            src={monitorIcon}
            alt="email illustration"
            width={700}
            height={700}
          />
        </div>
      </div>
    </AnimatedHorizontalPage>
  );
}

export default page;
