"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faNpm } from "@fortawesome/free-brands-svg-icons";

interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  links: {
    github: string;
    demo: string;
    npm: string;
  };
  video: string;
}

const projects: Project[] = [
  {
    id: "ingestx",
    index: "01",
    title: "IngestX",
    subtitle: "Headless data ingestion engine for CSV and Excel.",
    description:
      "IngestX is a TypeScript library for processing massive CSV and Excel files directly in the browser. It supports chunk-based processing, schema validation, async validation, and keeps the UI responsive even with very large datasets.",
    features: [
      "Chunk-based processing",
      "Schema validation",
      "Sync & async validation",
      "Valid / Invalid row separation",
      "Framework agnostic",
      "Processes large CSV & Excel files efficiently",
    ],
    techStack: ["TypeScript", "PapaParse", "XLSX"],
    links: {
      github: "https://github.com/ParallelBytes/IngestX",
      npm: "https://www.npmjs.com/package/@parallelbytes/ingestx",
      demo: "https://ingestx.vercel.app/",
    },
    video: "/IngestX_Demo.webm",
  },
  {
    id: "react-virtualized-tree",
    index: "02",
    title: "React Virtualized Tree",
    subtitle:
      "DOM-powered & Canvas-powered tree component for massive datasets.",
    description:
      "A high-performance React tree with DOM-based and Canvas-based implementations. Designed for smooth visualization of large hierarchical datasets.",
    features: [
      "DOM rendering",
      "Canvas rendering",
      "Virtualized nodes",
      "Smooth expand/collapse",
      "Headless API",
      "Handles thousands of nodes",
    ],
    techStack: ["React", "TypeScript", "Konva"],
    links: {
      github: "https://github.com/ParallelBytes/React-Virtualized-Tree",
      npm: "https://www.npmjs.com/package/@parallelbytes/react-virtualized-tree",
      demo: "https://virualized-tree-view.vercel.app/",
    },
    video: "/React_Virtualized_Tree_Demo.webm",
  },
];

function DemoVideo({ src }: { src: string }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
    >
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="w-full relative text-neutral-600 dark:text-neutral-400 pt-16 md:pt-24 pb-24 md:pb-[120px] font-sans"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col items-center gap-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 text-center">
            Currently Building
          </h2>
        </motion.div>

        <div className="flex flex-col gap-[120px] md:gap-[160px]">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col lg:flex-row gap-[80px] lg:items-center"
            >
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full lg:w-[45%] flex flex-col ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1" // Swap sides for alternating projects if desired, but user said 45/55 layout. Let's just keep them consistent or alternate.
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-emerald-500 font-mono text-sm tracking-wider">
                    {project.index}
                  </span>
                  <div className="h-[1px] w-12 bg-emerald-500/30" />
                </div>

                <h3 className="text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-4">
                  {project.title}
                </h3>

                <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-medium mb-6">
                  {project.subtitle}
                </p>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-12">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full text-xs font-medium border border-neutral-200 dark:border-[#2A2A2A] text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8">
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="group flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-[18px] h-[18px]"
                    />
                  <span className="relative">
                      Github
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full" />
                    </span>
                  </a>
                  <a
                    href={project.links.npm}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                     <FontAwesomeIcon
                      icon={faNpm}
                      className="w-[18px] h-[18px]"
                    />
                    <span className="relative">
                      NPM
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full" />
                    </span>
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span className="relative">
                      Live Demo
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-400 transition-all group-hover:w-full" />
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column - Browser Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`w-full lg:w-[55%] ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="group relative rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#0A0A0A] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-neutral-300 dark:hover:border-[#3A3A3A] hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.15)]">
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-[#2A2A2A] bg-neutral-50 dark:bg-[#0A0A0A]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF605C] cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD44] cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-[#00CA4E] cursor-pointer" />
                    </div>

                    {/* LIVE Badge */}
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold tracking-wider text-emerald-500 uppercase">
                        Live
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-video w-full bg-neutral-100 dark:bg-[#111] overflow-hidden">
                    <DemoVideo src={project.video} />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
