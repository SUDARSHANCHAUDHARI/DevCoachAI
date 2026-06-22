# DevCoachAI - Codex Context

## Project

- Path: `AIProjects/DevCoachAI`
- Type: Idea seed with scaffold docs
- Product: Local-first AI coding usage analyzer
- Primary users: individual developers, engineering teams, AI-first startups

## Direction

- Build CLI-first: parser -> analyzer -> Markdown report.
- Do not start with dashboard, database, charts, AI summaries, or team analytics.
- Keep the product local-only and read-only by default.
- Start with Claude and Codex logs before adding Copilot, VS Code, OpenCode, or Xcode.
- Treat repeated prompts as potential skills, commands, or workflow automation candidates.

## Safety

- Never commit raw private AI logs, transcripts, API keys, `.env*`, auth tokens, generated caches, or telemetry exports.
- Sample data must be synthetic or heavily sanitized.
- Be careful with anything that could feel like employee monitoring; position this as self-improvement and workflow analysis.
