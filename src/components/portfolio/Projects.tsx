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
    accent: "from-neon-blue to-neon-cyan",
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
              className="group relative glass-strong neon-border overflow-hidden rounded-3xl p-8 transition hover:-translate-y-1"
            >
              <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl transition group-hover:opacity-40`} />
              <div className="relative">
                <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accent} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {stack.map((s) => (
                    <span key={s} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm transition hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={demo}
                    onClick={(e) => demo === "#" && e.preventDefault()}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-2 text-sm font-medium text-white transition hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCaseStudyClick(id)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-2 text-sm font-medium text-white shadow-lg shadow-neon-blue/20 transition hover:scale-105"
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
          <div className="mx-auto max-w-6xl rounded-3xl border border-neon-blue/20 bg-gradient-to-br from-white/8 to-white/3 p-8 shadow-[0_0_40px_rgba(94,234,212,0.12)] backdrop-blur-sm ring-1 ring-white/10">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-neon-cyan" /> Case Study
              </div>
              <h3 className="mt-4 text-3xl font-bold">ISDS — Student Insight & Development Tracking System</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Problem</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Educational institutions often struggle with fragmented student records, weak parent-teacher communication,
                  and limited visibility into academic performance and development.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Approach</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  I designed a role-based platform that connects students, teachers, parents, and admins through one system for
                  tracking progress, communication, and performance insights.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Outcome</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The result is a scalable and modern academic dashboard that makes data more accessible, actions more efficient,
                  and collaboration more transparent across the education ecosystem.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h4 className="text-xl font-semibold">What the system includes</h4>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>• Role-based access for students, teachers, parents, and administrators</li>
                  <li>• Student performance tracking and academic analytics</li>
                  <li>• Centralized communication and activity visibility</li>
                  <li>• Responsive interface for real-time usage across devices</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold">Tech stack</h4>
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
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
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
