import { useState } from "react";
import { ExternalLink, Terminal, Sparkles, Cpu, GitBranch } from "lucide-react";
import { Project } from "../types";
import {
  AMRIllustration,
  LEDIllustration,
  MonitoringIllustration,
  AGVIllustration,
  CanteenIllustration,
} from "./ProjectIllustrations";

const projectsList: Project[] = [
  {
    id: "project-amr",
    title: "AMR Fleet Management & Navigation System",
    description:
      "Full-stack website and firmware for controlling Autonomous Mobile Robots. Implemented SLAM for environment mapping and Nav2 for collision-free navigation with client-defined points and routes.",
    techTags: ["Angular", "Python / Flask", "ROS2", "SLAM", "Nav2"],
    iconType: "amr",
  },
  {
    id: "project-led",
    title: "Factory LED & Audio Alert System",
    description:
      "Embedded firmware for a real-time industrial temperature/humidity alert system using a 3-LED indicator (Red/Yellow/Green) and an audible alarm connected to low-latency GPIO channels.",
    techTags: ["Python", "Raspberry Pi 5", "GPIO", "Hardware Sensors"],
    iconType: "led",
  },
  {
    id: "project-monitor",
    title: "Real-Time Environmental Monitoring Dashboard",
    description:
      "Web application for real-time temperature and humidity monitoring across factory areas via scattered Raspberry Pi sensor nodes, with live-updating SVG charts and configurable alarm thresholds.",
    techTags: ["Angular", "Python / Flask", "Raspberry Pi", "REST APIs"],
    iconType: "monitoring",
  },
  {
    id: "project-agv",
    title: "AGV Route Planning & Control Website",
    description:
      "Full-stack website letting industrial clients define interactive coordinate points and routes to direct Automated Guided Vehicles (AGV) dynamically through factory facility grids.",
    techTags: ["Angular", "Python / Flask", "Route Optimization"],
    iconType: "agv",
  },
  {
    id: "project-canteen",
    title: "Canteen Meal Automation & Fingerprint Verification",
    description:
      "Full-stack website automating canteen meal registration and distribution. Integrates fingerprint biometric authentication to guarantee factory workers receive their correct assigned meal.",
    techTags: ["Angular", "Python / Flask", "Biometric Integration", "PostgreSQL"],
    iconType: "canteen",
  },
];

interface PersonalProject {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  status: "Completed" | "In Development" | "Active";
  concept: string;
  category: string;
}

const personalProjectsList: PersonalProject[] = [
  {
    id: "personal-payroll",
    title: "Salary Management System",
    description: "Full-stack application for automated salary calculations and customizable payroll configuration. Calculates net pay based on basic salary, deductions, advances, bonuses, and insurance profiles.",
    techTags: ["Angular", "Express.js", "Node.js", "REST APIs", "SQL"],
    status: "In Development",
    concept: "Implemented a customizable policy engine allowing business users to define payroll rules and calculations dynamically.",
    category: "Full-Stack Web App"
  },
  {
    id: "personal-interior",
    title: "Coco Studio",
    description: "A dual-sided web platform featuring a public showcase landing page for clients and a secure administrative portal to manage blogs, draft articles, and stage content publication.",
    techTags: ["Angular", "Express.js", "Node.js", "CMS Development", "SQL"],
    status: "In Development",
    concept: "Designed and built a custom content management system (CMS) with draft/publish staging mechanisms.",
    category: "Full-Stack Web App"
  }
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const renderIllustration = (iconType: string, isHovered: boolean) => {
    switch (iconType) {
      case "amr":
        return <AMRIllustration isHovered={isHovered} />;
      case "led":
        return <LEDIllustration isHovered={isHovered} />;
      case "monitoring":
        return <MonitoringIllustration isHovered={isHovered} />;
      case "agv":
        return <AGVIllustration isHovered={isHovered} />;
      case "canteen":
        return <CanteenIllustration isHovered={isHovered} />;
      default:
        return <div className="h-40 bg-slate-800 rounded-t-xl" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-b border-slate-100 dark:border-slate-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-2">
            03. Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Projects
          </h3>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Subsection: Personal Projects */}
        <div className="mb-20">
          <div className="mb-8 pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
            <h4 className="text-xl font-display font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              Personal Projects
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                Independent Development
              </span>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
              Self-initiated full-stack applications built to solve real-world problems and explore modern architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalProjectsList.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800/80 hover:border-sky-500/40 dark:hover:border-sky-400/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group overflow-hidden"
              >
                {/* Blueprint Grid Header */}
                <div className="h-32 relative bg-slate-50 dark:bg-slate-950 border-b border-dashed border-slate-200 dark:border-slate-800/80 overflow-hidden flex items-center justify-center bg-[linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:12px_12px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none opacity-40" />
                  <div className="flex items-center gap-4 text-slate-300 dark:text-slate-700 group-hover:text-sky-500/40 dark:group-hover:text-sky-400/40 transition-colors duration-300">
                    <Sparkles className="w-8 h-8 stroke-[1.5]" />
                    <div className="w-12 h-[1px] border-t border-dashed border-slate-300 dark:border-slate-700" />
                    <Cpu className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`absolute top-4 right-4 text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${
                    project.status === 'Completed'
                      ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20'
                      : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-mono font-medium tracking-wider text-sky-500 dark:text-sky-400 uppercase flex items-center gap-1">
                        <GitBranch className="w-3 h-3" />
                        {project.category}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors mb-2 leading-snug">
                      {project.title}
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Concept Focus Box */}
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/60 mb-6">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold block mb-1">
                        Concept Focus
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-sans italic leading-relaxed">
                        {project.concept}
                      </p>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection: Featured Projects */}
        <div>
          <div className="mb-8 pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
            <h4 className="text-xl font-display font-bold text-slate-800 dark:text-slate-200">
              Featured Work
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
              Production-ready applications and embedded solutions built for industrial and client deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsList.map((project) => {
              const isHovered = hoveredId === project.id;
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/30 dark:hover:border-sky-400/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden"
                >
                  {/* Custom Dynamic Illustration */}
                  {renderIllustration(project.iconType, isHovered)}

                  {/* Content area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Folder icon & tech label */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-mono font-medium tracking-wider text-sky-500 dark:text-sky-400 uppercase flex items-center gap-1">
                          <Terminal className="w-3 h-3" />
                          Embedded & Web
                        </span>
                        <div className="text-slate-400 dark:text-slate-500 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="font-display font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors mb-2 leading-snug">
                        {project.title}
                      </h4>

                      <p className="text-sm text-slate-600 dark:text-slate-400 font-sans leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {project.techTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
