import { useState } from "react";
import { Section } from "./Section";
import { ExternalLink, Github, FileText, GraduationCap } from "lucide-react";

const projects = [
  {
    id: "isds",
    Icon: GraduationCap,
    title: "Student Insight & Development Tracking System (SIDTS)",
    description:
      "Modern full-stack educational platform for students, teachers, parents, and administrators to manage academic activities with role-based dashboards and analytics.",
    features: [
      "Role-based auth",
      "Student · Teacher · Parent · Admin portals",
      "Analytics",
      "Responsive design",
      "Production-ready architecture",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind", "TanStack Router", "Supabase", "Drizzle ORM"],
    github: "https://github.com/Manikandan-K006/ISDS",
    demo: "#",
    accent: "from-[#10B981]/20 to-[#047857]/10",
  },
];

export function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const handleCaseStudyClick = (id: string) => {
    setActiveCaseStudy(id);
    const element = document.getElementById(`${id}-case-study`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Section id="projects" eyebrow="Projects" title="Featured Work" subtitle="Real products, real code, real problems solved.">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map(({ id, Icon, title, description, features, stack, github, demo, accent }) => (
            <article
              key={title}
              className="group relative bg-[#0E1C18] border border-[#173B31] overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#12251F] hover:border-[#10B981] shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
            >
              <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-3xl transition group-hover:opacity-60`} />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#F8FAFC]">{title}</h3>
                <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">{description}</p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#CBD5E1]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {stack.map((s) => (
                    <span key={s} className="rounded-md border border-[#173B31] bg-[#0B1714] px-2 py-0.5 text-[11px] font-mono text-[#94A3B8]">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-[#173B31] bg-[#0B1714] px-4 py-2 text-sm text-[#F8FAFC] transition hover:bg-[#12251F] hover:border-[#10B981]"
                  >
                    <Github className="h-4 w-4 text-[#F8FAFC]" /> GitHub
                  </a>
                  <a
                    href={demo}
                    onClick={(e) => demo === "#" && e.preventDefault()}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] px-4 py-2 text-sm font-medium text-white transition hover:from-[#34D399] hover:to-[#10B981] hover:scale-105 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCaseStudyClick(id)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] px-4 py-2 text-sm font-medium text-white shadow-[0_0_15px_rgba(16,185,129,0.25)] transition hover:from-[#34D399] hover:to-[#10B981] hover:scale-105"
                  >
                    <FileText className="h-4 w-4" /> Case Study
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {activeCaseStudy === "isds" && (
        <section
          id="isds-case-study"
          className="relative px-6 pb-24 animate-[fadeIn_0.25s_ease-out]"
          style={{ animation: "fadeIn 0.25s ease-out" }}
        >
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#10B981]/30 bg-[#07120F] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#173B31] bg-[#0B1714] px-4 py-1 text-xs font-mono uppercase tracking-widest text-[#34D399]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" /> Case Study
              </div>
              <h3 className="mt-4 text-3xl font-bold text-[#F8FAFC]">ISDS — Student Insight & Development Tracking System</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#173B31] bg-[#0B1714] p-5">
                <p className="text-xs font-mono uppercase tracking-widest text-[#64748B]">Problem</p>
                <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                  Educational institutions often struggle with fragmented student records, weak parent-teacher communication,
                  and limited visibility into academic performance and development.
                </p>
              </div>

              <div className="rounded-2xl border border-[#173B31] bg-[#0B1714] p-5">
                <p className="text-xs font-mono uppercase tracking-widest text-[#64748B]">Approach</p>
                <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                  I designed a role-based platform that connects students, teachers, parents, and admins through one system for
                  tracking progress, communication, and performance insights.
                </p>
              </div>

              <div className="rounded-2xl border border-[#173B31] bg-[#0B1714] p-5">
                <p className="text-xs font-mono uppercase tracking-widest text-[#64748B]">Outcome</p>
                <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1]">
                  The result is a scalable and modern academic dashboard that makes data more accessible, actions more efficient,
                  and collaboration more transparent across the education ecosystem.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="text-xl font-semibold text-[#F8FAFC]">What the system includes</h4>
                <ul className="mt-4 space-y-3 text-sm text-[#CBD5E1]">
                  <li>• Role-based access for students, teachers, parents, and administrators</li>
                  <li>• Student performance tracking and academic analytics</li>
                  <li>• Centralized communication and activity visibility</li>
                  <li>• Responsive interface for real-time usage across devices</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#F8FAFC]">Tech stack</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Vite",
                    "Tailwind CSS",
                    "TanStack Router",
                    "Supabase",
                    "Drizzle ORM",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[#173B31] bg-[#0B1714] px-2.5 py-1 text-[11px] font-mono text-[#94A3B8]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

