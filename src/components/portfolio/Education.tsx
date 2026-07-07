import { Section } from "./Section";
import { GraduationCap, MapPin, Award } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      <div className="grid gap-5 md:grid-cols-3">
        <div className="glass-strong neon-border rounded-2xl p-6 md:col-span-2">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neon-cyan">2024 — 2028 (Expected)</div>
              <h3 className="mt-1 text-lg font-semibold">Bachelor of Technology, Information Technology</h3>
              <div className="text-sm text-muted-foreground">Mount Zion College of Engineering and Technology</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Core computer science with a focus on AI, ML, Data Structures,
                Software Engineering, and modern web systems.
              </p>
            </div>
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <MapPin className="h-5 w-5 text-neon-cyan" />
          <div className="mt-3 font-semibold">Sivaganga, Tamil Nadu</div>
          <div className="text-sm text-muted-foreground">India</div>
        </div>
        <div className="glass rounded-2xl p-6 md:col-span-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Award className="h-4 w-4 text-neon-cyan" />
            Coursework highlights
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-mono">
            {["Data Structures", "OOP", "DBMS", "Operating Systems", "Web Dev", "Machine Learning", "AI Foundations", "Cloud Basics"].map((c) => (
              <span key={c} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-muted-foreground">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
