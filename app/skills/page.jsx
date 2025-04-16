"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { SkillData } from "@/assets/assets";
import { useTheme } from "next-themes";
import Navbar from "../components/Navbar";

export default function SkillsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Navbar />
      <div
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
        className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      >
        <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
          <div className="flex flex-col items-center gap-4">
            <h1
              className={`font-semibold text-[30px] sm:text-[36px] md:text-[44px] lg:text-[50px] ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              Skills{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                &{" "}
              </span>
              Technologies
            </h1>
            <p className="text-gray-400 text-[14px] md:text-[20px] pt-4">
              Using the latest tech this world has to offer
            </p>
          </div>
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
        <button
          onClick={() => window.history.back()}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Back
        </button>
        <button
          onClick={() => (window.location.href = "/education")}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Next: Education
        </button>
      </div>
    </>
  );
}
