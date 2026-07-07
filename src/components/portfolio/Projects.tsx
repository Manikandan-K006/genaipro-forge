import { Section } from "./Section";
import { ExternalLink, Github, FileText, Bot, GraduationCap } from "lucide-react";

const projects = [
  {
    Icon: GraduationCap,
    title: "Student Insight & Development Tracking System (SIDTS)",
    description:
      "Modern full-stack educational platform for students, teachers, parents, and administrators to manage academic activities with role-based dashboards and analytics.",
    features: [
      "Role-based auth",
      "Student · Teacher · Parent · Admin portals",
      "Analytics",
      "Responsive design",
      "Production-ready architecture",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind", "TanStack Router", "Supabase", "Drizzle ORM"],
    github: "https://github.com/Manikandan-K006",
    demo: "#",
    accent: "from-neon-blue to-neon-cyan",
  },
  {
    Icon: Bot,
    title: "AI Voice Assistant",
    description:
      "A conversational AI assistant with voice interaction, offline LLM support via Ollama, and smart automation using OpenAI + Python speech pipelines.",
    features: [
      "Voice interaction",
      "AI conversation",
      "Offline LLM support (Ollama)",
      "Smart automation",
    ],
    stack: ["Python", "OpenAI API", "Ollama", "Speech Recognition", "Prompt Engineering", "ML"],
    github: "https://github.com/Manikandan-K006",
    demo: "#",
    accent: "from-neon-purple to-neon-pink",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work" subtitle="Real products, real code, real problems solved.">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map(({ Icon, title, description, features, stack, github, demo, accent }) => (
          <article
            key={title}
            className="group relative glass-strong neon-border overflow-hidden rounded-3xl p-8 transition hover:-translate-y-1"
          >
            <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl transition group-hover:opacity-40`} />
            <div className="relative">
              <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accent} shadow-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {stack.map((s) => (
                  <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={demo}
                  onClick={(e) => demo === "#" && e.preventDefault()}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-2 text-sm font-medium text-white transition hover:scale-105"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm transition hover:bg-white/10"
                >
                  <FileText className="h-4 w-4" /> Case Study
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
