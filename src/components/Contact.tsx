import React, { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setError("Please provide a valid email address.");
      return;
    }

    // Success simulation
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-950/40 relative border-t border-slate-100 dark:border-slate-900/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-bold mb-2">
            05. Connectivity
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h3>
          <div className="mt-4 w-12 h-1 bg-gradient-to-r from-sky-500 to-teal-400 rounded-full mx-auto md:mx-0" />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info cards */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="font-display font-bold text-xl text-slate-800 dark:text-slate-200">
              Let's build something exceptional together
            </h4>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              I'm always looking to connect with teams, engineers, and companies who are passionate about bridges between robust web platforms, telemetry loops, and automated hardware control. Reach out directly through the form or my social handles.
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
                  <div className="text-xs font-mono text-slate-400">EMAIL ADDRESS</div>
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
                  <div className="text-xs font-mono text-slate-400">LINKEDIN PROFILE</div>
                  <div className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    An Nguyen on LinkedIn
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
                  <div className="text-xs font-mono text-slate-400">GITHUB REPOSITORIES</div>
                  <div className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    hoangan-bonieeror
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h4 className="font-display font-bold text-lg text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-100 dark:border-slate-800">
                    Send a Direct Message
                  </h4>

                  {error && (
                    <div className="flex items-center gap-2 p-3.5 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-name" className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all font-sans text-sm"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-email" className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                      Your Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all font-sans text-sm"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                      Message Body
                    </label>
                    <textarea
                      id="form-message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all font-sans text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-message"
                    type="submit"
                    className="w-full md:w-auto px-6 py-3.5 bg-slate-900 dark:bg-slate-850 hover:bg-slate-800 dark:hover:bg-slate-800 text-white font-medium font-sans rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer border border-transparent dark:border-slate-800"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-banner"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-500/10 text-teal-500 flex items-center justify-center border border-teal-500/20 shadow-lg shadow-teal-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-800 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm font-sans">
                    Thank you for reaching out, An will review your inquiry and get back to you at your provided email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs font-mono rounded-lg transition-colors cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
