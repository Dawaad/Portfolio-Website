import Head from "next/head";
import React from "react";
import "../styles/globals.css";
// import Footer from "./Footer";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html className="bg-zinc-900" lang="en">
        <body>
          <Navbar />

          {children}

          {/* <footer><Footer /></footer> */}
        </body>
      </html>
    </>
  );
}
