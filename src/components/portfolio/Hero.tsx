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
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Background glow behind hero */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#10B981]/[0.07] blur-[150px]" />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
        <div className="animate-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#173B31] bg-[#07120F] px-4 py-1.5 text-xs font-medium text-[#34D399]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
            </span>
            Available for AI internships & collaborations
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC]">
            <span className="block text-[#94A3B8] text-2xl sm:text-3xl font-medium mb-1">
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-[#34D399] to-[#10B981] bg-clip-text text-transparent">
              Manikandan K
            </span>
          </h1>
          <div className="mt-4 h-9 text-2xl sm:text-3xl font-mono">
            <span className="text-[#CBD5E1]">{typed}</span>
            <span className="ml-1 inline-block h-6 w-[3px] translate-y-1 bg-[#34D399] animate-blink" />
          </div>
          <p className="mt-6 max-w-xl text-lg text-[#94A3B8] leading-relaxed">
            Building intelligent AI applications that solve real-world problems —
            with LLMs, RAG, and full-stack engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] px-6 py-3 font-medium text-white shadow-[0_0_25px_rgba(16,185,129,0.3)] transition hover:from-[#34D399] hover:to-[#10B981] hover:scale-105"
            >
              <Sparkles className="h-4 w-4" /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#173B31] bg-[#0E1C18] px-6 py-3 font-medium text-[#F8FAFC] transition hover:bg-[#12251F] hover:border-[#10B981]"
            >
              <Send className="h-4 w-4 text-[#34D399]" /> Contact Me
            </a>
            <a
              href="/Manikandan-K-ATS-Resume.pdf"
              download="Manikandan-K-ATS-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#173B31] bg-[#0E1C18] px-5 py-3 text-sm font-medium text-[#F8FAFC] transition hover:bg-[#12251F] hover:border-[#10B981]"
            >
              <FileText className="h-4 w-4 text-[#34D399]" /> ATS Resume
            </a>
            <a
              href="/Manikandan-K-Modern-Resume.pdf"
              download="Manikandan-K-Modern-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#173B31] bg-[#0E1C18] px-5 py-3 text-sm font-medium text-[#F8FAFC] transition hover:bg-[#12251F] hover:border-[#10B981]"
            >
              <Download className="h-4 w-4 text-[#34D399]" /> Modern Resume
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
                className="group grid h-11 w-11 place-items-center rounded-full border border-[#173B31] bg-[#0E1C18] transition hover:scale-110 hover:bg-[#12251F] hover:border-[#10B981]"
              >
                <Icon className="h-4 w-4 text-[#94A3B8] transition group-hover:text-[#34D399]" />
              </a>
            ))}
          </div>
        </div>

        {/* Avatar orb */}
        <div className="relative mx-auto aspect-square w-full max-w-md animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#10B981]/30 via-[#047857]/20 to-transparent blur-3xl opacity-50" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-[#173B31] bg-[#07120F] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#10B981]/20 via-transparent to-[#047857]/20" />

            <div className="absolute inset-0">
              <img
                src="/profile-photo.png"
                alt="Manikandan K"
                className="h-full w-full object-cover scale-105 transition duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "grid";
                }}
              />

              <div className="absolute inset-0 hidden place-items-center bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.2),_rgba(7,18,15,0.85)_70%)]">
                <div className="text-center">
                  <div className="text-8xl font-bold bg-gradient-to-r from-[#34D399] to-[#10B981] bg-clip-text text-transparent">MK</div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-widest text-[#94A3B8]">
                    gen · ai · engineer
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 animate-[spin_28s_linear_infinite]">
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#34D399] shadow-[0_0_20px_#34D399]" />
            </div>
            <div className="absolute inset-6 animate-[spin_20s_linear_infinite_reverse]">
              <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#22D3EE] shadow-[0_0_20px_#22D3EE]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

