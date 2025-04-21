"use client";

import { useTheme } from "next-themes";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { getProjectsData } from "@/assets/assets";
import { useState } from "react";

export default function ProjectsPage() {
  const { theme, setTheme } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const allProjects = getProjectsData(theme);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-screen pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-4">
          <motion.div
            className="flex flex-col text-center items-center gap-4 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={`font-semibold text-[30px] sm:text-[36px] md:text-[44px] lg:text-[50px] ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My Projects
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                &{" "}
              </span>
              Works
            </motion.h1>
            <motion.p
              className="text-gray-400 text-[14px] md:text-[20px] pt-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Showcase of my development work and contributions
            </motion.p>
          </motion.div>
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {displayedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 duration-500 border-[0.5px] ${
                  theme === "dark"
                    ? "border-white hover:shadow-white hover:bg-[#3B3B3B]"
                    : "border-gray-400 hover:bg-[#f9effd]"
                }`}
                style={{ transition: "box-shadow 0.5s ease-in-out" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    theme === "dark" ? "3px 3px 0 #fff" : "4px 4px 0 #000")
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3
                    className={`text-lg font-medium ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mt-1 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <p
                    className={`mt-1 text-sm font-medium ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.technologies}
                  </p>
                  <a
                    href={project.link}
                    className={`mt-2 inline-block text-sm font-medium ${
                      theme === "dark"
                        ? "text-white hover:text-purple-500"
                        : "text-gray-600 hover:text-purple-500"
                    } transition-colors`}
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {allProjects.length > 3 && (
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </motion.div>
          )}
        </div>
        <div className="flex justify-between pt-4 md:pt-2 px-4 mb-4">
          <motion.button
            onClick={() => (window.location.href = "/education")}
            className="px-6 py-3 border rounded-full flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Education
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 border rounded-full flex items-center gap-2 bg-white text-black dark:bg-black dark:text-white cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </>
  );
}
