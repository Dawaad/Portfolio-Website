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
    <html className="dark:bg-zinc-900 text-zinc-200" lang="en">
      <body>
      
        <Navbar />
        
        {children}
    
        <footer>{/* <Footer /> */}</footer>
      </body>
    </html>
    </>
  );
}
