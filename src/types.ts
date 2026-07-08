export interface Skill {
  name: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  iconType: 'amr' | 'led' | 'monitoring' | 'agv' | 'canteen';
}

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  descriptionPoints: string[];
}
