'use client'

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  // const [isDarkMode, setIsDarkMode] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem("theme") === "dark" || 
  //            (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  //   }
  //   return false;
  // });

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.removeItem("theme");
  //   }
  // }, [isDarkMode]);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}