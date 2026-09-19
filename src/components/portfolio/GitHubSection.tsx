import { Section } from "./Section";
import { Github, Star, GitBranch, Activity, ArrowUpRight, Code2 } from "lucide-react";

const USER = "Manikandan-K006";

const stats = [
  { label: "Repositories", value: "8+", icon: GitBranch },
  { label: "Projects", value: "4", icon: Star },
  { label: "Contribution streak", value: "Active", icon: Activity },
];

const languages = [
  { name: "TypeScript", level: "82%", color: "bg-[#10B981]" },
  { name: "Python", level: "74%", color: "bg-[#34D399]" },
  { name: "JavaScript", level: "68%", color: "bg-[#22D3EE]" },
  { name: "Java", level: "58%", color: "bg-[#047857]" },
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
          <div key={label} className="bg-[#0E1C18] border border-[#173B31] rounded-2xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.25)] transition-all duration-200 hover:border-[#10B981]">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#64748B]">{label}</div>
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0B1714] border border-[#173B31]">
                <Icon className="h-4 w-4 text-[#34D399]" />
              </div>
            </div>
            <div className="mt-6 text-3xl font-bold tracking-tight text-[#F8FAFC]">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-[#173B31] bg-[#07120F] p-5 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#0B1714] border border-[#173B31]">
              <Github className="h-5 w-5 text-[#34D399]" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-[#64748B]">Developer profile</div>
              <div className="mt-1 text-xl font-semibold text-[#F8FAFC]">{USER}</div>
            </div>
          </div>

          <a
            href={`https://github.com/${USER}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_15px_rgba(16,185,129,0.25)] transition hover:from-[#34D399] hover:to-[#10B981] hover:scale-105"
          >
            View GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[#64748B]">Recent repositories</div>
            {repositories.map(({ name, description, stack, status }) => (
              <div key={name} className="rounded-2xl border border-[#173B31] bg-[#0E1C18] p-4 transition-all duration-200 hover:border-[#10B981]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-[#34D399]" />
                      <span className="font-medium text-[#F8FAFC]">{name}</span>
                    </div>
                    <p className="mt-2 text-sm text-[#94A3B8]">{description}</p>
                  </div>
                  <span className="rounded-full border border-[#10B981]/40 bg-[#10B981]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#34D399]">
                    {status}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span key={item} className="rounded-full border border-[#173B31] bg-[#0B1714] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[#94A3B8]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-[#173B31] bg-[#0E1C18] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-widest text-[#64748B]">Activity</div>
                <span className="flex items-center gap-2 text-xs text-[#34D399]">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]" />
                  Online
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-[#F8FAFC]">3</div>
                  <div className="text-xs text-[#94A3B8]">active product builds</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#F8FAFC]">Weekly</div>
                  <div className="text-xs text-[#94A3B8]">iteration cycles</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#173B31] bg-[#0E1C18] p-4">
              <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-[#64748B]">Top languages</div>
              <div className="space-y-3">
                {languages.map(({ name, level, color }) => (
                  <div key={name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-medium text-[#CBD5E1]">{name}</span>
                      <span className="text-[#94A3B8] text-xs font-mono">{level}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#0B1714] border border-[#173B31]">
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

