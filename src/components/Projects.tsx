import { useState } from "react";
import { ExternalLink, Terminal, Sparkles, Cpu, GitBranch } from "lucide-react";
import type { Project } from "../types";
import {
  AMRIllustration,
  LEDIllustration,
  MonitoringIllustration,
  AGVIllustration,
  CanteenIllustration,
} from "./ProjectIllustrations";
import { useLanguage } from "../contexts/LanguageContext";

interface PersonalProject {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  status: string;
  concept: string;
  category: string;
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { t } = useLanguage();
  const p = t.projects;

  // Build project lists from translations so they update on locale change
  const projectsList: Project[] = [
    {
      id: "project-amr",
      title: p.amr_title,
      description: p.amr_desc,
      techTags: ["Angular", "Python / Flask", "ROS2", "SLAM", "Nav2"],
      iconType: "amr",
    },
    {
      id: "project-led",
      title: p.led_title,
      description: p.led_desc,
      techTags: ["Python", "Raspberry Pi 5", "GPIO", "Hardware Sensors"],
      iconType: "led",
    },
    {
      id: "project-monitor",
      title: p.monitor_title,
      description: p.monitor_desc,
      techTags: ["Angular", "Python / Flask", "Raspberry Pi", "REST APIs"],
      iconType: "monitoring",
    },
    {
      id: "project-agv",
      title: p.agv_title,
      description: p.agv_desc,
      techTags: ["Angular", "Python / Flask", "Route Optimization"],
      iconType: "agv",
    },
    {
      id: "project-canteen",
      title: p.canteen_title,
      description: p.canteen_desc,
      techTags: ["Angular", "Python / Flask", "Biometric Integration", "PostgreSQL"],
      iconType: "canteen",
    },
  ];

  const personalProjectsList: PersonalProject[] = [
    {
      id: "personal-payroll",
      title: p.payroll_title,
      description: p.payroll_desc,
      techTags: ["Angular", "Express.js", "Node.js", "REST APIs", "SQL"],
      status: p.statusInDevelopment,
      concept: p.payroll_concept,
      category: p.payroll_category,
    },
    {
      id: "personal-interior",
      title: p.interior_title,
      description: p.interior_desc,
      techTags: ["Angular", "Express.js", "Node.js", "CMS Development", "SQL"],
      status: p.statusInDevelopment,
      concept: p.interior_concept,
      category: p.interior_category,
    },
    {
      id: "csv-to-database-pipeline",
      title: p.csv_title,
      description: p.csv_desc,
      techTags: ["Python", "pandas", "SQLAlchemy", "PostgreSQL", "ETL"],
      status: p.statusInDevelopment,
      concept: p.csv_concept,
      category: p.csv_category,
    },
    {
      id: "api-data-ingestion-pipeline",
      title: p.api_title,
      description: p.api_desc,
      techTags: ["Python", "Requests", "SQLite", "PostgreSQL", "Data Modeling"],
      status: p.statusInDevelopment,
      concept: p.api_concept,
      category: p.api_category,
    },
  ];

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
            {p.sectionLabel}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {p.heading}
          </h3>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Subsection: Personal Projects */}
        <div className="mb-20">
          <div className="mb-8 pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
            <h4 className="text-xl font-display font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              {p.personalLabel}
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                {p.personalBadge}
              </span>
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
              {p.personalDesc}
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
                  <span
                    className={`absolute top-4 right-4 text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${
                      project.status === p.statusCompleted
                        ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                    }`}
                  >
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
                        {p.conceptFocus}
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
              {p.featuredLabel}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-sans">
              {p.featuredDesc}
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
                          {p.embeddedWeb}
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
