# Idea: DevCoachAI

## One-Liner

DevCoachAI analyzes local AI coding-assistant sessions and shows usage patterns, weak prompts, repeated workflows, and skill automation opportunities.

## Why It Exists

Developers now spend meaningful time collaborating with AI agents, but most people cannot answer basic questions about their own usage: how often they use AI, which prompts repeat, where conversations go in circles, and which workflows should become reusable skills.

## Core Workflow

```text
Local AI Logs
  -> Common Session Model
  -> Parser
  -> Rule Analyzers
  -> Usage Statistics
  -> Anti-Pattern Findings
  -> Skill Candidates
  -> Markdown Report
```

## MVP Scope

- Parse Claude logs first.
- Parse Codex logs second.
- Generate top 10 usage statistics.
- Detect repeated prompts.
- Detect vague prompts, retry loops, missing context, and no-test patterns.
- Suggest reusable skill candidates.
- Export Markdown and JSON reports.

## Differentiation

- Local-first and privacy-conscious.
- Focuses on personal workflow improvement, not surveillance.
- Turns AI usage history into practical automation ideas.
- Strong dogfooding fit for Sudarshan's Codex and AIProjects workflow.

## Open Questions

- Where are Claude, Codex, and Copilot logs stored on this Mac?
- Should the first usable version be a CLI, VS Code extension, or Codex skill?
- Should reports be per project, per week, or across all AI usage?
