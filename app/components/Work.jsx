import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const Work = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my experties in front-end development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10 dark:text-black">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 h-9 aspect-sqaure flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="" className={`w-max flex items-center justify-center gap-3 border-[0.5px] rounded-full py-3 px-10 mx-auto my-10 duration-500 ${theme === "dark" ? "text-white border-white hover:bg-[#3B3B3B]" : "text-gray-700 border-gray-700 hover:bg-[#f9effd]"}`}>
                Show more <Image src={theme === "dark" ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="right" className="w-4"/>
            </a>
    </div>
  );
};

export default Work;
