import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { cat: "Generative AI", title: "Designing production RAG pipelines that don't hallucinate", read: "8 min" },
  { cat: "LLMs", title: "Prompt patterns I use every day (and why they work)", read: "6 min" },
  { cat: "Machine Learning", title: "From notebook to product: shipping ML the right way", read: "10 min" },
  { cat: "Python", title: "Python tricks for building fast AI backends", read: "5 min" },
  { cat: "Prompt Engineering", title: "Evaluating prompts like a serious engineer", read: "7 min" },
  { cat: "Career", title: "How I'm preparing for a Generative AI Engineer role", read: "4 min" },
];

export function Blog() {
  return (
    <Section id="blog" eyebrow="Writing" title="Notes & Blog" subtitle="Ideas from research, engineering, and the AI frontier.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <a
            key={p.title}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group bg-[#0E1C18] border border-[#173B31] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:bg-[#12251F] hover:border-[#10B981] shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-[#173B31] bg-[#0B1714] px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-widest text-[#34D399]">
                {p.cat}
              </span>
              <ArrowUpRight className="h-4 w-4 text-[#64748B] transition-all duration-200 group-hover:text-[#34D399] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <h3 className="mt-4 font-semibold leading-snug text-[#F8FAFC] group-hover:text-[#34D399] transition-colors">{p.title}</h3>
            <div className="mt-3 text-xs text-[#94A3B8]">{p.read} read · Coming soon</div>
          </a>
        ))}
      </div>
    </Section>
  );
}

