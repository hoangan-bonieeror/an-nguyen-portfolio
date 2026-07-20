import en from "./en";
import es from "./es";
import vi from "./vi";

export type Locale = "en" | "es" | "vi";

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    badge: string;
    greeting: string;
    subtitle: string;
    specialization: string;
    tagline: string;
    pillar1: string;
    pillar2: string;
    pillar3: string;
    cta1: string;
    cta2: string;
  };
  about: {
    sectionLabel: string;
    heading: string;
    bio1: string;
    bio2: string;
    bio3: string;
    principle1Title: string;
    principle1Desc: string;
    principle2Title: string;
    principle2Desc: string;
    profileTitle: string;
    expLabel: string;
    expValue: string;
    bgLabel: string;
    bgValue: string;
    domainLabel: string;
    domainValue: string;
    stat1Label: string;
    stat2Label: string;
  };
  skills: {
    sectionLabel: string;
    heading: string;
    cat1: string;
    cat2: string;
    cat3: string;
    cat4: string;
    cat5: string;
  };
  experience: {
    sectionLabel: string;
    heading: string;
    role: string;
    company: string;
    period: string;
    type: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    bullet4: string;
    bullet5: string;
  };
  contact: {
    sectionLabel: string;
    heading: string;
    subtitle: string;
    body: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    linkedinName: string;
    githubName: string;
  };
  footer: {
    role: string;
    rights: string;
    crafted: string;
  };
  projects: {
    sectionLabel: string;
    heading: string;
    // Subsection labels
    personalLabel: string;
    personalBadge: string;
    personalDesc: string;
    featuredLabel: string;
    featuredDesc: string;
    // Shared UI labels
    conceptFocus: string;
    embeddedWeb: string;
    // Status strings
    statusCompleted: string;
    statusInDevelopment: string;
    statusActive: string;
    // Featured projects (5)
    amr_title: string;
    amr_desc: string;
    led_title: string;
    led_desc: string;
    monitor_title: string;
    monitor_desc: string;
    agv_title: string;
    agv_desc: string;
    canteen_title: string;
    canteen_desc: string;
    // Personal projects (4)
    payroll_title: string;
    payroll_desc: string;
    payroll_concept: string;
    payroll_category: string;
    interior_title: string;
    interior_desc: string;
    interior_concept: string;
    interior_category: string;
    csv_title: string;
    csv_desc: string;
    csv_concept: string;
    csv_category: string;
    api_title: string;
    api_desc: string;
    api_concept: string;
    api_category: string;
  };
}


export const locales: Record<Locale, Translations> = { en, es, vi };

export const localeLabels: Record<Locale, { flag: string; code: string }> = {
  en: { flag: "🇺🇸", code: "EN" },
  es: { flag: "🇪🇸", code: "ES" },
  vi: { flag: "🇻🇳", code: "VI" },
};
