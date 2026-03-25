export interface Project {
  title: string;
  role: string;
  url: string;
  description: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  college: string;
  period: string;
  cgpa: string;
}

export interface Achievement {
  title: string;
  description: string;
}
