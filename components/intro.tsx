"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{scale: 1.1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Pranav portrait"
              width={150}
              height={150}
              priority={true}
              className="h-[140px] w-[140px] mt-6 sm:mt-0 mb-6 rounded-full object-cover border-[0.35rem] border-white shadow-xl sm:h-[160px] sm:w-[160px]"
            />
          </motion.div>
          <motion.span
            className="absolute mb-6 bottom-0 right-0 text-5xl max-sm:text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{rotate: [-10, 10,]}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-[28px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Pranav.</span> I'm a{" "}
        <span className="font-bold">Front-End Developer</span> with{" "}
        <span className="font-bold">over 2 years</span> of experience. I
        specialize in developing <span className="italic">websites</span> using
        the latest technologies in the industry. My primary focus is on{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-sm font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-slate-200 group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
          borderBlack"
          href="/"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-slate-200 p-[1rem] text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer
          borderBlack"
          href="https://www.linkedin.com/in/pkrjha/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-slate-200 p-[0.85rem] text-gray-700 hover:text-gray-950  flex items-center gap-2 text-[1.15rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer
          borderBlack"
          href="https://github.com/pranav-k-jha"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
