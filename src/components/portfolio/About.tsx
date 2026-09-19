import { Brain, Rocket, Users, Lightbulb, GraduationCap, BookOpen } from "lucide-react";
import { Section } from "./Section";

const pillars = [
  { Icon: Brain, title: "Problem Solving", text: "Turning ambiguous problems into shipped AI systems." },
  { Icon: Users, title: "Leadership", text: "NCC-shaped discipline and team leadership." },
  { Icon: Lightbulb, title: "Innovation", text: "Exploring novel LLM patterns, agents, and RAG." },
  { Icon: BookOpen, title: "Bibliophile & Reader", text: "Avid reader of AI papers, technical books, and literature." },
  { Icon: GraduationCap, title: "Continuous Learning", text: "Daily research, documentation, and open-source." },
  { Icon: Rocket, title: "Execution", text: "Production-ready code, not just demos." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Aspiring Generative AI Engineer" subtitle="Building intelligent, sustainable, and impactful AI.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
        <div className="bg-[#07120F] border border-[#173B31] rounded-3xl p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.25)] animate-reveal">
          <h3 className="text-2xl font-semibold text-[#F8FAFC]">Who I am</h3>
          <p className="mt-3 text-[#CBD5E1] leading-relaxed">
            I'm <span className="text-[#34D399] font-medium">Manikandan K</span>, an
            Information Technology undergraduate at Mount Zion College of Engineering
            and Technology (Sivaganga, Tamil Nadu). I'm passionate about solving
            real-world problems through Artificial Intelligence, and I am learning and
            upskilling every day in the skills that matter most in this field, including
            Generative AI, LLMs, RAG, prompt engineering, AI security, and product
            development.
          </p>
          <h3 className="mt-8 text-2xl font-semibold text-[#F8FAFC]">Hobbies & Interests</h3>
          <p className="mt-3 text-[#CBD5E1] leading-relaxed">
            I am a true <span className="text-[#34D399] font-medium">Bibliophile</span> — an avid reader who loves immersing in technical books, AI research papers, cognitive science concepts, and literature. When I'm not reading or writing code, I enjoy participating in NCC leadership activities, building open-source tools, and exploring emerging technology trends.
          </p>
          <h3 className="mt-8 text-2xl font-semibold text-[#F8FAFC]">My mission</h3>
          <p className="mt-3 text-[#CBD5E1] leading-relaxed">
            To develop intelligent, sustainable, and eco-friendly AI systems that
            improve people's lives while also building secure and trustworthy
            intelligent products. I am constantly learning and upskilling every day
            in Generative AI, LLMs, Prompt Engineering, Machine Learning,
            Full-Stack Development, and AI Security Engineering.
          </p>
          <h3 className="mt-8 text-2xl font-semibold text-[#F8FAFC]">My vision</h3>
          <p className="mt-3 text-[#CBD5E1] leading-relaxed">
            AI should be <span className="text-[#34D399] font-medium">ethical, accessible, scalable, secure, and impactful</span>.
            My goal is to join a world-class AI team and ship
            products that change how humans live, learn, and trust technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {["LLMs", "RAG", "AI Agents", "Prompt Engineering", "Vector DBs", "Bibliophile", "Open Source"].map((t) => (
              <span key={t} className="rounded-full border border-[#173B31] bg-[#0B1714] px-3 py-1 font-mono text-[#94A3B8]">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {pillars.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className="bg-[#0E1C18] border border-[#173B31] rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-[#12251F] hover:border-[#10B981]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#0B1714] border border-[#173B31]">
                <Icon className="h-5 w-5 text-[#34D399]" />
              </div>
              <div className="mt-4 font-semibold text-[#F8FAFC]">{title}</div>
              <div className="mt-1 text-sm text-[#94A3B8]">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


