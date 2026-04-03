export const projects = [
  {
    title: "RemindrAI",
    type: "SaaS Product",
    role: "Full-stack Development & Product",
    featured: true,
    description:
      "Built a scheduling system that generates content drafts at set times based on user-defined role, tone, and platform. The system runs a backend job every five minutes, triggers an LLM pipeline on schedule, and delivers drafts to a personal inbox. Includes a prompt engineering layer with topic normalization, platform-specific formatting, and a memory block that feeds past drafts to improve output consistency over time.",
    tech: [
      "React",
      "Firebase Auth",
      "Firestore",
      "Cloud Functions",
      "LLM API",
      "Tailwind CSS",
    ],
    link: "https://remindrai.vercel.app",
  },
  {
    title: "The Karrsh Captures",
    type: "Client Website",
    role: "Full-stack Development & Design",
    description:
      "Led the entire website design and build with minimal client direction. Converted loose requirements into a clean, media-focused layout that scales as the photography portfolio grows.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://www.thekarrshcaptures.com",
  },
  {
    title: "Punjab Dental Clinic",
    type: "Client Website",
    role: "Full-stack Development & Design",
    description:
      "Redesigned the clinic website to make services easier to understand and navigate, especially on mobile. Improved structure and performance led to a 30% increase in client inquiries after launch.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://punjabdentalclinc.com/",
  },
];
