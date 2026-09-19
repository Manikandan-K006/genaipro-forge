export type KnowledgeCategory =
  | "projects"
  | "skills"
  | "education"
  | "experience"
  | "resume"
  | "contact"
  | "goals"
  | "general";

export type KnowledgeEntry = {
  id: string;
  category: KnowledgeCategory;
  keywords: string[];
  phrases: string[];
  answer: string;
};

export const PORTFOLIO_KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    id: "projects",
    category: "projects",
    keywords: ["project", "projects", "built", "sidts", "voice", "assistant", "portfolio", "work", "app", "apps", "repo", "github"],
    phrases: ["what projects", "what has he built", "featured projects", "show me projects", "tell me about projects", "sidts project", "voice assistant"],
    answer: `Here are Manikandan's featured projects:

1. **SIDTS** — A full-stack education platform built with React, TypeScript, Supabase, and Drizzle ORM.
2. **AI Voice Assistant** — A voice interface powered by Python, OpenAI API, and Ollama for offline local LLM execution.
3. **GenAI Portfolio** — High-performance AI engineer portfolio with an interactive assistant, real-time visitor tracking, and dark emerald design.

Check out his GitHub at [github.com/Manikandan-K006](https://github.com/Manikandan-K006) for source code and live repos!`,
  },
  {
    id: "hobbies",
    category: "general",
    keywords: ["hobby", "hobbies", "bibliophile", "reading", "books", "interests", "free time", "fun", "read"],
    phrases: ["what are his hobbies", "is he a bibliophile", "does he read books", "what does he do in free time"],
    answer: `Manikandan is a passionate **Bibliophile** — an avid reader who loves technical books, AI research papers, cognitive science literature, and philosophy.

His key hobbies & interests:
• **Reading & Research**: Immersing in computer science books and research papers.
• **Open Source**: Experimenting with new LLM tools, AI agents, and side projects.
• **NCC Cadet**: Active participation in National Cadet Corps leadership and physical fitness drills.`,
  },
  {
    id: "research",
    category: "education",
    keywords: ["research", "publication", "cognitive", "neuroscience", "psychology", "horizon", "future", "goals"],
    phrases: ["research interests", "cognitive science", "neuroscience goals", "future research"],
    answer: `Manikandan's Technical Focus & Future Horizons:

• **Core Technical Focus**: Applied LLMs, Prompt Engineering, RAG (Retrieval-Augmented Generation), and AI Agents.
• **Long-Term Growth Aspiration**: Exploring interdisciplinary links between cognitive science, human decision-making, and advanced AI model architectures as he grows as an AI Engineer.`,
  },
  {
    id: "sidts",
    category: "projects",
    keywords: ["sidts", "education", "platform", "drizzle", "supabase"],
    phrases: ["what is sidts", "tell me about sidts", "sidts details"],
    answer: `**SIDTS** is Manikandan's full-stack education platform built using React, TypeScript, Supabase, and Drizzle ORM. It streamlines educational workflows and data management.`,
  },
  {
    id: "voice-assistant",
    category: "projects",
    keywords: ["voice", "assistant", "ollama", "speech", "offline", "python"],
    phrases: ["ai voice assistant", "voice project", "local llm"],
    answer: `The **AI Voice Assistant** is a speech-driven application built with Python. It integrates OpenAI's API alongside **Ollama** for running open-source LLMs locally offline without internet dependencies.`,
  },
  {
    id: "skills",
    category: "skills",
    keywords: ["skill", "skills", "stack", "tech", "technology", "languages", "python", "typescript", "react", "llm", "rag", "ai", "frameworks", "tools", "database", "supabase"],
    phrases: ["what skills", "tech stack", "what does he know", "programming languages", "frameworks", "ai skills"],
    answer: `Manikandan's Technical Expertise:

• **AI & ML**: Generative AI, LLMs, RAG (Retrieval-Augmented Generation), AI Agents, Prompt Engineering, OpenAI API, Ollama, Vector DBs, PyTorch, Scikit-Learn.
• **Languages**: Python, TypeScript, JavaScript, SQL.
• **Frontend**: React 19, Next.js, TanStack Start/Router, TailwindCSS v4, Vite, HTML5/CSS3.
• **Backend & DB**: Node.js, Express, Supabase (PostgreSQL), Drizzle ORM, REST APIs.
• **DevOps & Tools**: Git, GitHub, Docker, Linux, Bun.`,
  },
  {
    id: "education",
    category: "education",
    keywords: ["education", "college", "degree", "university", "study", "studied", "btech", "b.tech", "it", "mount zion", "pudukkottai", "graduation"],
    phrases: ["where does he study", "what college", "education background", "degree details", "btech it"],
    answer: `Manikandan is pursuing his **B.Tech in Information Technology** at **Mount Zion College of Engineering and Technology** (Pudukkottai, Tamil Nadu, India), expected graduation in **2028**.`,
  },
  {
    id: "experience",
    category: "experience",
    keywords: ["experience", "background", "ncc", "cadet", "leadership", "opensource", "open-source", "journey", "activities"],
    phrases: ["work experience", "background", "ncc cadet", "leadership experience"],
    answer: `Background & Leadership Highlights:

• **NCC Cadet (National Cadet Corps)**: Developed strong discipline, teamwork, strategic execution, and leadership under pressure.
• **Open Source Contributor**: Actively building and contributing to AI tools, developer utilities, and web applications on GitHub.
• **AI Developer**: Specializes in full-stack GenAI integrations, RAG pipelines, and local LLM agents.`,
  },
  {
    id: "resume",
    category: "resume",
    keywords: ["resume", "cv", "download", "ats", "modern"],
    phrases: ["download resume", "where is resume", "ats resume", "modern resume"],
    answer: `Manikandan offers two versions of his resume directly downloadable from the top section of the website:

1. **ATS Resume**: Optimized single-column format for job portals and corporate ATS scanners.
2. **Modern Resume**: Styled visual layout designed for direct recruiter emails and networking.`,
  },
  {
    id: "contact",
    category: "contact",
    keywords: ["contact", "email", "reach", "hire", "social", "linkedin", "github", "instagram", "message", "mail", "phone", "location", "address", "available"],
    phrases: ["how to contact", "email address", "get in touch", "hire manikandan", "linkedin profile", "github profile"],
    answer: `You can connect with Manikandan K via:

• **Email**: [manidvkit@gmail.com](mailto:manidvkit@gmail.com)
• **LinkedIn**: [linkedin.com/in/manikandan-k-0162062b1](https://www.linkedin.com/in/manikandan-k-0162062b1)
• **GitHub**: [github.com/Manikandan-K006](https://github.com/Manikandan-K006)
• **Instagram**: [@its_mani06](https://instagram.com/its_mani06)
• **Location**: Sivaganga / Tamil Nadu, India.

He is open for AI engineering internships, remote/onsite roles, and project collaborations!`,
  },
  {
    id: "goals",
    category: "goals",
    keywords: ["goal", "goals", "career", "future", "mission", "vision", "aspire", "ambition"],
    phrases: ["career goal", "what is his goal", "future plans"],
    answer: `Manikandan's career mission is to join a forward-thinking AI team as a **Generative AI Engineer**, building scalable, ethical, and impact-driven AI systems that solve real-world problems.`,
  },
];

