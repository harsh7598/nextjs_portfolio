"use client";

import { useTheme } from "next-themes";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function EducationPage() {
  const { theme, setTheme } = useTheme();

  const educationData = [
    {
      degree: "Post Graduation Diploma",
      institution: "Center for Development of Advanced Computing (CDAC)",
      years: "2022 - 2023",
      percentage: "84%",
      description:
        "Completed an intensive PG Diploma with a focus on Full Stack Web Development, Built and deployed full-fledged applications as part of the curriculum.",
    },
    {
      degree: "Bachelor of Engineering (Electrical)",
      institution: "University of Mumbai",
      years: "2019 - 2022",
      percentage: "70%",
      description:
        "While pursuing Electrical Engineering, developed a strong interest in software development. Worked on web-based projects and learned programming fundamentals.",
    },
    {
      degree: "Diploma in Electrical Engineering",
      institution: "Maharashtra State Board of Technical Education",
      years: "2014 - 2018",
      percentage: "72%",
      description:
        "Gained a foundational understanding of engineering principles and problem-solving. Started exploring programming and web technologies through self-learning and side projects during this time.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-screen pt-20 md:pt-32">
        <div className="max-w-[80%] mx-auto px-1 sm:px-2 lg:px-4">
          <motion.div
            className="flex flex-col text-center items-center gap-4 mb-12"
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
              My Education
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                &{" "}
              </span>
              Academic Journey
            </motion.h1>
            <motion.p
              className="text-gray-400 text-[14px] md:text-[20px] pt-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My formal learning and qualifications
            </motion.p>
          </motion.div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 border-[0.5px] ${
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
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-purple-500 p-3 rounded-full">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3
                      className={`text-lg font-medium ${
                        theme === "dark" ? "text-white/80" : "text-gray-800"
                      }`}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className={`${
                        theme === "dark" ? "text-purple-300" : "text-purple-600"
                      }`}
                    >
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <p
                  className={`mt-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {edu.years} | Percentile : {edu.percentage}
                </p>
                <p className="mt-4 text-gray-400">{edu.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-between pt-8 px-4 mb-4">
          <motion.button
            onClick={() => (window.location.href = "/skills")}
            className="px-6 py-3 border rounded-full flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Skills
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
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => (window.location.href = "/projects")}
            className="px-6 py-3 border rounded-full flex items-center gap-2 bg-white text-black dark:bg-black dark:text-white cursor-pointer"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Projects
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
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </>
  );
}
