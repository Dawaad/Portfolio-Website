import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-zinc-900 bg-opacity-60 h-[6rem] sticky top-0 left-0 right-0 grid grid-cols-4 ">
      <Link
        href={"/"}
        id="nav-logo"
        className=" ml-[7rem] my-8 h-fit text-3xl font-extrabold flex group cursor-pointer "
      >
        <div className="flex">
          <p>J</p>
          {["a", "r", "e", "d"].map((letter, index) => {
            return (
              <p
                key={letter}
                className={`scale-0  group-hover:scale-100 origin-bottom`}
                style={{ transition: `${200 + 200 * index}ms` }}
              >
                {letter}
              </p>
            );
          })}
        </div>
        <div className="flex transition-all duration-1000 group-hover:duration-700 -translate-x-2/3 group-hover:-translate-x-0 group-hover:mx-2">
          <p>T</p>
          {["u", "c", "k", "e", "r"].map((letter, index) => {
            return (
              <p
                key={letter}
                className={`scale-0  group-hover:scale-100 origin-bottom `}
                style={{ transition: `${200 + 200 * index}ms ` }}
              >
                {letter}
              </p>
            );
          })}
        </div>
      </Link>
      <div className="col-span-3 flex items-center justify-end space-x-6 mr-[4rem] font-semibold ">
        <Link
          className="hover:scale-[1.2] hover:text-zinc-400 transition-all group"
          href={"/"}
        >
          <p>HOME</p>
          <div className="grid-cols-2 grid">
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </Link>
        <Link
          className="hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
          href={"/about"}
        >
          <p>ABOUT ME</p>
          <div className="grid-cols-2 grid">
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </Link>
        <Link
          className="hover:scale-[1.2] text-zinc-400 hover:text-zinc-300  transition-all group"
          href={"/skills"}
        >
          <p>SKILLS</p>
          <div className="grid-cols-2 grid">
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </Link>
        <Link
          className="hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
          href={"/projects"}
        >
          <p>PROJECTS</p>
          <div className="grid-cols-2 grid">
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </Link>
        <Link
          className="hover:scale-[1.2] text-orange-600 hover:text-orange-500 transition-all group"
          href={"/resume"}
        >
          <p>RESUME</p>
          <div className="grid-cols-2 grid">
            <div className="border-b-2 border-b-zinc-600 dark:border-b-orange-500 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <div className="border-b-2 border-b-zinc-600 dark:border-b-orange-500 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </Link>

        <Link
          className=" hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
          href={"/contact"}
        >
          <p>CONTACT ME</p>
          <div className="grid-cols-2 grid">
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
            <div className="border-b-2 border-b-zinc-600 dark:border-b-zinc-200 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