export function getSmartAnswer(query: string): string {
  const q = query.toLowerCase().trim();
  if (!q) return "Hi! I'm Manikandan's AI assistant. Ask me anything about his projects, skills, education, experience, or contact info!";

  let bestEntry: KnowledgeEntry | null = null;
  let highestScore = 0;

  for (const entry of PORTFOLIO_KNOWLEDGE_BASE) {
    let score = 0;

    // Check exact phrase matches (highest weight)
    for (const phrase of entry.phrases) {
      if (q.includes(phrase)) {
        score += 10;
      }
    }

    // Check keyword matches
    for (const kw of entry.keywords) {
      if (q.includes(kw)) {
        score += 3;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestEntry = entry;
    }
  }

  if (bestEntry && highestScore >= 3) {
    return bestEntry.answer;
  }

  // Greeting check
  if (/^(hi|hello|hey|greetings|hola|sup|good morning|good evening)/i.test(q)) {
    return "Hello! I'm Manikandan's AI portfolio assistant. I can answer questions about his AI projects, technical skills (LLMs, RAG, Python, React), education at Mount Zion College, experience, resumes, or how to contact him. What would you like to know?";
  }

  return "I'm Manikandan's AI assistant. I can tell you all about his Generative AI projects (SIDTS, AI Voice Assistant), tech stack (Python, React, Supabase, LLMs, RAG), B.Tech IT education, resume options, or how to contact him directly at manidvkit@gmail.com. What specifically are you curious about?";
}
