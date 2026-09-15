import { useEffect, useState } from "react";
import {
  Download,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

const roles = [
  "Generative AI Engineer",
  "Machine Learning Enthusiast",
  "Prompt Engineer",
  "Full Stack AI Developer",
  "Open Source Contributor",
];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDel(true), 1400);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? 40 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTyping();
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
        <div className="animate-reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
            </span>
            Available for AI internships & collaborations
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-muted-foreground text-2xl sm:text-3xl font-medium">
              Hi, I'm
            </span>
            <span className="block text-gradient animate-gradient">Manikandan K</span>
          </h1>
          <div className="mt-4 h-9 text-2xl sm:text-3xl font-mono">
            <span className="text-foreground/90">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[3px] translate-y-1 bg-neon-cyan animate-blink" />
          </div>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Building intelligent AI applications that solve real-world problems —
            with LLMs, RAG, and full-stack engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition hover:scale-105 hover:shadow-primary/50"
            >
              <Sparkles className="h-4 w-4" /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium transition hover:bg-white/10"
            >
              <Send className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="/Manikandan-K-ATS-Resume.pdf"
              download="Manikandan-K-ATS-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              <FileText className="h-4 w-4" /> ATS Resume
            </a>
            <a
              href="/Manikandan-K-Modern-Resume.pdf"
              download="Manikandan-K-Modern-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Modern Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/Manikandan-K006", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/manikandan-k-0162062b1", label: "LinkedIn" },
              { Icon: Instagram, href: "https://instagram.com/its_mani06", label: "Instagram" },
              { Icon: Mail, href: "mailto:manidvkit@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="group grid h-11 w-11 place-items-center rounded-full glass transition hover:scale-110 hover:bg-white/10"
              >
                <Icon className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Avatar orb */}
        <div className="relative mx-auto aspect-square w-full max-w-md animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan blur-3xl opacity-40" />
          <div className="relative h-full w-full rounded-full glass-strong neon-border overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-neon-blue/30 via-transparent to-neon-purple/30" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-gradient">MK</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  gen · ai · engineer
                </div>
              </div>
            </div>
            {/* Orbits */}
            <div className="absolute inset-0 animate-[spin_28s_linear_infinite]">
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-neon-cyan shadow-[0_0_20px_var(--neon-cyan)]" />
            </div>
            <div className="absolute inset-6 animate-[spin_20s_linear_infinite_reverse]">
              <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-neon-pink shadow-[0_0_20px_var(--neon-pink)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
