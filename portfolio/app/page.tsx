"use client";

import { ScrollReveal } from "reveal-on-scroll-react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {frontEndSkills,backEndSkills,languages} from '../information/skills'
import {
  CommandLineIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Typed from "typed.js";

export default function Page() {
  const typeWriterRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "I am a Frontend Developer",
        "I am a Software Engineer",
        "I am a Barbell Squat Enthusiast",
      ],
      typeSpeed: 75,
      backSpeed: 60,
      loop: true,
    };
    const typed = new Typed(typeWriterRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div id="landing" className="flex justify-center items-center h-[40rem]">
        <div className="w-full  h-[15rem] p-4 m-4 md:grid md:grid-cols-2">
          <div className=" items-center flex justify-center md:justify-end">
            <div>
              <h1 className="text-zinc-200  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Hello! I am Jared Tucker.
              </h1>
              <div>
                <div className="text-zinc-400 text-xl md:text-2xl font-bold flex lg:px-8 py-2 lg:py-4 lg:justify-end  overflow-hidden h-[4rem] ">
                  <span id="typed-parent" className="inline-block">
                    <span ref={typeWriterRef}></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>{/* Some random mf cool ass svg here please */}</div>
          <div className="flex items-center justify-center lg:justify-end space-x-6 mr-10 lg:mr-20 my-5 md:my-0 h-[8rem]">
            <a
              className="cursor-pointer"
              href="https://github.com/Dawaad"
              target={"_blank"}
            >
              <AiFillGithub className="w-10 h-10 text-zinc-200 hover:text-zinc-400 transition-all" />
            </a>
            <a>
              <AiFillLinkedin
                className="w-10 h-10  transition-all duration-200 text-zinc-200  hover:text-zinc-400 "
                href="https://www.linkedin.com/in/jared-tucker-00ba74250/"
                target={"_blank"}
              />
            </a>
            <a href="/contact" className="group">
              <p className="text-zinc-200 text-xl  lg:text-2xl font-bold hover:text-zinc-400  transition-all duration-[600ms]">
                Hire Me Today
              </p>
              <div className="mt-2 space-y-2 h-0 ">
                <div className="h-[2px] bg-zinc-400 m-auto scale-0 transition-all origin-left duration-[200ms] group-hover:scale-100"></div>
                <div className="h-[2px] bg-zinc-400 w-3/4 m-auto scale-0 transition-all origin-right duration-[400ms] group-hover:scale-100"></div>
                <div className="h-[2px] bg-zinc-400 w-1/2 m-auto scale-0 transition-all origin-left duration-[600ms] group-hover:scale-100"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className=" h-fit bg-zinc-800 relative text-zinc-200"
      >
        <section className="absolute top-0 left-0 right-0 h-[10rem]  bg-gradient-to-b from-zinc-900  to-zinc-800 " />
        <section className=" relative p-8 flex justify-center md:justify-start ">
          <div className=" ">
            <div className="p-4 w-fit mt-[5rem] ml-[5rem]">
              <h2 className="text-3xl md:text-5xl font-bold px-3 py-2">
                Skills
              </h2>
              <div className="h-[5px] rounded-lg bg-gradient-to-r from-orange-500 to-orange-800" />
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 p-8 ">
              <div className="flex flex-row">
                <CodeBracketIcon className="w-16 text-orange-700" />
                <div className="px-8 m-4">
                  <div className="col-span-3 text-2xl font-bold mx-2">Front End</div>
                  <div className="flex flex-wrap ">
                    {frontEndSkills.map(skill => {
                      return(
                        <div key={skill} className="bg-zinc-700 bg-opacity-60 rounded-2xl p-2 text-sm m-2 text-zinc-400">{skill}</div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <ComputerDesktopIcon className="w-16  text-orange-700" />
                <div className="px-8 m-4">
                  <div className="col-span-3 text-2xl font-bold mx-2">Back End</div>
                  <div className="flex flex-wrap
                  "> {backEndSkills.map(skill => {
                      return(
                        <div key={skill} className="bg-zinc-700 bg-opacity-60 rounded-2xl p-2 text-sm m-2 text-zinc-400">{skill}</div>
                      )
                    })}</div>
                </div>
              </div>
              <div className="flex flex-row">
                <CommandLineIcon className="w-16  text-orange-700" />
                <div className="px-8 m-4">
                  <div className="col-span-3 text-2xl font-bold mx-2">Languages</div>
                  <div className="flex flex-wrap">{languages.map(language => {
                    return(<div key={language} className="bg-zinc-700 bg-opacity-60 rounded-2xl text-sm m-2 p-2 text-zinc-300">
                      {language}
                    </div>)
                  })}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
