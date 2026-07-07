import { Brain, Rocket, Leaf, Users, Lightbulb, GraduationCap } from "lucide-react";
import { Section } from "./Section";

const pillars = [
  { Icon: Brain, title: "Problem Solving", text: "Turning ambiguous problems into shipped AI systems." },
  { Icon: Users, title: "Leadership", text: "NCC-shaped discipline and team leadership." },
  { Icon: Lightbulb, title: "Innovation", text: "Exploring novel LLM patterns, agents, and RAG." },
  { Icon: Leaf, title: "Sustainability", text: "Building eco-friendly, ethical AI systems." },
  { Icon: GraduationCap, title: "Continuous Learning", text: "Daily research, docs, and open-source." },
  { Icon: Rocket, title: "Execution", text: "Production-ready code, not just demos." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Aspiring Generative AI Engineer" subtitle="Building intelligent, sustainable, and impactful AI.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
        <div className="glass-strong neon-border rounded-3xl p-8 sm:p-10 animate-reveal">
          <h3 className="text-2xl font-semibold">Who I am</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground font-medium">Manikandan K</span>, an
            Information Technology undergraduate at Mount Zion College of Engineering
            and Technology (Sivaganga, Tamil Nadu). I'm passionate about solving
            real-world problems through Artificial Intelligence.
          </p>
          <h3 className="mt-8 text-2xl font-semibold">My mission</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            To develop intelligent, sustainable, and eco-friendly AI systems that
            improve people's lives. I continuously explore Generative AI, LLMs,
            Prompt Engineering, Machine Learning, and Full-Stack Development while
            contributing to research and open-source projects.
          </p>
          <h3 className="mt-8 text-2xl font-semibold">My vision</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            AI should be <span className="text-foreground">ethical, accessible, scalable, and impactful</span>.
            My goal is to join a world-class AI team and ship products that change
            how humans live and learn.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {["LLMs", "RAG", "AI Agents", "Prompt Engineering", "Vector DBs", "ML Research"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {pillars.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:bg-white/10"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-blue/30 to-neon-purple/30">
                <Icon className="h-5 w-5 text-neon-cyan" />
              </div>
              <div className="mt-4 font-semibold">{title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
