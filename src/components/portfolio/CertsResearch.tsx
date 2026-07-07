import { Section } from "./Section";
import { Award, BookOpen, FlaskConical, Trophy, Sparkles } from "lucide-react";

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="Certificates" title="Credentials & Learning">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/10">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-blue/30 to-neon-purple/30">
              <Award className="h-5 w-5 text-neon-cyan" />
            </div>
            <div className="mt-4 font-semibold">Coming soon</div>
            <div className="text-sm text-muted-foreground">
              Certification placeholder — Generative AI · LLMs · MLOps.
            </div>
            <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">2026 · pending</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Research() {
  const areas = [
    { Icon: Sparkles, t: "Large Language Models", d: "Studying reasoning, alignment, and efficient fine-tuning." },
    { Icon: BookOpen, t: "Prompt Engineering", d: "Structured prompting, evaluation, and optimization." },
    { Icon: FlaskConical, t: "AI Agents", d: "Tool-use, multi-agent orchestration, and memory design." },
    { Icon: Trophy, t: "Machine Learning", d: "Foundational ML with applied experiments." },
  ];
  return (
    <Section id="research" eyebrow="Research" title="Current AI Research" subtitle="Where I'm going deep.">
      <div className="grid gap-5 md:grid-cols-2">
        {areas.map(({ Icon, t, d }) => (
          <div key={t} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-pink/30">
                <Icon className="h-5 w-5 text-neon-pink" />
              </div>
              <div className="font-semibold">{t}</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
        <div className="md:col-span-2 glass-strong neon-border rounded-2xl p-6 text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-neon-cyan">Future publications</div>
          <p className="mt-2 text-muted-foreground">
            Working toward research write-ups on efficient RAG pipelines and lightweight agent architectures.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Achievements() {
  const items = [
    { t: "Leadership through NCC", d: "Discipline, drills, and team leadership." },
    { t: "Open Source Contributions", d: "Active on GitHub across AI and web repos." },
    { t: "Research Projects", d: "Independent AI research projects and prototypes." },
    { t: "Technical Presentations", d: "Sharing knowledge through talks and demos." },
  ];
  return (
    <Section id="achievements" eyebrow="Achievements" title="Highlights">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.t} className="glass rounded-2xl p-6">
            <Trophy className="h-5 w-5 text-neon-cyan" />
            <div className="mt-3 font-semibold">{i.t}</div>
            <div className="mt-1 text-sm text-muted-foreground">{i.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
