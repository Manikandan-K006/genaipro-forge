import { Section } from "./Section";
import { Github, Star, GitBranch, Activity, ArrowUpRight, Code2 } from "lucide-react";

const USER = "Manikandan-K006";

const stats = [
  { label: "Repositories", value: "8+", icon: GitBranch },
  { label: "Projects", value: "4", icon: Star },
  { label: "Contribution streak", value: "Active", icon: Activity },
];

const languages = [
  { name: "TypeScript", level: "82%", color: "bg-neon-blue" },
  { name: "Python", level: "74%", color: "bg-neon-cyan" },
  { name: "JavaScript", level: "68%", color: "bg-neon-purple" },
  { name: "Java", level: "58%", color: "bg-neon-pink" },
];

const repositories = [
  {
    name: "genaipro-forge",
    description: "Portfolio and Generative AI engineering showcase",
    stack: ["React", "TypeScript", "AI"],
    status: "Active",
  },
  {
    name: "isds-case-study",
    description: "AI-powered decision support and product workflow design",
    stack: ["Python", "ML", "Analytics"],
    status: "Research",
  },
  {
    name: "ai-product-experiments",
    description: "Prompt, orchestration, and automation prototypes",
    stack: ["JavaScript", "Agents", "UX"],
    status: "Exploring",
  },
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

      <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-neon-blue/25 to-neon-purple/25">
              <Github className="h-5 w-5 text-neon-cyan" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Developer profile</div>
              <div className="mt-1 text-xl font-semibold">{USER}</div>
            </div>
          </div>

          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-2.5 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02]"
          >
            View GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Recent repositories</div>
            {repositories.map(({ name, description, stack, status }) => (
              <div key={name} className="rounded-2xl border border-white/8 bg-white/3 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-neon-cyan" />
                      <span className="font-medium">{name}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                  </div>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-300">
                    {status}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/8 bg-black/10 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Activity</div>
                <span className="flex items-center gap-2 text-xs text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                  Online
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-xs text-muted-foreground">active product builds</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Weekly</div>
                  <div className="text-xs text-muted-foreground">iteration cycles</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-black/10 p-4">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Top languages</div>
              <div className="space-y-3">
                {languages.map(({ name, level, color }) => (
                  <div key={name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-medium">{name}</span>
                      <span className="text-muted-foreground">{level}</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                      <div className={`h-full rounded-full ${color}`} style={{ width: level }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
