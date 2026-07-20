import { motion } from "motion/react";
import { ArrowRight, Cpu, Globe, Rocket, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-100 transition-opacity" />

      {/* Glowing atmospheric background radial elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-500/10 dark:bg-sky-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-3xl pointer-events-none" />

      {/* Hero Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {/* Status badge representing availability or current status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-mono font-medium mx-auto mb-2 shadow-sm">
            <CheckCircle className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 animate-pulse" />
            {t.hero.badge}
          </div>

          {/* Small Intro Greeting */}
          <p className="text-sm sm:text-base font-mono font-semibold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            {t.hero.greeting}
          </p>

          {/* Name Display */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-none">
            An Nguyen
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-slate-800 dark:text-slate-200">
            {t.hero.subtitle} |{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-teal-400 font-semibold">
              {t.hero.specialization}
            </span>
          </h2>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            {t.hero.tagline}
          </p>

          {/* Key pillars labels */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto pt-4 font-mono text-xs text-slate-500 dark:text-slate-400">
            <div className="flex flex-col items-center p-2 rounded bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50">
              <Globe className="w-4 h-4 text-sky-400 mb-1" />
              <span>{t.hero.pillar1}</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50">
              <Cpu className="w-4 h-4 text-emerald-400 mb-1" />
              <span>{t.hero.pillar2}</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50">
              <Rocket className="w-4 h-4 text-teal-400 mb-1" />
              <span>{t.hero.pillar3}</span>
            </div>
          </div>

          {/* Call-to-actions buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              id="cta-contact"
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white font-medium font-sans hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 group cursor-pointer"
            >
              {t.hero.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="cta-projects"
              onClick={() => scrollToSection("#projects")}
              className="px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium font-sans transition-colors cursor-pointer"
            >
              {t.hero.cta2}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Transition divider */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
