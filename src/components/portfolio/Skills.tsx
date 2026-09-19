import { Section } from "./Section";
import { Code2, Cpu, Database, Palette, Wrench, Sparkles } from "lucide-react";

const groups = [
  {
    Icon: Code2,
    title: "Languages & Core Concepts",
    items: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "Data Structures", "OOP"],
  },
  {
    Icon: Palette,
    title: "Frontend Engineering",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive UI", "Component Design", "Framer Motion"],
  },
  {
    Icon: Database,
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "MongoDB", "Supabase", "REST APIs", "Drizzle ORM", "Authentication"],
  },
  {
    Icon: Sparkles,
    title: "AI & Applied Intelligence",
    items: [
      "Machine Learning",
      "Generative AI",
      "Prompt Engineering",
      "LLMs",
      "OpenAI API",
      "Ollama",
      "RAG",
      "AI Agents",
      "Vector Databases",
      "Prompt Optimization",
    ],
  },
  {
    Icon: Wrench,
    title: "Tooling & Workflow",
    items: ["Git", "GitHub", "VS Code", "Vite", "Firebase", "Docker", "Linux", "CI/CD"],
  },
  {
    Icon: Cpu,
    title: "Exploring & Expanding",
    items: ["LangGraph", "LlamaIndex", "PyTorch", "MLOps", "CUDA Fundamentals"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tech Stack & Toolkit" subtitle="Building across product, AI systems, and full-stack experiences.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ Icon, title, items }) => (
          <div key={title} className="group bg-[#0E1C18] border border-[#173B31] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:bg-[#12251F] hover:border-[#10B981] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B1714] border border-[#173B31]">
                <Icon className="h-5 w-5 text-[#34D399]" />
              </div>
              <h3 className="font-semibold text-[#F8FAFC]">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-[#173B31] bg-[#0B1714] px-2.5 py-1 text-xs font-mono text-[#94A3B8] transition duration-200 group-hover:border-[#10B981]/50 group-hover:text-[#CBD5E1]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

