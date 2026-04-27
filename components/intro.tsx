"use client";

import Image from "next/image";
import React from "react";
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
      className="relative min-h-screen flex items-start justify-center pt-28 md:pt-36 px-4 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT SIDE */}
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900 dark:text-white mb-6">
              Hi, I'm Glen.
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              I am a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Frontend Developer
              </span>{" "}
              based in Kenya, dedicated to building{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                user-friendly UIs
              </span>
              , fast, responsive, and secure web applications. My expertise lies
              in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                React, Next.js, and TypeScript
              </span>
              , with a heavy focus on performance-driven development.
            </p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="#contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact Me
              <BsArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            <a
              href="/CV.pdf"
              download
              className="group border border-gray-300 dark:border-white/20 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              Download CV
              <HiDownload className="group-hover:translate-y-1 transition" />
            </a>

            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 rounded-lg border border-gray-300 dark:border-white/20 hover:scale-110 transition"
              >
                <BsLinkedin />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="p-3 rounded-lg border border-gray-300 dark:border-white/20 hover:scale-110 transition"
              >
                <FaGithubSquare className="text-[1.25rem]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative"
          >
            {/* GLOW RING */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"></div>

            <Image
              src="/glen.png"
              alt="Glen Portrait"
              width={400}
              height={400}
              priority
              className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full object-cover border-4 border-white dark:border-black shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
