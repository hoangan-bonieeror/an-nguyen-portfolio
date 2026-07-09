import { motion } from "motion/react";
import { User, Calendar, Cpu, MapPin, Award } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-b border-slate-100 dark:border-slate-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-2">
            01. Background
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            About Me
          </h3>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-400 font-sans text-base leading-relaxed">
            <p>
              I'm <strong className="text-slate-900 dark:text-white font-medium">An Nguyen</strong>, a Software Developer with <span className="text-sky-600 dark:text-sky-400 font-semibold">2 years and 6 months</span> of experience at a Japan-affiliated company. In this role, I built full-stack web applications (Angular, Python/Flask) and embedded systems (Python, Raspberry Pi) designed specifically for industrial automation.
            </p>
            <p>
              My work spans across <strong className="text-slate-900 dark:text-white font-medium">robotics control</strong> (AMR/AGV utilizing ROS2, SLAM, Nav2), real-time environmental monitoring, and factory process automation. I specialize in developing complete systems that integrate physical devices with web dashboard controls.
            </p>
            <p>
              I enjoy solving problems that require both clean, modular software architecture and reliable, low-latency hardware integration. Whether designing REST APIs, programming embedded controllers, or mapping navigation nodes, I strive to build robust, production-grade solutions.
            </p>

            {/* Quick Core Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-sky-500/10 text-sky-500 mt-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Hardware & Software Integration</h4>
                  <p className="text-xs text-slate-500">Connecting web layers to microcontrollers and physical actuators.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-teal-500/10 text-teal-500 mt-1">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Industrial Grade Quality</h4>
                  <p className="text-xs text-slate-500">Creating systems optimized for 24/7 reliability in factories.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Metrics Column (Tech Dashboard Layout) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-50 dark:opacity-30" />
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-sky-500" />
                  <span className="font-display font-bold text-slate-900 dark:text-white text-base">Profile Specifications</span>
                </div>
                <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded">
                  SYS_INFO v2.6
                </div>
              </div>

              {/* Stats Rows */}
              <div className="space-y-4 font-mono text-sm">
                {/* Exp Row */}
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    EXPERIENCE:
                  </span>
                  <span className="text-slate-900 dark:text-sky-400 font-semibold text-right">2 Years, 6 Months</span>
                </div>
                {/* Location Row */}
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    BACKGROUND:
                  </span>
                  <span className="text-slate-900 dark:text-white font-semibold text-right">Unitec Solution Vietnam Co.</span>
                </div>
                {/* Scope Row */}
                <div className="flex justify-between items-start py-1">
                  <span className="text-slate-500 flex items-center gap-2 mt-0.5">
                    <Cpu className="w-4 h-4 text-slate-400" />
                    DOMAIN:
                  </span>
                  <span className="text-slate-900 dark:text-white font-semibold text-right max-w-[200px]">
                    Full-Stack Web, Embedded Systems & ROS2
                  </span>
                </div>
              </div>

              {/* Graphical Status indicators to make it feel like a real tech-dashboard */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-500">WEB APPLICATION ARCHITECTURE</span>
                    <span className="text-sky-500">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-500">ROBOTICS & EMBEDDED SYSTEM INTEGRATION</span>
                    <span className="text-teal-500">90%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
