import { useEffect, useState } from "react";
import { Eye, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const SESSION_KEY = "mk_portfolio_visit_counted";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [bumped, setBumped] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      // Fetch current count
      const { data } = await supabase
        .from("visitor_stats")
        .select("count")
        .eq("id", 1)
        .maybeSingle();
      if (!cancelled && data) setCount(Number(data.count));

      // Increment once per browser session
      if (typeof window !== "undefined" && !sessionStorage.getItem(SESSION_KEY)) {
        const { data: newCount, error } = await supabase.rpc("increment_visitor");
        if (!error && newCount != null) {
          sessionStorage.setItem(SESSION_KEY, "1");
          if (!cancelled) setCount(Number(newCount));
        }
      }
    }
    init();

    // Realtime subscription
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
        },
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40 group">
      <div
        className={`glass-strong neon-border flex items-center gap-3 rounded-full px-4 py-2.5 transition-all ${
          bumped ? "scale-110 shadow-[0_0_30px_var(--neon-cyan)]" : ""
        }`}
      >
        <div className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple">
          <Eye className="h-4 w-4 text-white" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon-cyan" />
          </span>
        </div>
        <div className="leading-tight">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1">
            <Users className="h-3 w-3" /> Live visitors
          </div>
          <div className="font-mono text-sm font-semibold tabular-nums text-gradient">
            {count === null ? "···" : count.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
