import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => l.href.slice(1));
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (current) setActiveHash(`#${current}`);
      else if (window.scrollY < 200) setActiveHash("#top");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all backdrop-blur-md border border-[#173B31] bg-[#050B0A]/80 shadow-[0_10px_30px_rgba(0,0,0,0.4)]`}
      >
        <a href="#top" className="flex items-center gap-2.5 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] text-sm text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            MK
          </span>
          <span className="hidden sm:inline text-[#F8FAFC] font-medium tracking-tight hover:text-[#34D399] transition-colors">Manikandan.K</span>
        </a>
        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {links.map((l) => {
            const isActive = activeHash === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                    isActive ? "text-[#F8FAFC] font-medium" : "text-[#94A3B8] hover:text-[#34D399]"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#10B981]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] px-5 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition hover:from-[#34D399] hover:to-[#10B981] hover:scale-105"
        >
          Let's Talk <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <button
          className="lg:hidden rounded-lg p-2 text-[#F8FAFC] hover:bg-[#12251F]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden mx-auto mt-2 max-w-6xl bg-[#07120F] border border-[#173B31] rounded-2xl p-4 shadow-xl">
          <ul className="grid gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-[#94A3B8] hover:text-[#34D399] hover:bg-[#12251F]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

