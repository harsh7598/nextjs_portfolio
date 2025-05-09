import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import twitter from "./twitter.png";
import linkdin from "./linkdin.png";
import github from "./github.png";
import postman from "./postman.png";
import html from "./html.png";
import css from "./css.png";
import javascript from "./js.png";
import tailwind from "./tailwind.png";
import react from "./react.png";
import redux from "./redux.png";
import typescript from "./ts.png";
import next from "./next.png";
import node from "./node-js.png";
import mongo from "./mongo.png";
import pro1_1 from "./pro1_1.png";
import pro2_1 from "./pro2_1.png";
import pro3_1light from "./pro3_1light.png";
import pro3_1dark from "./pro3_1dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  twitter,
  linkdin,
  github,
  postman,
  html,
  css,
  javascript,
  tailwind,
  react,
  redux,
  typescript,
  next,
  node,
  mongo,
  pro1_1,
  pro2_1,
  pro3_1light,
  pro3_1dark,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Skills",
    description: "JavaScript, React Js, Next Js, Node Js",
    link: "/skills",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.E., PG-Diploma (C-DAC)",
    link: "/education",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
    link: "/projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.mongodb,
  assets.figma,
  assets.git,
  assets.firebase,
  assets.postman,
  assets.github,
];

export const SkillData = [
  {
    name: "Html 5",
    Image: assets.html,
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: assets.css,
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: assets.javascript,
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: assets.tailwind,
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: assets.react,
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: assets.redux,
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: assets.typescript,
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: assets.next,
    width: 80,
    height: 80,
  },

  {
    name: "Node js",
    Image: assets.node,
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: assets.mongo,
    width: 40,
    height: 40,
  },
];

export const getProjectsData = (theme) => [
  {
    title: "Rielverse Dashboard",
    description:
      "Modern admin dashboard for managing car insurance and insights",
    technologies: "Next.js, TypeScript, Tailwind CSS, Chart.js",
    image: assets.pro1_1,
    link: "https://rielverse-dashboard.vercel.app/",
  },
  {
    title: "MERN Grocery App",
    description:
      "A full-stack grocery management application built with the MERN stack.",
    technologies: "MongoDB, Express.js, React, Node.js",
    image: assets.pro2_1,
    link: "https://github.com/harsh7598/mern_grocery",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio built with Next.js and Tailwind CSS",
    technologies: "Next.js, Tailwind, Framer Motion",
    image: theme === "dark" ? assets.pro3_1dark : assets.pro3_1light,
    link: "https://nextjs-portfolio-eta-gray.vercel.app/",
  },
  {
    title: "Rielverse Dashboard",
    description:
      "Modern admin dashboard for managing car insurance and insights",
    technologies: "Next.js, TypeScript, Tailwind CSS, Chart.js",
    image: assets.pro1_1,
    link: "https://rielverse-dashboard.vercel.app/",
  },
  {
    title: "Task Management App",
    description: "Productivity application with real-time collaboration",
    technologies: "React, Firebase, Redux",
    image: "/project3.jpg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio built with Next.js and Tailwind CSS",
    technologies: "Next.js, Tailwind, Framer Motion",
    image: theme === "dark" ? assets.pro3_1dark : assets.pro3_1light,
    link: "https://nextjs-portfolio-eta-gray.vercel.app/",
  }
];
