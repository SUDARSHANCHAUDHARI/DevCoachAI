import Anthropic from "@anthropic-ai/sdk";
import { guard, safeError, extractText, safeJson } from "../../../lib/apiGuard";
import { NextRequest, NextResponse } from "next/server";
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
export async function POST(req: NextRequest) {
  const _guard = guard(req);
  if (_guard) return _guard;
  const { logs, tool } = await req.json();
  if (!logs?.trim()) return NextResponse.json({ error: "Session log required" }, { status: 400 });
  const prompt = `You are a developer-productivity coach analyzing an AI coding-assistant session log (read-only, local-first). Tool: ${tool || "unknown"}.
Session log:
${logs}
Return JSON: { "totalPrompts": number, "severity": "healthy|noisy|wasteful", "antiPatterns": [{ "name": "string", "count": number, "fix": "string" }], "skillCandidates": [{ "pattern": "string", "reason": "string" }], "contextHealth": "string", "productivity": "string", "nextSteps": ["string"], "summary": "string" }
Return ONLY valid JSON.`;
  try {
    const msg = await client.messages.create({ model: "claude-sonnet-4-6", max_tokens: 1800, messages: [{ role: "user", content: prompt }] });
    return NextResponse.json(safeJson(extractText(msg)));
  } catch (e) { return safeError(e); }
}
