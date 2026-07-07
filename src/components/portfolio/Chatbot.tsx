import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Sparkles } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const KNOWLEDGE: { keys: string[]; answer: string }[] = [
  {
    keys: ["project", "sidts", "voice", "assistant", "work", "built"],
    answer:
      "Featured projects:\n• SIDTS — a full-stack education platform (React + TS + Supabase + Drizzle)\n• AI Voice Assistant — Python + OpenAI + Ollama with offline LLM support.\nBoth are on Manikandan's GitHub.",
  },
  {
    keys: ["skill", "stack", "tech", "know", "language"],
    answer:
      "Core stack: Python, TypeScript, React, Next.js, Node, Tailwind, Supabase, Drizzle. AI: LLMs, RAG, AI Agents, Prompt Engineering, OpenAI API, Ollama, Vector DBs.",
  },
  {
    keys: ["experience", "background", "journey"],
    answer:
      "Manikandan is an IT undergrad at Mount Zion College of Engineering & Technology, building AI apps, contributing to open source, and leading through NCC.",
  },
  {
    keys: ["resume", "cv", "download"],
    answer:
      "Two resumes are available on the hero section: an ATS-friendly version and a modern designed version.",
  },
  {
    keys: ["education", "college", "study"],
    answer:
      "B.Tech in Information Technology at Mount Zion College of Engineering and Technology, expected graduation 2028.",
  },
  {
    keys: ["research", "publication"],
    answer:
      "Research focus: LLMs, Prompt Engineering, AI Agents, and applied Machine Learning. Publications in progress.",
  },
  {
    keys: ["contact", "email", "reach", "hire"],
    answer:
      "Reach out via manidvkit@gmail.com, LinkedIn (in/manikandan-k-0162062b1), or GitHub (Manikandan-K006).",
  },
  {
    keys: ["goal", "career", "mission", "vision"],
    answer:
      "Career goal: join a world-class AI team to ship ethical, scalable, real-world AI products — with a focus on Generative AI.",
  },
];

function answer(q: string) {
  const s = q.toLowerCase();
  const hit = KNOWLEDGE.find((k) => k.keys.some((w) => s.includes(w)));
  return (
    hit?.answer ??
    "I'm Manikandan's AI assistant — ask me about his projects, skills, experience, education, research, resume, or contact."
  );
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi! I'm Manikandan's AI assistant. Ask me anything about his portfolio." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setTimeout(() => setMsgs((m) => [...m, { role: "bot", text: answer(q) }]), 400);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI assistant"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple text-white shadow-lg shadow-primary/40 transition hover:scale-110"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
        {!open && (
          <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-neon-cyan text-[10px] font-bold text-background">
            AI
          </span>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-40 w-[92vw] max-w-sm glass-strong neon-border rounded-2xl overflow-hidden animate-reveal">
          <div className="flex items-center gap-3 border-b border-white/10 p-4">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold">Ask Manikandan's AI</div>
              <div className="text-[11px] text-muted-foreground">Trained on this portfolio</div>
            </div>
          </div>
          <div className="max-h-80 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-neon-blue to-neon-purple text-white"
                      : "bg-white/5 text-foreground border border-white/10"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="border-t border-white/10 p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about projects, skills…"
              className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm outline-none focus:border-neon-blue/50"
            />
            <button
              onClick={send}
              aria-label="Send"
              className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple text-white hover:scale-105 transition"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
