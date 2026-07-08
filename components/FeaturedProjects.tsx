"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
    docs?: string;
    npm?: string;
  };
  image: string;
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
      "Handles 500MB+ datasets",
    ],
    techStack: ["TypeScript", "PapaParse", "XLSX"],
    links: {
      github: "#",
      docs: "#",
      demo: "#",
    },
    image: "/ingestx-demo.gif", // Placeholder
  },
  {
    id: "react-virtualized-tree",
    index: "02",
    title: "React Virtualized Tree",
    subtitle: "Canvas-powered tree component for massive datasets.",
    description:
      "A high-performance React tree component that renders thousands of nodes smoothly using virtualization and canvas. Built for applications that need responsive hierarchical data visualization.",
    features: [
      "Canvas rendering",
      "Virtualized nodes",
      "Smooth expand/collapse",
      "Keyboard navigation",
      "Headless API",
      "Handles thousands of nodes",
    ],
    techStack: ["React", "TypeScript", "Konva"],
    links: {
      github: "#",
      npm: "#",
      demo: "#",
    },
    image: "/tree-demo.gif", // Placeholder
  },
];

const FeaturedProjects = () => {
  return (
    <section className="w-full relative text-neutral-400 pt-16 md:pt-24 pb-24 md:pb-[120px] font-sans">
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
                className={`w-full lg:w-[45%] flex flex-col ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1" // Swap sides for alternating projects if desired, but user said 45/55 layout. Let's just keep them consistent or alternate.
                  }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-emerald-500 font-mono text-sm tracking-wider">
                    {project.index}
                  </span>
                  <div className="h-[1px] w-12 bg-emerald-500/30" />
                </div>

                <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                  {project.title}
                </h3>

                <p className="text-lg md:text-xl text-neutral-300 font-medium mb-6">
                  {project.subtitle}
                </p>

                <p className="text-neutral-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-12">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full text-xs font-medium border border-[#2A2A2A] text-neutral-300 bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8">
                  {project.links.github && (
                    <Link href="https://github.com/nikhilsdabhade" target="_blank" className="text-neutral-500 hover:text-neutral-900 dark:text-white/50 dark:hover:text-white transition-colors">
                      <FontAwesomeIcon icon={faGithub} className="w-[18px] h-[18px]" />
                    </Link>
                  )}
                  {(project.links.docs || project.links.npm) && (
                    <a
                      href={project.links.docs || project.links.npm}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="relative">
                        {project.links.docs ? "Docs" : "NPM"}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full" />
                      </span>
                    </a>
                  )}
                  {project.links.demo && (
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
                  )}
                </div>
              </motion.div>

              {/* Right Column - Browser Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full lg:w-[55%] ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
              >
                <div className="group relative rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#3A3A3A] hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.15)]">

                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[#2A2A2A] bg-[#0A0A0A]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#2A2A2A]" />
                      <div className="w-3 h-3 rounded-full bg-[#2A2A2A]" />
                      <div className="w-3 h-3 rounded-full bg-[#2A2A2A]" />
                    </div>

                    {/* LIVE Badge */}
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold tracking-wider text-emerald-500 uppercase">
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Browser Content (16:9 Aspect Ratio container for GIF) */}
                  <div className="relative aspect-video w-full bg-[#111] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-600 text-sm">
                      {/* Fallback text while image loads or if missing */}
                      Project Preview
                    </div>
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      unoptimized
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] opacity-80 group-hover:opacity-100"
                    />
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
