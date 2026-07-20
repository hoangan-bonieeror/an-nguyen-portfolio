import { ArrowUp, Terminal } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-900/60 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Info */}
          <div className="flex items-center gap-2 font-display font-bold text-slate-800 dark:text-slate-200">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center text-white text-xs">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span>An Nguyen</span>
            <span className="text-slate-300 dark:text-slate-800">|</span>
            <span className="text-xs font-mono font-normal text-slate-400">
              {f.role}
            </span>
          </div>

          {/* Copyrights */}
          <div className="text-xs font-mono text-slate-400 text-center md:text-right">
            <p>© {new Date().getFullYear()} An Nguyen. {f.rights}</p>
            <p className="mt-1 text-[10px] text-slate-500">{f.crafted}</p>
          </div>

          {/* Back to top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/60 transition-colors cursor-pointer group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}
