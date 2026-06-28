import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
export async function POST(req: NextRequest) {
  const { logs, tool } = await req.json();
  if (!logs?.trim()) return NextResponse.json({ error: "Session log required" }, { status: 400 });
  const prompt = `You are a developer-productivity coach analyzing an AI coding-assistant session log (read-only, local-first). Tool: ${tool || "unknown"}.
Session log:
${logs}
Return JSON: { "totalPrompts": number, "severity": "healthy|noisy|wasteful", "antiPatterns": [{ "name": "string", "count": number, "fix": "string" }], "skillCandidates": [{ "pattern": "string", "reason": "string" }], "contextHealth": "string", "productivity": "string", "nextSteps": ["string"], "summary": "string" }
Return ONLY valid JSON.`;
  try {
    const msg = await client.messages.create({ model: "claude-sonnet-4-6", max_tokens: 1800, messages: [{ role: "user", content: prompt }] });
    return NextResponse.json(JSON.parse((msg.content[0] as { type: string; text: string }).text));
  } catch (e) { return NextResponse.json({ error: String(e) }, { status: 500 }); }
}
