"use client";

import { ScrollReveal } from "reveal-on-scroll-react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
    <div className="flex justify-center items-center h-[40rem]">
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
  );
}
