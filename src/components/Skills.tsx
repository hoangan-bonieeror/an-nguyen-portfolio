import React from "react";
import { Layout, Server, Compass, Cpu, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  colorClass: string;
  bgClass: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    colorClass: "text-sky-500 border-sky-500/20 dark:border-sky-500/10",
    bgClass: "bg-sky-500/5",
    skills: ["Angular", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    colorClass: "text-blue-500 border-blue-500/20 dark:border-blue-500/10",
    bgClass: "bg-blue-500/5",
    skills: ["Python", "Flask", "REST API Design"],
  },
  {
    title: "Robotics & Automation",
    icon: <Compass className="w-5 h-5" />,
    colorClass: "text-teal-500 border-teal-500/20 dark:border-teal-500/10",
    bgClass: "bg-teal-500/5",
    skills: ["ROS2 (Python, C++)", "SLAM", "Nav2", "AMR/AGV Systems"],
  },
  {
    title: "Embedded/Firmware",
    icon: <Cpu className="w-5 h-5" />,
    colorClass: "text-emerald-500 border-emerald-500/20 dark:border-emerald-500/10",
    bgClass: "bg-emerald-500/5",
    skills: ["Python", "Raspberry Pi 5", "GPIO / Sensor Integration"],
  },
  {
    title: "Systems & Integration",
    icon: <Layers className="w-5 h-5" />,
    colorClass: "text-indigo-500 border-indigo-500/20 dark:border-indigo-500/10",
    bgClass: "bg-indigo-500/5",
    skills: [
      "Real-Time Data Monitoring",
      "Biometric Hardware Integration",
      "Full-Stack System Architecture",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-2">
            02. Expertise
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Skills & Technologies
          </h3>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Responsive Grid of Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`p-6 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg ${category.bgClass} ${category.colorClass.split(" ")[0]} border`}>
                  {category.icon}
                </div>
                <h4 className="font-display font-bold text-lg text-slate-800 dark:text-slate-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                  {category.title}
                </h4>
              </div>

              {/* Badges Flow */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-sky-500/40 dark:hover:border-sky-400/40 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
