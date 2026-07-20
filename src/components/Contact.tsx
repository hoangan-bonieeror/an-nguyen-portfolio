import { Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-2">
            {c.sectionLabel}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {c.heading}
          </h3>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 gap-12 items-start">
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl text-slate-800 dark:text-slate-200">
              {c.subtitle}
            </h4>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              {c.body}
            </p>

            {/* Quick Contact Info Cards */}
            <div className="space-y-4 pt-4">
              {/* Email link card */}
              <a
                href="mailto:hoangan726@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 hover:border-sky-500/40 dark:hover:border-sky-400/40 transition-colors group shadow-sm"
              >
                <div className="p-3 rounded-lg bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">{c.emailLabel}</div>
                  <div className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    hoangan726@gmail.com
                  </div>
                </div>
              </a>

              {/* LinkedIn link card */}
              <a
                href="https://www.linkedin.com/in/tran-hoang-an-nguyen-3168751a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 hover:border-sky-500/40 dark:hover:border-sky-400/40 transition-colors group shadow-sm"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-50 group-hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">{c.linkedinLabel}</div>
                  <div className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {c.linkedinName}
                  </div>
                </div>
              </a>

              {/* GitHub link card */}
              <a
                href="https://github.com/hoangan-bonieeror"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 hover:border-sky-500/40 dark:hover:border-sky-400/40 transition-colors group shadow-sm"
              >
                <div className="p-3 rounded-lg bg-slate-950/10 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-slate-800 transition-all">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">{c.githubLabel}</div>
                  <div className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {c.githubName}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
