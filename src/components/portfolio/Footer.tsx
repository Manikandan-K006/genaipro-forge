import { ArrowUp, Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/5 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple text-sm text-white">MK</span>
            <span className="text-gradient">Manikandan K</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Generative AI Engineer building intelligent applications for the real world.
          </p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Quick Links</div>
          <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
            {["About", "Skills", "Projects", "Experience", "Research", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-foreground">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Elsewhere</div>
          <div className="mt-3 flex gap-2">
            {[
              { Icon: Github, href: "https://github.com/Manikandan-K006", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/manikandan-k-0162062b1", label: "LinkedIn" },
              { Icon: Instagram, href: "https://instagram.com/its_mani06", label: "Instagram" },
              { Icon: Mail, href: "mailto:manidvkit@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label}
                 className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10 transition">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Manikandan K. Built with React, TanStack, and Tailwind.</div>
        <a href="#top" className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 hover:bg-white/10">
          <ArrowUp className="h-3 w-3" /> Back to top
        </a>
      </div>
    </footer>
  );
}
