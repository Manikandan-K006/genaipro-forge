import { useState } from "react";
import { Section } from "./Section";
import { Github, Instagram, Linkedin, Mail, MapPin, Send, CheckCircle2, ChevronRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's Build Something"
      subtitle="Open to internships, research, and collaborations."
      titleCustom={
        <>
          Let's Build{" "}
          <span className="bg-gradient-to-r from-[#34D399] to-[#10B981] bg-clip-text text-transparent">
            Something
          </span>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="bg-[#07120F] border border-[#173B31] rounded-3xl p-6 sm:p-8 space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
          {[
            { Icon: Mail, label: "Email", value: "manidvkit@gmail.com", href: "mailto:manidvkit@gmail.com", iconColor: "text-[#10B981]" },
            { Icon: Linkedin, label: "LinkedIn", value: "manikandan-k-0162062b1", href: "https://www.linkedin.com/in/manikandan-k-0162062b1", iconColor: "text-[#10B981]" },
            { Icon: Github, label: "GitHub", value: "Manikandan-K006", href: "https://github.com/Manikandan-K006", iconColor: "text-[#F8FAFC]" },
            { Icon: Instagram, label: "Instagram", value: "@its_mani06", href: "https://instagram.com/its_mani06", iconColor: "text-[#10B981]" },
            { Icon: MapPin, label: "Location", value: "Sivaganga, Tamil Nadu, India", iconColor: "text-[#10B981]" },
          ].map(({ Icon, label, value, href, iconColor }) => (
            <a
              key={label}
              href={href ?? "#"}
              onClick={(e) => !href && e.preventDefault()}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              className="group flex items-center gap-4 rounded-2xl border border-[#173B31] bg-[#0E1C18] p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#12251F] hover:border-[#10B981] hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#0B1714] border border-[#173B31]">
                <Icon className={`h-5 w-5 ${iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-mono uppercase tracking-widest text-[#64748B]">{label}</div>
                <div className="text-sm font-medium text-[#F8FAFC] truncate">{value}</div>
              </div>
              <ChevronRight className="h-4 w-4 text-[#64748B] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#10B981]" />
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="bg-[#07120F] border border-[#173B31] rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-[#64748B]">Name</span>
              <input
                required
                className="mt-1.5 w-full rounded-xl border border-[#173B31] bg-[#0B1714] px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-[#64748B]">Email</span>
              <input
                required
                type="email"
                className="mt-1.5 w-full rounded-xl border border-[#173B31] bg-[#0B1714] px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-xs font-mono uppercase tracking-widest text-[#64748B]">Subject</span>
            <input
              className="mt-1.5 w-full rounded-xl border border-[#173B31] bg-[#0B1714] px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20"
              placeholder="Internship / project / collab"
            />
          </label>
          <label className="mt-4 block">
            <span className="text-xs font-mono uppercase tracking-widest text-[#64748B]">Message</span>
            <textarea
              required
              rows={5}
              className="mt-1.5 w-full rounded-xl border border-[#173B31] bg-[#0B1714] px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition-all focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 resize-none"
              placeholder="Tell me about the opportunity…"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] px-6 py-3 font-medium text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition hover:from-[#34D399] hover:to-[#10B981] hover:scale-105"
          >
            {sent ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            {sent ? "Message sent" : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

