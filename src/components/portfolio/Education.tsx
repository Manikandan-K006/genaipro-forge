import { Section } from "./Section";
import { GraduationCap, MapPin, Award } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      <div className="grid gap-5 md:grid-cols-3">
        <div className="bg-[#0E1C18] border border-[#173B31] rounded-2xl p-6 md:col-span-2 shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:border-[#10B981] transition-all duration-200">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#34D399] font-medium">2024 — 2028 (Expected)</div>
              <h3 className="mt-1 text-lg font-semibold text-[#F8FAFC]">Bachelor of Technology, Information Technology</h3>
              <div className="text-sm text-[#94A3B8]">Mount Zion College of Engineering and Technology</div>
              <p className="mt-3 text-sm text-[#CBD5E1]">
                Core computer science with a focus on AI, ML, Data Structures,
                Software Engineering, and modern web systems.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#0E1C18] border border-[#173B31] rounded-2xl p-6 hover:border-[#10B981] transition-all duration-200">
          <MapPin className="h-5 w-5 text-[#34D399]" />
          <div className="mt-3 font-semibold text-[#F8FAFC]">Sivaganga, Tamil Nadu</div>
          <div className="text-sm text-[#94A3B8]">India</div>
        </div>
        <div className="bg-[#0E1C18] border border-[#173B31] rounded-2xl p-6 md:col-span-3 hover:border-[#10B981] transition-all duration-200">
          <div className="flex items-center gap-2 text-sm text-[#94A3B8]">
            <Award className="h-4 w-4 text-[#34D399]" />
            Coursework highlights
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
            {["Data Structures", "OOP", "DBMS", "Operating Systems", "Web Dev", "Machine Learning", "AI Foundations", "Cloud Basics"].map((c) => (
              <span key={c} className="rounded-md border border-[#173B31] bg-[#0B1714] px-2.5 py-1 text-[#94A3B8]">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

