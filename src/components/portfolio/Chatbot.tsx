import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Sparkles, User, RefreshCw } from "lucide-react";
import { askAiServerFn } from "@/lib/ai-server";
import { getSmartAnswer } from "@/lib/ai-knowledge";

type Msg = { role: "user" | "bot"; text: string };

const SUGGESTIONS = [
  "What projects has Manikandan built?",
  "What is his tech stack?",
  "Tell me about his education",
  "How can I contact him?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi! I'm Manikandan's AI assistant. Ask me anything about his projects, skills, education, or experience!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  const sendQuery = async (qText: string) => {
    const q = qText.trim();
    if (!q || loading) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setLoading(true);

    try {
      const res = await askAiServerFn({ data: { question: q } });
      const botReply = res?.answer || getSmartAnswer(q);
      setMsgs((m) => [...m, { role: "bot", text: botReply }]);
    } catch {
      setMsgs((m) => [...m, { role: "bot", text: getSmartAnswer(q) }]);
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
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-[#173B31] bg-[#0B1714] p-4">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#10B981]/20 border border-[#10B981]/30 shadow-[0_0_15px_rgba(16,185,129,0.25)]">
              <Sparkles className="h-4 w-4 text-[#10B981]" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-[#F8FAFC]">Ask Manikandan's AI</div>
              <div className="text-[11px] text-[#94A3B8]">Trained on complete portfolio</div>
            </div>
            <div className="flex items-center gap-2">
              {loading && <RefreshCw className="h-3.5 w-3.5 text-[#34D399] animate-spin" />}
              <div className="rounded-full bg-[#0E1C18] border border-[#173B31] px-2 py-0.5 text-[10px] font-mono text-[#34D399]">
                Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="max-h-80 overflow-y-auto p-4 space-y-3 bg-[#07120F]">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "bot" && (
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0E1C18] border border-[#173B31] text-[#10B981] mt-0.5">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-line leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-sm"
                      : "bg-[#0E1C18] text-[#CBD5E1] border border-[#173B31]"
                  }`}
                >
                  {m.text}
                </div>
                {m.role === "user" && (
                  <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#10B981] text-white mt-0.5">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex justify-start gap-2">
                <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#0E1C18] border border-[#173B31] text-[#10B981]">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="rounded-2xl bg-[#0E1C18] border border-[#173B31] px-4 py-2.5 text-xs text-[#94A3B8] flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] animate-ping" />
                  Thinking...
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick Suggestions Chips */}
          {msgs.length < 3 && !loading && (
            <div className="px-3 py-2 bg-[#0B1714] border-t border-[#173B31] flex flex-wrap gap-1.5">
              {SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => sendQuery(s)}
                  className="rounded-full bg-[#0E1C18] border border-[#173B31] px-2.5 py-1 text-[11px] text-[#94A3B8] hover:text-[#34D399] hover:border-[#10B981] transition"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input form */}
          <div className="border-t border-[#173B31] bg-[#0B1714] p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendQuery(input)}
              placeholder="Ask about projects, skills, education..."
              className="flex-1 rounded-full bg-[#0E1C18] border border-[#173B31] px-4 py-2 text-sm text-[#F8FAFC] placeholder-[#64748B] outline-none transition focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981]/30"
              disabled={loading}
            />
            <button
              onClick={() => sendQuery(input)}
              aria-label="Send message"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#10B981] text-white hover:bg-[#34D399] hover:scale-105 transition shadow-sm disabled:opacity-50"
              disabled={loading || !input.trim()}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
