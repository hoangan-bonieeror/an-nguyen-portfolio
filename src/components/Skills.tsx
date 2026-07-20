import React from "react";
import { Layout, Server, Compass, Cpu, Layers } from "lucide-react";
import {
  SiAngular,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiPython,
  SiFlask,
  SiCplusplus,
  SiRaspberrypi,
} from "react-icons/si";
import { useLanguage } from "../contexts/LanguageContext";

interface Skill {
  name: string;
  Icon?: React.ElementType;
  color: string;
}

type SkillsTitleKey = "cat1" | "cat2" | "cat3" | "cat4" | "cat5";

interface SkillCategory {
  titleKey: SkillsTitleKey;
  icon: React.ReactNode;
  skills: Skill[];
  colorClass: string;
  bgClass: string;
}


const skillCategories: SkillCategory[] = [
  {
    titleKey: "cat1",
    icon: <Layout className="w-5 h-5" />,
    colorClass: "text-sky-500 border-sky-500/20 dark:border-sky-500/10",
    bgClass: "bg-sky-500/5",
    skills: [
      { name: "Angular", Icon: SiAngular, color: "#DD0031" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    titleKey: "cat2",
    icon: <Server className="w-5 h-5" />,
    colorClass: "text-blue-500 border-blue-500/20 dark:border-blue-500/10",
    bgClass: "bg-blue-500/5",
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Flask", Icon: SiFlask, color: "#888888" },
      { name: "REST API", color: "#6366F1" },
    ],
  },
  {
    titleKey: "cat3",
    icon: <Compass className="w-5 h-5" />,
    colorClass: "text-teal-500 border-teal-500/20 dark:border-teal-500/10",
    bgClass: "bg-teal-500/5",
    skills: [
      { name: "ROS2", color: "#22314E" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Nav2", color: "#14B8A6" },
      { name: "SLAM", color: "#0F766E" },
      { name: "AMR / AGV", color: "#0D9488" },
    ],
  },
  {
    titleKey: "cat4",
    icon: <Cpu className="w-5 h-5" />,
    colorClass: "text-emerald-500 border-emerald-500/20 dark:border-emerald-500/10",
    bgClass: "bg-emerald-500/5",
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Raspberry Pi", Icon: SiRaspberrypi, color: "#A22846" },
      { name: "GPIO", color: "#10B981" },
      { name: "Sensors", color: "#059669" },
    ],
  },
  {
    titleKey: "cat5",
    icon: <Layers className="w-5 h-5" />,
    colorClass: "text-indigo-500 border-indigo-500/20 dark:border-indigo-500/10",
    bgClass: "bg-indigo-500/5",
    skills: [
      { name: "Real-Time Data", color: "#6366F1" },
      { name: "Biometric HW", color: "#818CF8" },
      { name: "Full-Stack Arch", color: "#4F46E5" },
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-2">
            {s.sectionLabel}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {s.heading}
          </h3>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Responsive Grid of Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.titleKey}
              className="p-6 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2.5 rounded-lg ${category.bgClass} ${category.colorClass.split(" ")[0]} border`}
                >
                  {category.icon}
                </div>
                <h4 className="font-display font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {s[category.titleKey]}
                </h4>
              </div>

              {/* Logo + Name Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 dark:hover:border-sky-400/40 hover:shadow-sm transition-all duration-200 group/skill"
                  >
                    {skill.Icon ? (
                      <span
                        className="flex-shrink-0 transition-transform duration-200 group-hover/skill:scale-110"
                        style={{ color: skill.color }}
                      >
                        <skill.Icon size={16} />
                      </span>
                    ) : (
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: skill.color }}
                      />
                    )}
                    <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 group-hover/skill:text-sky-600 dark:group-hover/skill:text-sky-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
