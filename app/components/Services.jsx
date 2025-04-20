import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

const Services = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I am a frontend developer from Mumbai with 2 years of experience in
        multiple companies like Techno Cipher IT Solutions, PureCode AI.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className={`border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500 ${
              theme === "dark" ? "hover:bg-[#3B3B3B]" : "hover:bg-[#f9effd]"
            }`}
            style={{
              transition: "box-shadow 0.5s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                theme === "dark" ? "4px 4px 0 #fff" : "4px 4px 0 #000")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <Image src={icon} alt="" className="w-10" />
            <h3
              className={`text-lg my-4 ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-sm leading-5 ${
                theme === "dark" ? "text-white/50" : "text-gray-600"
              }`}
            >
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                src={
                  theme === "dark"
                    ? assets.right_arrow_white
                    : assets.right_arrow
                }
                alt=""
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
