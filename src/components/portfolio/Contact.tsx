import { useState } from "react";
import { Section } from "./Section";
import { Github, Instagram, Linkedin, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something" subtitle="Open to internships, research, and collaborations.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass-strong neon-border rounded-3xl p-8 space-y-5">
          {[
            { Icon: Mail, label: "Email", value: "manidvkit@gmail.com", href: "mailto:manidvkit@gmail.com" },
            { Icon: Linkedin, label: "LinkedIn", value: "manikandan-k-0162062b1", href: "https://www.linkedin.com/in/manikandan-k-0162062b1" },
            { Icon: Github, label: "GitHub", value: "Manikandan-K006", href: "https://github.com/Manikandan-K006" },
            { Icon: Instagram, label: "Instagram", value: "@its_mani06", href: "https://instagram.com/its_mani06" },
            { Icon: MapPin, label: "Location", value: "Sivaganga, Tamil Nadu, India" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href ?? "#"}
              onClick={(e) => !href && e.preventDefault()}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition hover:bg-white/[0.07]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-neon-blue/30 to-neon-purple/30">
                <Icon className="h-5 w-5 text-neon-cyan" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</div>
                <div className="text-sm font-medium">{value}</div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="glass-strong rounded-3xl p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</span>
              <input required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-neon-blue/50" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</span>
              <input required type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-neon-blue/50" placeholder="you@company.com" />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject</span>
            <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-neon-blue/50" placeholder="Internship / project / collab" />
          </label>
          <label className="mt-4 block">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-neon-blue/50" placeholder="Tell me about the opportunity…" />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 font-medium text-white shadow-lg transition hover:scale-105"
          >
            {sent ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            {sent ? "Message sent" : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}
