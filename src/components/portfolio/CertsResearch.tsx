import { Section } from "./Section";
import { Award, BookOpen, Brain, FlaskConical, Trophy, Sparkles } from "lucide-react";

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="Certificates" title="Credentials & Learning">
      <div className="mx-auto max-w-4xl">
        <div className="glass-strong rounded-3xl p-8 shadow-2xl ring-1 ring-white/10">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-neon-blue/30 to-neon-purple/30">
              <Award className="h-6 w-6 text-neon-cyan" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">Current focus</div>
              <h3 className="mt-2 text-2xl font-semibold">Generative AI, LLMs, and applied machine learning</h3>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Learning path</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Building strong foundations in model behavior, prompt design, retrieval pipelines, and production-ready AI workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Status</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Ongoing learning and practical implementation across AI systems, automation, and modern full-stack application development.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Generative AI",
              "LLMs",
              "Prompt Engineering",
              "Retrieval Augmented Generation",
              "MLOps",
              "Applied ML",
              "AI Product Thinking",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
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
    { Icon: Brain, t: "Cognitive Neuroscience", d: "Exploring attention, memory, learning mechanisms, and human decision-making." },
    { Icon: Brain, t: "Psychology Research", d: "Interested in behavioral patterns, cognition, and interdisciplinary AI-human insight models." },
  ];
  return (
    <Section id="research" eyebrow="Research" title="Research Interests" subtitle="Where I'm going deep.">
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
          <div className="font-mono text-xs uppercase tracking-widest text-neon-cyan">Current focus</div>
          <p className="mt-2 text-muted-foreground">
            Working on a research paper exploring cognitive neuroscience, human learning behavior, and how AI can model attention, memory, and decision-making more effectively.
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
