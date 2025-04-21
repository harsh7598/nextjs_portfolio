import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Background for Light Theme */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        {theme === "dark" ? null : (
          <Image src={assets.header_bg_color} alt="" className="w-full" />
        )}
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2.5 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/30 backdrop-blur-lg dark:shadow-white/20" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-20"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:boder-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Section - Dark Mode & Contact */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-Ovo ${
              theme === "dark" ? "border-white/50" : "border-gray-500"
            }`}
          >
            Contact
            <Image
              src={
                theme === "dark" ? assets.arrow_icon_dark : assets.arrow_icon
              }
              alt="arrow"
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={theme === "dark" ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul  onClick={closeMenu}
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${
            theme === "dark" ? "bg-[#191919]" : "bg-white"
          }`}
        >
          <div className="absolute right-6 top-6">
            <Image
              src={theme === "dark" ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
