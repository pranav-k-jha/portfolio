import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import gymAppImg from "@/public/assets/gym_app.png";
import restaurantImg from "@/public/assets/restaurant.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Front-End Developer",
    location: "Fujitsu | Montreal, QC",
    description:
      "I'm now a frontend developer, currently working with Fujitsu. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities as my contract with Fujitsu Inc. will end in May 2023",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Front-End Developer, Part-Time",
    location: "D3 Innovation Hub | Montreal, QC",
    description:
      "I freelanced as a front-end developer for D3 Innovation Hub, a startup incubator affiliated with my university, during my study.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Wordpress Developer, Remote (Freelance)",
    location: "MKJHA Consulting | Severn, MD",
    description:
      "I designed and developed the MKJHA Consulting website using WordPress CMS. I also managed and maintained the website’s content, ensuring it was organized and up-to-date.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2020",
  },
] as const;

export const projectsData = [
  {
    title: "Gym Landing Page",
    description:
      "This is a modern landing page for a Fitness Application frontend built using React, TypeScript, Tailwind CSS, Hero Icons, Framer Motion, Form Submit, and React Anchor Link Smooth Scroll.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Form Submit"],
    imageUrl: gymAppImg,
    gitRepo: "https://github.com/pranav-k-jha/gym-ts-react-app",
    projectLink: "https://gym-ts-react-app.vercel.app/",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "A modern restaurant landing page website with a user-friendly interface and experience, developed using React and SCSS for enhanced styling capabilities.",
    tags: ["React", "CSS"],
    imageUrl: restaurantImg,
    gitRepo:
      "https://github.com/pranav-k-jha/geritch-restaurant-landing-page-react",
    projectLink: "https://geritch-restaurant-landing-page-react.vercel.app/",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    gitRepo: "#",
    projectLink: "#",
  },
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
