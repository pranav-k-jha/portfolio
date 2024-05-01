"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gitRepo,
  projectLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] borderBlack rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
          <ul className="flex flex-wrap justify-center gap-2 pt-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </motion.li>
            ))}
          </ul>
          <motion.div className="flex justify-center items-center -mb-4 py-2 gap-2">
            <a href={projectLink} target="_blank" rel="noreferrer">
              <motion.div
                className="flex justify-center items-center bg-slate-100 borderBlack rounded-full p-2 hover:bg-gray-200"
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
              >
                <AiFillEye />
              </motion.div>
            </a>
            <a href={gitRepo} target="_blank" rel="noreferrer">
              <motion.div
                className="flex justify-center items-center bg-slate-100 borderBlack rounded-full p-2 hover:bg-gray-200"
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
              >
                <AiFillGithub />
              </motion.div>
            </a>
          </motion.div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

{
  /* <motion.div
whileHover={{ opacity: [0, 1] }}
transition={{
  duration: 0.25,
  ease: "easeInOut",
  staggerChildren: 0.5,
}}
className="hover:box-shadow:0 0 25px rgba(0, 0, 0, 0.2)"
>
<a href="#" target="_blank" rel="noreferrer">
  <motion.div
    whileInView={{ scale: [0, 1] }}
    whileHover={{ scale: [1, 0.9] }}
    transition={{ duration: 0.25 }}
    className="flex justify-center items-center text-lg z-[99]"
  >
    <AiFillEye />
  </motion.div>
</a>
<a href="#" target="_blank" rel="noreferrer">
  <motion.div
    whileInView={{ scale: [0, 1] }}
    whileHover={{ scale: [1, 0.9] }}
    transition={{ duration: 0.25 }}
    className="flex justify-center items-center"
  >
    <AiFillGithub />
  </motion.div>
</a>
</motion.div> */
}
