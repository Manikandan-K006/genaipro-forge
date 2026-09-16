import { Section } from "./Section";
import { Github, Star, GitBranch, Activity } from "lucide-react";

const USER = "Manikandan-K006";

const stats = [
  { label: "Repositories", value: "8+", icon: GitBranch },
  { label: "Projects", value: "4", icon: Star },
  { label: "Contribution streak", value: "Active", icon: Activity },
];

const languages = [
  { name: "TypeScript", level: "Primary", color: "bg-neon-blue" },
  { name: "Python", level: "Core AI", color: "bg-neon-cyan" },
  { name: "JavaScript", level: "Web UX", color: "bg-neon-purple" },
  { name: "Java", level: "Backend", color: "bg-neon-pink" },
];

export function GitHubSection() {
  return (
    <Section id="github" eyebrow="Open Source" title="GitHub Activity" subtitle="Live from my GitHub profile.">
      <div className="grid gap-5 lg:grid-cols-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-blue/30 to-neon-purple/30">
                <Icon className="h-4 w-4 text-neon-cyan" />
              </div>
            </div>
            <div className="mt-6 text-3xl font-bold tracking-tight">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Developer profile</div>
            <div className="mt-2 text-xl font-semibold">{USER}</div>
          </div>
          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-2.5 text-sm font-medium text-white shadow-lg transition hover:scale-105"
          >
            <Github className="h-4 w-4" /> View GitHub
          </a>
        </div>

        <div>
          <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Top languages</div>
          <div className="space-y-3">
            {languages.map(({ name, level, color }) => (
              <div key={name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{name}</span>
                  <span className="text-muted-foreground">{level}</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div className={`h-full rounded-full ${color}`} style={{ width: name === "TypeScript" ? "82%" : name === "Python" ? "74%" : name === "JavaScript" ? "68%" : "58%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
