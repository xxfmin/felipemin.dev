interface ExperienceProps {
  company: string;
  title: string;
  date: string;
  logo: string;
  companyUrl: string;
}

export const experiences: ExperienceProps[] = [
  {
    company: "JPMorganChase",
    title: "Software Engineer",
    date: "Incoming",
    logo: "/logos/jpmc.jpeg",
    companyUrl: "https://www.jpmorganchase.com",
  },
  {
    company: "Intel",
    title: "Software Engineer Intern",
    date: "May — Aug 2024",
    logo: "/logos/intel.jpeg",
    companyUrl: "https://www.intel.com",
  },
  {
    company: "Intel",
    title: "Machine Learning Engineer Intern",
    date: "May — Aug 2023",
    logo: "/logos/intel.jpeg",
    companyUrl: "https://www.intel.com",
  },
  {
    company: "Accenture",
    title: "Solutions Architect Intern",
    date: "Sep — Dec 2022",
    logo: "/logos/accenture.jpeg",
    companyUrl: "https://www.accenture.com",
  },
];

export interface ProjectProps {
  title: string;
  description: string;
  slug: string;
}

export const projects: ProjectProps[] = [
  {
    title: "MCP Doc Server",
    description:
      "Local MCP server with semantic search for AI agents to access personal docs. Search over my own stuff for better context.",
    slug: "mcp-doc-server",
  },
  {
    title: "Delta Palette",
    description:
      "A colorblind-focused accessibility tool that generates clearer color palettes by leveraging the perceptual uniformity of Oklab and distance-maximization.",
    slug: "delta-palette",
  },
  {
    title: "Sous",
    description: "Multi-agent AI system for personalized cooking assistance.",
    slug: "sous",
  },
];
