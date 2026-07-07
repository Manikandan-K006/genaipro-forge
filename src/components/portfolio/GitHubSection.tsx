import { Section } from "./Section";
import { Github } from "lucide-react";

const USER = "Manikandan-K006";

export function GitHubSection() {
  const stats = `https://github-readme-stats.vercel.app/api?username=${USER}&show_icons=true&hide_border=true&bg_color=00000000&title_color=8ab4ff&icon_color=b48aff&text_color=c9d1d9`;
  const streak = `https://streak-stats.demolab.com?user=${USER}&hide_border=true&background=00000000&stroke=8ab4ff&ring=b48aff&fire=8ab4ff&currStreakLabel=b48aff&sideLabels=c9d1d9&currStreakNum=c9d1d9&sideNums=c9d1d9&dates=8b949e`;
  const langs = `https://github-readme-stats.vercel.app/api/top-langs/?username=${USER}&layout=compact&hide_border=true&bg_color=00000000&title_color=8ab4ff&text_color=c9d1d9`;
  const graph = `https://ghchart.rshah.org/8ab4ff/${USER}`;

  return (
    <Section id="github" eyebrow="Open Source" title="GitHub Activity" subtitle="Live from my GitHub profile.">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="glass rounded-2xl p-5">
          <img src={stats} alt="GitHub stats" loading="lazy" className="w-full" />
        </div>
        <div className="glass rounded-2xl p-5">
          <img src={streak} alt="GitHub streak" loading="lazy" className="w-full" />
        </div>
        <div className="glass rounded-2xl p-5">
          <img src={langs} alt="Top languages" loading="lazy" className="w-full" />
        </div>
        <div className="glass rounded-2xl p-5">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Contribution graph</div>
          <img src={graph} alt="GitHub contribution graph" loading="lazy" className="w-full" />
        </div>
      </div>
      <div className="mt-8 text-center">
        <a
          href={`https://github.com/${USER}`}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 font-medium text-white shadow-lg transition hover:scale-105"
        >
          <Github className="h-4 w-4" /> Visit my GitHub
        </a>
      </div>
    </Section>
  );
}
