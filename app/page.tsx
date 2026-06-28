"use client";
import { useState } from "react";

const TOOLS = ["Claude Code", "Codex", "Copilot", "Cursor", "Aider", "Other"];
interface AntiPattern { name: string; count: number; fix: string; }
interface Skill { pattern: string; reason: string; }
interface Result { totalPrompts: number; severity: string; antiPatterns: AntiPattern[]; skillCandidates: Skill[]; contextHealth: string; productivity: string; nextSteps: string[]; summary: string; }
const SEV: Record<string, string> = { healthy: "text-emerald-400", noisy: "text-amber-400", wasteful: "text-red-400" };

export default function DevCoachAI() {
  const [logs, setLogs] = useState("");
  const [tool, setTool] = useState("Claude Code");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");

  async function run() {
    if (!logs.trim()) return;
    setLoading(true); setResult(null); setError("");
    try {
      const res = await fetch("/api/analyze", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ logs, tool }) });
      const data = await res.json();
      if (data.error) setError(data.error); else setResult(data);
    } catch { setError("Network error"); }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-lg">🧑‍🏫</div>
            <h1 className="text-2xl font-bold">DevCoachAI</h1>
          </div>
          <p className="text-zinc-400 text-sm">Paste an AI coding-session log — get usage stats, anti-patterns, reusable-skill candidates, and context-health notes. Local-first, read-only.</p>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 mb-6">
          <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-2 block">Session log *</label>
          <textarea value={logs} onChange={e => setLogs(e.target.value)} rows={8} placeholder="Paste your AI coding session prompts / transcript here…" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm font-mono focus:outline-none focus:border-sky-500 resize-none mb-4" />
          <div className="flex items-center gap-3 mb-4">
            <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Tool</label>
            <select value={tool} onChange={e => setTool(e.target.value)} className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-sky-500">{TOOLS.map(t => <option key={t}>{t}</option>)}</select>
          </div>
          <button onClick={run} disabled={loading || !logs.trim()} className="px-8 py-3 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-lg text-sm transition-colors">{loading ? "Analyzing…" : "🧑‍🏫 Analyze Session"}</button>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm mb-6">{error}</div>}
        {loading && <div className="flex items-center justify-center py-16"><div className="w-10 h-10 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" /></div>}

        {result && (
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="flex-1 bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-center"><div className="text-3xl font-black text-sky-400">{result.totalPrompts}</div><div className="text-xs text-zinc-500 mt-1">prompts</div></div>
              <div className="flex-1 bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-center"><div className={`text-2xl font-black ${SEV[result.severity] || "text-zinc-300"}`}>{result.severity}</div><div className="text-xs text-zinc-500 mt-1">session health</div></div>
            </div>
            <Section title="Anti-Patterns">{result.antiPatterns?.map((a, i) => <div key={i} className="bg-zinc-800/50 rounded-lg p-3"><div className="flex justify-between"><span className="text-sm font-semibold text-red-300">{a.name}</span><span className="text-xs text-zinc-500">×{a.count}</span></div><p className="text-xs text-zinc-400 mt-1">Fix: {a.fix}</p></div>)}</Section>
            <Section title="Reusable Skill Candidates">{result.skillCandidates?.map((s, i) => <div key={i} className="bg-zinc-800/50 rounded-lg p-3"><p className="text-sm font-semibold text-emerald-300">{s.pattern}</p><p className="text-xs text-zinc-400 mt-0.5">{s.reason}</p></div>)}</Section>
            <Section title="Context Health"><p className="text-sm text-zinc-300">{result.contextHealth}</p></Section>
            <Section title="Productivity"><p className="text-sm text-zinc-300">{result.productivity}</p></Section>
            <Section title="Next Steps">{result.nextSteps?.map((n, i) => <p key={i} className="text-sm text-zinc-300 flex gap-2"><span className="text-sky-400">→</span>{n}</p>)}</Section>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4"><p className="text-sm text-sky-300">{result.summary}</p></div>
          </div>
        )}
      </div>
    </div>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5"><h2 className="text-sm font-semibold text-white mb-3">{title}</h2><div className="flex flex-col gap-2">{children}</div></div>;
}
