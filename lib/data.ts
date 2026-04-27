import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiMongodb, SiExpress } from "react-icons/si";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
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
    title: "Kenya Science Fair - Regional Finalist",
    location: "Kenya",
    description:
      "Participated in a national science competition and advanced to the regional stage through project-based innovation. Developed research and presentation skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "CS50x: Intro to Computer Science",
    location: "Harvard University (Online)",
    description:
      "Completed rigorous coursework covering C, Python, SQL, and web security. Gained a deep understanding of memory management, algorithms, and data structures.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Frontend Developer (Independent Projects)",
    location: "Remote",
    description:
      "Built responsive web applications using React, Next.js, and TypeScript. Focused on reusable components, clean UI architecture, and performance optimization.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Backend Fundamentals ",
    location: "Remote",
    description:
      "Implemented CRUD operations, authentication flows, and REST APIs using Node.js and Express. Integrated MongoDB for persistent data storage in production-ready apps.",
    icon: React.createElement(FaNodeJs),
    date: "2024 - Present",
  },
  {
    title: "Cybersecurity Enthusiast",
    location: "Remote",
    description:
      "Studying web security vulnerabilities including IDOR and business logic flaws. Applying a 'security-first' mindset to frontend engineering and software architecture.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Store",
    description:
      "Modern full-stack e-commerce application with product browsing, cart management, authentication, and admin dashboard.",
    tags: ["Next.js", "React", "MongoDB", "Tailwind", "TypeScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Task Manager API",
    description:
      "CRUD backend system for managing tasks with REST API architecture, authentication, and MongoDB database integration.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio showcasing projects, skills, and experience with smooth animations and responsive design.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: wordanalyticsImg,
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
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "CRUD",
  "Responsive Design",
] as const;
