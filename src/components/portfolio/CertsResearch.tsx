import { Section } from "./Section";
import { Award, BookOpen, Brain, FlaskConical, Trophy, Sparkles } from "lucide-react";

export function Certificates() {
  return (
    <Section id="certificates" eyebrow="Certificates" title="Credentials & Learning">
      <div className="mx-auto max-w-4xl">
        <div className="bg-[#07120F] border border-[#173B31] rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0B1714] border border-[#173B31]">
              <Award className="h-6 w-6 text-[#10B981]" />
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#64748B]">Current focus</div>
              <h3 className="mt-2 text-2xl font-semibold text-[#F8FAFC]">Generative AI, LLMs, and applied machine learning</h3>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#173B31] bg-[#0B1714] p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#64748B]">Learning path</div>
              <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                Building strong foundations in model behavior, prompt design, retrieval pipelines, and production-ready AI workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-[#173B31] bg-[#0B1714] p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#64748B]">Status</div>
              <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
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
                className="rounded-full border border-[#173B31] bg-[#0B1714] px-3 py-1.5 text-xs font-mono text-[#94A3B8]"
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
    { Icon: Sparkles, t: "Large Language Models", d: "Studying reasoning, alignment, RAG optimization, and model fine-tuning." },
    { Icon: BookOpen, t: "Prompt Engineering & RAG", d: "Structured prompting, context retrieval, and evaluation benchmarks." },
    { Icon: FlaskConical, t: "AI Agents", d: "Tool-use, multi-agent orchestration, and persistent memory systems." },
    { Icon: Trophy, t: "Machine Learning", d: "Supervised & unsupervised learning with hands-on code implementations." },
    { Icon: Brain, t: "Cognitive Science & AI (Future Goal)", d: "Aspirations to explore how cognitive learning mechanisms and human decision-making inform next-gen AI architectures." },
    { Icon: BookOpen, t: "Interdisciplinary Research", d: "Combining deep technical reading as a bibliophile with applied software engineering." },
  ];
  return (
    <Section id="research" eyebrow="Research" title="Research Interests & Future Horizons" subtitle="Active technical focus areas and long-term interdisciplinary growth goals.">
      <div className="grid gap-5 md:grid-cols-2">
        {areas.map(({ Icon, t, d }) => (
          <div key={t} className="bg-[#0E1C18] border border-[#173B31] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:bg-[#12251F] hover:border-[#10B981]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B1714] border border-[#173B31]">
                <Icon className="h-5 w-5 text-[#34D399]" />
              </div>
              <div className="font-semibold text-[#F8FAFC]">{t}</div>
            </div>
            <p className="mt-3 text-sm text-[#94A3B8]">{d}</p>
          </div>
        ))}
        <div className="md:col-span-2 bg-[#07120F] border border-[#173B31] rounded-2xl p-6 text-center shadow-lg">
          <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] font-medium">Growth Horizon for Recruiters</div>
          <p className="mt-2 text-[#CBD5E1]">
            Currently focused on shipping production-ready LLM & RAG applications, with long-term aspirations to bridge cognitive science and advanced AI architectures as I grow in the AI field.
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
          <div key={i.t} className="bg-[#0E1C18] border border-[#173B31] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:bg-[#12251F] hover:border-[#10B981]">
            <Trophy className="h-5 w-5 text-[#10B981]" />
            <div className="mt-3 font-semibold text-[#F8FAFC]">{i.t}</div>
            <div className="mt-1 text-sm text-[#94A3B8]">{i.d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

