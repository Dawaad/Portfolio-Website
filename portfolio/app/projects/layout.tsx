import React, { useState } from "react";
import Sidebar from "./_components/Sidebar";
import Head from "next/head";
import AnimatedHorizontalPage from "../AnimatedHorizontalPage";
import "react-multi-carousel/lib/styles.css";

export const metadata = {
  title: "Jared Tucker - Projects",
  description: "Applications developed by Jared Tucker",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedHorizontalPage>
      <main className="flex flex-row ">
        <Sidebar />
        <section className="w-full  ">{children}</section>
      </main>
    </AnimatedHorizontalPage>
  );
}

export default Layout;
