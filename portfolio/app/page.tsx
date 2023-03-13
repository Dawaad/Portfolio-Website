"use client";
import { ScrollReveal } from "reveal-on-scroll-react";

import { useRef, useEffect } from "react";
import Typed from "typed.js";
// export const metadata = {
//   title: "Jared Tucker - Home",
// };

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
      <div className="w-full  h-[25rem] p-4 m-4 md:grid md:grid-cols-2">
        <div className=" items-center flex justify-center md:justify-end">
          <div>
            <h1 className="text-zinc-200  text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Hello! I am Jared Tucker.
            </h1>
            <div>
              <div className="text-zinc-400 text-xl md:text-2xl font-bold flex lg:px-8 py-2 lg:py-4 lg:justify-end h-[10rem] overflow-hidden ">
                <span id = 'typed-parent' className="inline-block">
                  <span ref={typeWriterRef}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>{/* Some random mf cool ass svg here please */}</div>
      </div>
    </div>
  );
}
