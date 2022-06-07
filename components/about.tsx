"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28"
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
          advanced backend stack such as Docker, Monorepo, CI/CD and WebSockets
        </span>
        . I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="font-medium">Front-End software developer</span>.
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
        <span className="font-medium">YouTube channel</span> to share knowledge
        and insights.
      </p>
        
      {/* <p className="mb-3">
        During my study in the Department of Electrical and Computer Engineering
        at Concordia University, these are the courses I enjoyed the most:
        <ul>
          <li className="mb-3">
            <span className="font-medium">Software Engineering (COEN6311)</span>
            : Designed a full-stack restaurant
            website using Django, REST API, JWT, PostgreSQL.
          </li>
          <li className="mb-3">
            <span className="font-medium">
              Distributed Software System (COEN6731)
            </span>
            : Designed a microservices client-server-based architecture using
            Java, SpringBoot Server, Oracle Cloud.
          </li>
          <li className="mb-3">
            <span className="font-medium">Neural Networks (COEN6331)</span>:
            Enjoyed this course and worked on a project titled Modulation
            Classification using Convolutional Neural Network based on Deep
            Learning.
          </li>
        </ul>
      </p> */}
    </motion.section>
  );
}
