import { motion } from "motion/react";
import { User, Calendar, Cpu, MapPin, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

/** Renders translated bio strings that use <strong> and <highlight> tags */
function BioText({ raw }: { raw: string }) {
  // Replace <strong>...</strong> and <highlight>...</highlight> with JSX
  const parts = raw.split(/(<strong>.*?<\/strong>|<highlight>.*?<\/highlight>)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("<strong>")) {
          const inner = part.replace(/<\/?strong>/g, "");
          return (
            <strong key={i} className="text-slate-900 dark:text-white font-medium">
              {inner}
            </strong>
          );
        }
        if (part.startsWith("<highlight>")) {
          const inner = part.replace(/<\/?highlight>/g, "");
          return (
            <span key={i} className="text-sky-600 dark:text-sky-400 font-semibold">
              {inner}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-b border-slate-100 dark:border-slate-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-2">
            {a.sectionLabel}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {a.heading}
          </h3>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-400 font-sans text-base leading-relaxed">
            <p><BioText raw={a.bio1} /></p>
            <p><BioText raw={a.bio2} /></p>
            <p>{a.bio3}</p>

            {/* Quick Core Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-sky-500/10 text-sky-500 mt-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    {a.principle1Title}
                  </h4>
                  <p className="text-xs text-slate-500">{a.principle1Desc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-teal-500/10 text-teal-500 mt-1">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                    {a.principle2Title}
                  </h4>
                  <p className="text-xs text-slate-500">{a.principle2Desc}</p>
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
                  <span className="font-display font-bold text-slate-900 dark:text-white text-base">
                    {a.profileTitle}
                  </span>
                </div>
                <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded">
                  SYS_INFO v2.6
                </div>
              </div>

              {/* Stats Rows */}
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {a.expLabel}
                  </span>
                  <span className="text-slate-900 dark:text-sky-400 font-semibold text-right">
                    {a.expValue}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {a.bgLabel}
                  </span>
                  <span className="text-slate-900 dark:text-white font-semibold text-right">
                    {a.bgValue}
                  </span>
                </div>
                <div className="flex justify-between items-start py-1">
                  <span className="text-slate-500 flex items-center gap-2 mt-0.5">
                    <Cpu className="w-4 h-4 text-slate-400" />
                    {a.domainLabel}
                  </span>
                  <span className="text-slate-900 dark:text-white font-semibold text-right max-w-[200px]">
                    {a.domainValue}
                  </span>
                </div>
              </div>

              {/* Graphical Status indicators */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-500">{a.stat1Label}</span>
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
                    <span className="text-slate-500">{a.stat2Label}</span>
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
