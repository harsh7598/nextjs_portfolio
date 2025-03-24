import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
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
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? "bg-white/50 backdrop-blur-lg dark:bg-[#11001F] dark:shadow-white/20" : ""}`}
      >
        <a href="#top">
          <Image
            src={'isDarkMode' ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}
        >
          {["Home", "About me", "Services", "My Work", "Contact me"].map(
            (item, index) => (
              <li key={index}>
                <a className="font-Ovo" href={`#${item.replace(/\s+/g, "").toLowerCase()}`}>
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Right Section - Dark Mode & Contact */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-white dark:bg-[#11001F]"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          {["Home", "About me", "Services", "My Work", "Contact me"].map(
            (item, index) => (
              <li key={index}>
                <a
                  className="font-Ovo"
                  onClick={closeMenu}
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;