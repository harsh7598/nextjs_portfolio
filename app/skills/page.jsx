"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { SkillData } from "@/assets/assets";
import { useTheme } from "next-themes";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Navbar />
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
          <motion.div
            className="flex flex-col items-center gap-4"
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
              Skills{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                &{" "}
              </span>
              Technologies
            </motion.h1>
            <motion.p
              className="text-gray-400 text-[14px] md:text-[20px] pt-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Using the latest tech this world has to offer
            </motion.p>
          </motion.div>
          <Swiper
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 5,
              },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[90%] md:max-w-[80%]"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 5,
              },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="max-w-[90%] md:max-w-[80%]"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="fixed bottom-10 left-10 right-10 flex justify-between">
        <motion.button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 border rounded-full flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black cursor-pointer"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
        <motion.button
          onClick={() => (window.location.href = "/education")}
          className="px-6 py-3 border rounded-full flex items-center gap-2 bg-white text-black dark:bg-black dark:text-white cursor-pointer"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
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
      </div>
    </>
  );
}
