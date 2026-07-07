import { Section } from "./Section";
import { Code2, Cpu, Database, Palette, Wrench, Sparkles } from "lucide-react";

const groups = [
  {
    Icon: Code2, title: "Programming",
    items: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    Icon: Palette, title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    Icon: Database, title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Supabase", "Drizzle ORM"],
  },
  {
    Icon: Sparkles, title: "Artificial Intelligence",
    items: [
      "Machine Learning", "Generative AI", "Prompt Engineering", "LLMs",
      "OpenAI API", "Ollama", "RAG", "AI Agents", "Vector Databases", "Prompt Optimization",
    ],
  },
  {
    Icon: Wrench, title: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "Vite", "Firebase", "Docker (learning)", "Linux"],
  },
  {
    Icon: Cpu, title: "Currently Learning",
    items: ["LangGraph", "LlamaIndex", "PyTorch", "MLOps", "CUDA basics"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tech Stack & Toolbox" subtitle="From LLM orchestration to production full-stack.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ Icon, title, items }) => (
          <div key={title} className="group glass rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/10">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-blue/30 to-neon-purple/30">
                <Icon className="h-5 w-5 text-neon-cyan" />
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-muted-foreground transition group-hover:border-neon-blue/30"
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
