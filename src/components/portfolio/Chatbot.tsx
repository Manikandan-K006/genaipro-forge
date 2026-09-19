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
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const send = async () => {
    const q = input.trim();
    if (!q) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      if (!res.ok) {
        const fallback = answer(q);
        setMsgs((m) => [...m, { role: "bot", text: fallback }]);
      } else {
        const data = await res.json();
        const botText = data.answer ?? answer(q);
        setMsgs((m) => [...m, { role: "bot", text: botText }]);
      }
    } catch (err) {
      setMsgs((m) => [...m, { role: "bot", text: answer(q) }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI assistant"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#10B981] to-[#047857] text-white shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] border border-[#34D399]/40"
      >
        {open ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6 text-white" />}
        {!open && (
          <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-[#34D399] text-[10px] font-bold text-[#050B0A] shadow-sm">
            AI
          </span>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-40 w-[92vw] max-w-sm rounded-2xl border border-[#173B31] bg-[#07120F] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden animate-reveal backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 border-b border-[#173B31] bg-[#0B1714] p-4">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#10B981]/20 border border-[#10B981]/30 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
              <Sparkles className="h-4 w-4 text-[#10B981]" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-[#F8FAFC]">Ask Manikandan's AI</div>
              <div className="text-[11px] text-[#94A3B8]">Trained on this portfolio</div>
            </div>
            <div className="flex items-center gap-2">
              {loading && (
                <div className="text-xs text-[#34D399] animate-pulse">Thinking…</div>
              )}
              <div className="rounded-full bg-[#0E1C18] border border-[#173B31] px-2 py-0.5 text-[10px] font-mono text-[#64748B]">Powered by LLM</div>
            </div>
          </div>
          <div className="max-h-80 overflow-y-auto p-4 space-y-3 bg-[#07120F]">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-line leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-sm"
                      : "bg-[#0E1C18] text-[#CBD5E1] border border-[#173B31]"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="border-t border-[#173B31] bg-[#0B1714] p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about projects, skills…"
              className="flex-1 rounded-full bg-[#0E1C18] border border-[#173B31] px-4 py-2 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/30"
              disabled={loading}
            />
            <button
              onClick={send}
              aria-label="Send"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#10B981] text-white hover:bg-[#34D399] hover:scale-105 transition shadow-sm disabled:opacity-50"
              disabled={loading}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

