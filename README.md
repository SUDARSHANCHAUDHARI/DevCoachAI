# DevCoachAI

Local-first analyzer for developer AI coding-assistant usage.

## Concept

DevCoachAI reads local AI coding session logs from tools like Claude, Codex, Copilot, and similar assistants, then produces usage stats, anti-pattern findings, reusable skill candidates, context-health notes, and Markdown reports.

## Goals

- Improve prompting quality.
- Identify repeated prompts that should become reusable skills or workflows.
- Reduce wasted AI interactions.
- Improve engineering workflow habits.
- Keep all analysis local and read-only.

## Non-Goals

- Code generation.
- Sending private logs to a cloud service.
- Monitoring employees.
- Replacing existing AI coding assistants.

## MVP

1. Define a common `Session` model.
2. Build a Claude log parser.
3. Generate a Markdown report.
4. Add 5-10 analysis rules.
5. Run against personal Claude/Codex history.
6. Add VS Code UI only after the CLI report is useful.

## Example CLI

```bash
devcoach analyze ~/logs/claude
```

## Example Report Questions

- How much am I using AI?
- What am I repeatedly asking AI to do?
- What skills or workflows should be automated?
- Where am I losing time because of vague prompts, missing context, retry loops, or no verification?

## Status

Idea seed created from ChatGPT shared conversation:
https://chatgpt.com/share/6a38eadd-2014-83ec-a394-b7dba731fc2e
