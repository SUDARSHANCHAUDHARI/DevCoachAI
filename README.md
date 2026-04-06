# PlayCraft — Claude Code Plugin

Automate your Play Store publishing workflow. Built by an Android developer who has shipped 20+ apps.

## Install

```bash
/plugin install playcraft
```

## First-time setup

Run this once per project to save your developer details:

```
/playcraft:setup
```

This creates a `.claude-plugin-config.json` in your project (auto-added to `.gitignore`) that all other commands read automatically.

## Commands

| Command | What it does |
|---|---|
| `/playcraft:setup` | One-time config — saves your developer details |
| `/playcraft:store-listing` | Generate title, short description, and full description |
| `/playcraft:release-notes` | Write what's new copy for an update |
| `/playcraft:aso-audit` | Score and fix your ASO with keyword recommendations |
| `/playcraft:declarations` | Generate all required policy declarations checklist |
| `/playcraft:screenshots` | Write captions and alt text for screenshots |

## Agents

Invoked automatically by commands — you can also call them directly:

| Agent | What it does |
|---|---|
| `aso-agent` | Keyword research and density analysis |
| `listing-writer` | Specialist copywriter for titles and descriptions |
| `policy-checker` | Pre-submission policy compliance review |
| `locale-agent` | Localize listings for any supported locale |

## Skills (auto-loaded)

Knowledge injected automatically when relevant:

- `play-policy-2026` — 2025–2026 Play Store rules and character limits
- `closed-testing` — Closed testing requirements for new developer accounts
- `financial-declarations` — Financial features declaration walkthrough
- `ai-content-declarations` — AI-generated content declaration (2025 requirement)
- `developer-identity-th` — Identity verification for Thailand-based developers

## Requirements

- Claude Code installed
- No external tools or MCP servers required
- No API keys needed

## How it works

All commands read from `.claude-plugin-config.json` created by `/playcraft:setup`. No personal data is hardcoded in the plugin — it works for any Android developer worldwide.

## License

MIT — see [LICENSE](LICENSE)

## Author

[SUDARSHANCHAUDHARI](https://github.com/SUDARSHANCHAUDHARI)
