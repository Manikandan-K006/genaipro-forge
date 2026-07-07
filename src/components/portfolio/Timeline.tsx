import { Section } from "./Section";
import { GraduationCap, Cpu, Github, Shield } from "lucide-react";

const items = [
  {
    Icon: Cpu,
    date: "2025 — Present",
    title: "AI Engineering Student",
    org: "Self-directed research",
    text: "Deep-diving into Generative AI, LLM internals, prompt engineering, and building end-to-end AI applications.",
  },
  {
    Icon: GraduationCap,
    date: "2024 — 2028",
    title: "B.Tech Information Technology",
    org: "Mount Zion College of Engineering and Technology",
    text: "Core CS foundations with a specialization focus on AI/ML and modern software engineering.",
  },
  {
    Icon: Github,
    date: "2024 — Present",
    title: "Open Source Contributor",
    org: "GitHub · Manikandan-K006",
    text: "Contributing to AI tooling, developer libraries, and full-stack projects.",
  },
  {
    Icon: Shield,
    date: "Ongoing",
    title: "Leadership through NCC",
    org: "National Cadet Corps",
    text: "Discipline, teamwork, and leadership shaped through service and drills.",
  },
];

export function Timeline() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience & Timeline" subtitle="The path so far.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 sm:left-1/2 top-0 h-full w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent -translate-x-1/2" />
        <ul className="space-y-8">
          {items.map(({ Icon, date, title, org, text }, i) => (
            <li key={title} className={`relative sm:grid sm:grid-cols-2 sm:gap-8 ${i % 2 ? "sm:[&>div]:col-start-2" : ""}`}>
              <div className="pl-12 sm:pl-0">
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple shadow-lg shadow-primary/40">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className={`glass rounded-2xl p-5 ${i % 2 ? "sm:ml-8" : "sm:mr-8 sm:text-right"}`}>
                  <div className="font-mono text-xs uppercase tracking-widest text-neon-cyan">{date}</div>
                  <div className="mt-1 font-semibold">{title}</div>
                  <div className="text-xs text-muted-foreground">{org}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
