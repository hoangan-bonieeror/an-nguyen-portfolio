import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export default function Experience() {
  const bulletPoints = [
    "Developed robust full-stack web dashboards using Angular and Python / Flask to allow operators to control, monitor, and route Automated Guided Vehicles (AMV/AGV).",
    "Engineered low-latency embedded firmware in Python for Raspberry Pi 5 controllers to manage real-time GPIO-based physical systems (3-LED alerting boards, biometrics, and sensors).",
    "Implemented state-of-the-art navigation routines using ROS2, SLAM (Simultaneous Localization and Mapping), and the Nav2 stack to direct Autonomous Mobile Robots along collision-free client routes.",
    "Designed and optimized REST APIs and relational database query schemas to manage factory-wide real-time environmental monitoring logs, ensuring 24/7 uptime.",
    "Integrated biometric hardware systems into food distribution lines, reducing processing bottleneck times for workers using secure, real-time fingerprint validation logic.",
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-2">
            04. Career
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Professional Experience
          </h3>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Experience Timeline Container */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-10 pl-6 md:pl-10 space-y-12 py-4">
          
          {/* Timeline Dot Indicator */}
          <div className="absolute -left-[11px] top-4 w-5 h-5 rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 p-1 shadow-md shadow-sky-500/20">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-950" />
          </div>

          {/* Experience Entry Item */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-900 pb-4">
              <div>
                <h4 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-sky-500 shrink-0" />
                  Software Developer
                </h4>
                <p className="text-base font-medium text-slate-700 dark:text-slate-300 font-sans mt-1">
                  Japan-affiliated Industrial Automation Company
                </p>
              </div>

              {/* Badges containing metadata */}
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-teal-500" />
                  June 2023 – Nov 2025
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-teal-500" />
                  Full-Time Core Team
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-4 pt-2">
              {bulletPoints.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 font-sans text-sm md:text-base leading-relaxed">
                  <ChevronRight className="w-4 h-4 text-sky-500 shrink-0 mt-1" />
                  <p>{bullet}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
