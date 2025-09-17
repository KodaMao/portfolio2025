"use client";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Hi, I&apos;m {portfolioData.personal.name}
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl text-[#374151] mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {portfolioData.personal.title}
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-[#374151] mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {portfolioData.personal.about}
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <a href={portfolioData.personal.social.github} className="btn" aria-label="GitHub">
              <Github size={18} /> GitHub
            </a>
            <a href={portfolioData.personal.social.linkedin} className="btn" aria-label="LinkedIn">
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
