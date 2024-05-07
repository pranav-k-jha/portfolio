"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electrical and Computer Engineering</span>
        , I decided to pursue my passion for programming. I enrolled in a coding
        bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma.
      </p>
      <p className="mb-3">
        I am always looking to learn new technologies. I am currently learning
        about{" "}
        <span className="font-medium">
          Docker, Monorepo, CI/CD and WebSockets
        </span>
        . I am currently
        looking for a <span className="font-medium">full-time position</span> as
        a <span className="font-medium">Front-End software developer</span>.
      </p>
      {/* I also have knowledge of <span className="font-medium">Python</span>{" "}
        and <span className="font-medium">Machine Learning</span>. */}
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and informative YouTube videos. I also
        enjoy{" "}
        <span className="font-medium">
          learning new things such as swimming, content creation and more
        </span>
        . In the near future, I plan to launch my own{" "}
        <span className="font-medium">YouTube channel</span> to share knowledge and insights.
      </p>
      
    </motion.section>
  );
}
