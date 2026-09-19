import { useEffect, useMemo, useState } from "react";
import { Eye, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "mk_portfolio_visit_counted";

type TrendRow = { day: string; visits: number };

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [bumped, setBumped] = useState(false);
  const [trend, setTrend] = useState<TrendRow[]>([]);
  const [open, setOpen] = useState(false);

  async function loadTrend() {
    const { data } = await supabase.rpc("get_visitor_trend", { _days: 7 });
    if (data) {
      setTrend(
        (data as Array<{ day: string; visits: number }>).map((r) => ({
          day: r.day,
          visits: Number(r.visits),
        })),
      );
    }
  }

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const { data } = await supabase
        .from("visitor_stats")
        .select("count")
        .eq("id", 1)
        .maybeSingle();
      if (!cancelled && data) setCount(Number(data.count));

      if (typeof window !== "undefined" && !sessionStorage.getItem(SESSION_KEY)) {
        const { data: newCount, error } = await supabase.rpc("increment_visitor");
        if (!error && newCount != null) {
          sessionStorage.setItem(SESSION_KEY, "1");
          if (!cancelled) setCount(Number(newCount));
        }
      }
      await loadTrend();
    }
    init();

    const channel = supabase
      .channel("visitor_stats_live")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "visitor_stats" },
        (payload) => {
          const next = (payload.new as { count: number }).count;
          setCount(Number(next));
          setBumped(true);
          setTimeout(() => setBumped(false), 700);
          loadTrend();
        },
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  const today = trend.at(-1)?.visits ?? 0;
  const week = useMemo(() => trend.reduce((s, r) => s + r.visits, 0), [trend]);

  const max = Math.max(1, ...trend.map((r) => r.visits));
  const bars = trend.length ? trend : Array.from({ length: 7 }, () => ({ day: "", visits: 0 }));

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Toggle visitor stats"
        className={`flex items-center gap-3 rounded-full bg-[#07120F] border border-[#10B981] px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#34D399] ${
          bumped ? "scale-110 shadow-[0_0_30px_rgba(16,185,129,0.5)]" : ""
        }`}
      >
        <div className="relative grid h-8 w-8 place-items-center rounded-full bg-[#0B1714] border border-[#173B31]">
          <Eye className="h-4 w-4 text-[#10B981]" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#34D399]" />
          </span>
        </div>
        <div className="leading-tight text-left">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] flex items-center gap-1">
            <Users className="h-3 w-3 text-[#34D399]" /> Live visitors
          </div>
          <div className="font-mono text-sm font-semibold tabular-nums text-[#34D399]">
            {count === null ? "···" : count.toLocaleString()}
          </div>
        </div>
      </button>

      {open && (
        <div className="mt-2 w-64 rounded-2xl border border-[#173B31] bg-[#07120F] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-2 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="rounded-lg border border-[#173B31] bg-[#0B1714] px-3 py-2">
              <div className="font-mono text-[9px] uppercase tracking-widest text-[#64748B]">
                Today
              </div>
              <div className="font-mono text-lg font-semibold tabular-nums text-[#34D399]">
                {today.toLocaleString()}
              </div>
            </div>
            <div className="rounded-lg border border-[#173B31] bg-[#0B1714] px-3 py-2">
              <div className="font-mono text-[9px] uppercase tracking-widest text-[#64748B]">
                7-day
              </div>
              <div className="font-mono text-lg font-semibold tabular-nums text-[#34D399]">
                {week.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="font-mono text-[9px] uppercase tracking-widest text-[#64748B] mb-1.5">
            Last 7 days
          </div>
          <svg viewBox="0 0 140 44" className="w-full h-12" preserveAspectRatio="none">
            <defs>
              <linearGradient id="vcBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>
            {bars.map((b, i) => {
              const h = (b.visits / max) * 38;
              const x = i * (140 / bars.length) + 2;
              const w = 140 / bars.length - 4;
              return (
                <rect
                  key={i}
                  x={x}
                  y={44 - Math.max(h, 2)}
                  width={w}
                  height={Math.max(h, 2)}
                  rx={2}
                  fill="url(#vcBar)"
                  opacity={b.visits === 0 ? 0.25 : 1}
                >
                  <title>{`${b.day}: ${b.visits} visits`}</title>
                </rect>
              );
            })}
          </svg>
          <div className="flex justify-between font-mono text-[9px] text-[#64748B] mt-1">
            {bars.map((b, i) => (
              <span key={i}>
                {b.day
                  ? new Date(b.day).toLocaleDateString(undefined, { weekday: "narrow" })
                  : ""}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

