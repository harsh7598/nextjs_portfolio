'use client';

import { useRouter } from "next/navigation";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

const About = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>
      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 mb-20 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-6 max-w-2xl font-Ovo">
            I am an experienced Frontend Developer with over a 2 years of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                onClick={() => {
                  if (title === "Skills") {
                    router.push("/skills");
                  }
                }}
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 ${
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
                <Image
                  src={theme === "dark" ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3
                  className={`my-4 font-semibold ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
                <a href="" className="flex items-center gap-2 text-sm mt-5">
                              Read more{" "}
                              <Image src={theme === "dark" ? assets.right_arrow_white : assets.right_arrow} alt="" className="w-4" />
                            </a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className={`my-4 font-Ovo ${
              theme === "dark" ? "text-white/80" : "text-gray-800"
            }`}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="grid grid-cols-5 md:grid-cols-8 gap-2"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
