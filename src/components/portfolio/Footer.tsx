import { ArrowUp, Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-12 bg-[#050B0A] border-t border-[#173B31] px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#10B981] to-[#047857] text-sm text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">MK</span>
            <span className="text-[#F8FAFC]">Manikandan K</span>
          </div>
          <p className="mt-3 text-sm text-[#94A3B8] max-w-xs leading-relaxed">
            Generative AI Engineer building intelligent applications for the real world.
          </p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#64748B]">Quick Links</div>
          <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
            {["About", "Skills", "Projects", "Experience", "Research", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-[#94A3B8] hover:text-[#34D399] transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#64748B]">Elsewhere</div>
          <div className="mt-3 flex gap-2">
            {[
              { Icon: Github, href: "https://github.com/Manikandan-K006", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/manikandan-k-0162062b1", label: "LinkedIn" },
              { Icon: Instagram, href: "https://instagram.com/its_mani06", label: "Instagram" },
              { Icon: Mail, href: "mailto:manidvkit@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label}
                 className="grid h-10 w-10 place-items-center rounded-full bg-[#0E1C18] border border-[#173B31] hover:bg-[#12251F] hover:border-[#10B981] transition-all duration-200">
                <Icon className="h-4 w-4 text-[#94A3B8] hover:text-[#34D399]" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-[#173B31] pt-6 text-xs text-[#64748B]">
        <div>© {new Date().getFullYear()} Manikandan K. Built with React, TanStack, and Tailwind.</div>
        <a href="#top" className="inline-flex items-center gap-1.5 rounded-full bg-[#0E1C18] border border-[#173B31] px-3.5 py-1.5 text-[#94A3B8] hover:text-[#34D399] hover:border-[#10B981] transition-colors">
          <ArrowUp className="h-3 w-3 text-[#10B981]" /> Back to top
        </a>
      </div>
    </footer>
  );
}

