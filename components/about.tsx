"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
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
        I’m a self-taught{" "}
        <span className="font-medium">Frontend Developer</span> based in Kenya
        who started coding while in{" "}
        <span className="font-medium">high school (Form 1)</span>. What began as
        curiosity quickly grew into a strong passion for{" "}
        <span className="italic">technology and problem solving</span>. I had
        the opportunity to participate in the{" "}
        <span className="font-medium">Kenya Science Fair</span> and advanced to
        the <span className="underline">regional level</span>, where I explored
        innovative ideas and strengthened my ability to build solutions.
      </p>

      <p>
        Today, I focus on building{" "}
        <span className="font-medium">modern, responsive web applications</span>{" "}
        using{" "}
        <span className="font-medium">React, Next.js and Tailwind CSS</span>. I
        enjoy creating clean user interfaces, improving performance, and
        continuously learning new technologies. I am especially interested in{" "}
        <span className="italic">
          secure and performance-driven development
        </span>{" "}
        as I grow in both frontend engineering and cybersecurity.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span></p>
    </motion.section>
  );
}
