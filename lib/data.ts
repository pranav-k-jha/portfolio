import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import gymAppImg from "@/public/assets/gym_app.png";
import restaurantImg from "@/public/assets/restaurant.png";
import hippoImg from "@/public/assets/hippo.png";
import countryApiImg from "@/public/assets/countries-api.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Fujitsu | Montreal, QC",
    description:
      "I'm now a full-stack developer, currently working with Fujitsu. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB, PostGreSQL. I'm open to full-time opportunities as my contract with Fujitsu Inc. will end in May 2024",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Front-End Developer",
    location: "D3 Innovation Hub | Montreal, QC",
    description:
      "I worked as a freelance front-end developer for D3 Innovation Hub, a startup incubator affiliated with my university, during my study at Conocrdia University.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Graduate Research Assistant",
    location: "Concordia University | Montreal, QC",
    description:
      "Served as a Graduate Research Assistant in the Department of Electrical and Computer Engineering. Contributed to the Development of a platform for Machine Learning Operations using open-source frameworks, under the guidance of Dr. Yan Liu",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2020",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Website",
    description:
    "I'm currently working on this e-commerce website as a side project where users can either create a seller profile to list products or sign up as a regular user to browse and purchase items.",
    tags: ["Next 14", "Express", "Payload CMS"],
    projectTags: ["Frontend", "Fullstack", "All"],
    imageUrl: hippoImg,
    gitRepo: "https://github.com/pranav-k-jha/digitalhippo",
    projectLink: "https://digitalhippo-drab.vercel.app/",
  },
  {
    title: "REST Countries API",
    description:
      "This project is a solution to Frontend Mentor's advanced challenge for the REST Countries API, featuring search and filter functionalities, as well as a Color Theme Switcher and Dark Mode.",
    tags: ["React", "JavaScript", "CSS", "Parcel"],
    projectTags: ["Frontend", "Fullstack", "All"],
    imageUrl: countryApiImg,
    gitRepo: "https://github.com/pranav-k-jha/countries-api-react",
    projectLink: "https://countries-api-react-anct.vercel.app/",
  },
  {
    title: "Gym Landing Page",
    description:
      "This is a modern landing page for a Gym app built using React, TypeScript, Tailwind CSS, Hero Icons, Framer Motion, Form Submit, and React Anchor Link Smooth Scroll.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Form Submit"],
    projectTags: ["Frontend", "Fullstack", "Backend", "All"],
    imageUrl: gymAppImg,
    gitRepo: "https://github.com/pranav-k-jha/gym-ts-react-app",
    projectLink: "https://gym-ts-react-app.vercel.app/",
  },
  // {
  //   title: "Restaurant Landing Page",
  //   description:
  //     "A modern restaurant landing page website with a user-friendly interface and experience, developed using React and SCSS for enhanced styling capabilities.",
  //   tags: ["React", "CSS"],
  //   projectTags: ["Frontend", "E-Commerce", "All"],
  //   imageUrl: restaurantImg,
  //   gitRepo:
  //     "https://github.com/pranav-k-jha/geritch-restaurant-landing-page-react",
  //   projectLink: "https://geritch-restaurant-landing-page-react.vercel.app/",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
