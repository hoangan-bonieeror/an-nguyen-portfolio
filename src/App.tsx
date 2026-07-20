import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Synchronize dark class on document root for Tailwind dark support
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 relative selection:bg-sky-500/35 selection:text-slate-900 dark:selection:text-white overflow-x-hidden">
        {/* Decorative atmospheric header grid */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-sky-500/5 to-transparent pointer-events-none" />

        {/* Navigation Header */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Footer Area */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
