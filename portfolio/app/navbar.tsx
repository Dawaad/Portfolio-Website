"use client";
import Link from "next/link";
import React from "react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
function Navbar() {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="bg-zinc-900 bg-opacity-60 h-[6rem] sticky top-0 left-0 right-0 grid grid-cols-4 text-zinc-200 z-[99]">
        <Link
          href={"/"}
          id="nav-logo"
          className="ml-[2rem] md:ml-[7rem] my-8 h-fit text-3xl font-extrabold flex group cursor-pointer "
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
        <div className="hidden col-span-3 md:flex items-center justify-end space-x-4 lg:space-x-6 mr-[4rem] font-semibold">
          <Link
            className="hover:scale-[1.2] text-zinc-400 hover:text-zinc-300 transition-all group"
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
        <div className="md:hidden col-start-4 flex items-center justify-center">
          <Bars3BottomLeftIcon
            onClick={() => setSideBarOpen(true)}
            className="w-8  hover:w-9 text-zinc-400 hover:text-zinc-300 transition-all duration-150"
          />
        </div>
      </nav>
      <div
        className={` h-full w-full bg-zinc-100 absolute top-0 right-0 bottom-0 left-0 ${
          sideBarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 z-40`}
      >
        <div className=" h-[6rem] grid grid-cols-4">
          <div className="flex items-center justify-center col-start-4">
            <XMarkIcon
              onClick={() => setSideBarOpen(false)}
              className=" w-10 font-extrabold hover:text-blue-900 hover:w-11 transition-all duration-150"
            />
          </div>
        </div>
        <div className="h-[40rem] flex flex-col justify-center items-center text-2xl font-bold space-y-8">
          <Link
            onClick={() => setSideBarOpen(false)}
            className="hover:scale-[1.2] text-zinc-900 hover:text-blue-900 transition-all group"
            href={"/"}
          >
            <p>HOME</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-blue-900 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-blue-900 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link
            onClick={() => setSideBarOpen(false)}
            className="hover:scale-[1.2] text-zinc-900 hover:text-blue-900 transition-all group"
            href={"/about"}
          >
            <p>ABOUT ME</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>
          
          <Link
            onClick={() => setSideBarOpen(false)}
            className="hover:scale-[1.2] text-zinc-900 hover:text-blue-900 transition-all group"
            href={"/projects"}
          >
            <p>PROJECTS</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>
          <Link
            onClick={() => setSideBarOpen(false)}
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
            onClick={() => setSideBarOpen(false)}
            className=" hover:scale-[1.2] text-zinc-900 hover:text-blue-900 transition-all group"
            href={"/contact"}
          >
            <p>CONTACT ME</p>
            <div className="grid-cols-2 grid">
              <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-left scale-0 group-hover:scale-100 transition-all duration-300"></div>
              <div className="border-b-2 border-b-zinc-600 dark:border-b-blue-900 origin-right scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
