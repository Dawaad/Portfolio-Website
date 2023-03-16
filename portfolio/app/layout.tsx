import Head from "next/head";
import React from "react";
import "../styles/globals.css";
// import Footer from "./Footer";
import Navbar from "./navbar";

import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html className={`bg-zinc-900 ${rubik.variable} font-sans`} lang="en">
        <body className="overflow-x-hidden">
          <Navbar />

          {children}

          {/* <footer><Footer /></footer> */}
        </body>
      </html>
    </>
  );
}
