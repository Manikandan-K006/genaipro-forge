import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminPage,
  head: () => ({
    meta: [{ title: "Analytics — Admin" }, { name: "robots", content: "noindex" }],
  }),
});

type EventRow = { id: number; occurred_at: string };
type Range = 7 | 30 | 90;

function AdminPage() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [events, setEvents] = useState<EventRow[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [range, setRange] = useState<Range>(30);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");

  async function loadAll() {
    const [{ data: rolesData }, { data: statsData }, { data: eventsData }] = await Promise.all([
      supabase.rpc("has_role", {
        _user_id: (await supabase.auth.getUser()).data.user?.id ?? "",
        _role: "admin",
      }),
      supabase.from("visitor_stats").select("count").eq("id", 1).maybeSingle(),
      supabase
        .from("visitor_events")
        .select("id, occurred_at")
        .order("occurred_at", { ascending: false })
        .limit(5000),
    ]);
    setIsAdmin(Boolean(rolesData));
    setTotal(statsData ? Number(statsData.count) : 0);
    setEvents(eventsData ?? []);
  }

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserEmail(data.user?.email ?? ""));
    loadAll();
  }, []);

  const chartData = useMemo(() => {
    if (!events) return [];
    const days = range;
    const buckets = new Map<string, number>();
    const now = new Date();
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      buckets.set(key, 0);
    }
    for (const e of events) {
      const key = e.occurred_at.slice(0, 10);
      if (buckets.has(key)) buckets.set(key, (buckets.get(key) ?? 0) + 1);
    }
    return Array.from(buckets.entries()).map(([date, visits]) => ({
      date: date.slice(5),
      visits,
    }));
  }, [events, range]);

  const rangeTotal = chartData.reduce((s, d) => s + d.visits, 0);
  const today = chartData.at(-1)?.visits ?? 0;
  const yesterday = chartData.at(-2)?.visits ?? 0;

  async function handleClaimAdmin() {
    setBusy(true);
    setMsg(null);
    const { data, error } = await supabase.rpc("claim_admin_if_none");
    if (error) setMsg(error.message);
    else if (data) {
      setMsg("Admin role granted.");
      await loadAll();
    } else setMsg("An admin already exists.");
    setBusy(false);
  }

  async function handleReset() {
    if (!confirm("Reset visitor counter to 0 and delete all events?")) return;
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.rpc("reset_visitor_stats");
    if (error) setMsg(error.message);
    else {
      setMsg("Counter reset.");
      await loadAll();
    }
    setBusy(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient">Visitor Analytics</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Signed in as <span className="font-mono">{userEmail}</span>
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="text-sm rounded-lg border border-border px-3 py-1.5 hover:bg-muted/30"
          >
            Sign out
          </button>
        </header>

        {isAdmin === false && (
          <div className="glass-strong neon-border rounded-2xl p-6 mb-6">
            <h2 className="font-semibold mb-2">Admin role required</h2>
            <p className="text-sm text-muted-foreground mb-4">
              You're signed in but not an admin. If no admin exists yet, you can claim it now.
            </p>
            <button
              onClick={handleClaimAdmin}
              disabled={busy}
              className="rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-2 text-white font-semibold disabled:opacity-50"
            >
              Claim admin
            </button>
            {msg && <p className="text-sm mt-3 text-muted-foreground">{msg}</p>}
          </div>
        )}

        {isAdmin && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Stat label="All-time visits" value={total ?? 0} />
              <Stat label={`Last ${range} days`} value={rangeTotal} />
              <Stat label="Today" value={today} />
              <Stat label="Yesterday" value={yesterday} />
            </div>

            <div className="glass-strong neon-border rounded-2xl p-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h2 className="text-lg font-semibold">Visits over time</h2>
                <div className="flex gap-2">
                  {[7, 30, 90].map((r) => (
                    <button
                      key={r}
                      onClick={() => setRange(r as Range)}
                      className={`px-3 py-1 rounded-md text-xs font-mono border ${
                        range === r
                          ? "border-neon-cyan text-neon-cyan"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {r}D
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.75 0.2 220)" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="oklch(0.75 0.2 220)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.3 0 0)" />
                    <XAxis dataKey="date" stroke="oklch(0.6 0 0)" fontSize={11} />
                    <YAxis stroke="oklch(0.6 0 0)" fontSize={11} allowDecimals={false} />
                    <Tooltip
                      contentStyle={{
                        background: "oklch(0.15 0 0)",
                        border: "1px solid oklch(0.3 0 0)",
                        borderRadius: 8,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="visits"
                      stroke="oklch(0.75 0.2 220)"
                      strokeWidth={2}
                      fill="url(#visitsFill)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-strong neon-border rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-2">Danger zone</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Resets the live counter to zero and permanently deletes all visitor events.
              </p>
              <button
                onClick={handleReset}
                disabled={busy}
                className="rounded-lg border border-red-500/60 text-red-400 hover:bg-red-500/10 px-4 py-2 font-semibold disabled:opacity-50"
              >
                Reset counter
              </button>
              {msg && <p className="text-sm mt-3 text-muted-foreground">{msg}</p>}
            </div>
          </>
        )}

        {isAdmin === null && <p className="text-muted-foreground">Loading…</p>}
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="glass-strong rounded-xl p-4 border border-border">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold tabular-nums text-gradient">
        {value.toLocaleString()}
      </div>
    </div>
  );
}
