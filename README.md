# DevCoachAI

Local-first analyzer for developer AI coding-assistant usage.

## Table of Contents

- [Concept](#concept)
- [Goals](#goals)
- [Non-Goals](#non-goals)
- [MVP](#mvp)
- [Example CLI](#example-cli)
- [Example Report Questions](#example-report-questions)
- [Status](#status)
- [About](#about)

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

---

## About

I'm Sudarshan Chaudhari, a Senior Quality Engineer, Test Automation specialist, and AI systems builder based in Bangkok, Thailand.

I have 13+ years of experience in software quality engineering, working across SaaS, fintech, gaming, web, mobile, cloud, and digital signage platforms. My background combines hands-on test automation with QA leadership, test strategy, CI/CD, release quality, production investigation, and cross-platform validation.

Alongside my professional QA career, I run [SudarshanTechLabs](https://sudarshantechlabs.com/), my independent engineering and product lab where I design, build, test, and ship software across Android, web, AI, cybersecurity, developer tooling, and cross-platform applications.

### What I work on

- ⚙️ **Quality Engineering & Test Automation** — Playwright, Selenium, Cypress, Appium, API testing, automation frameworks, end-to-end testing, CI/CD, release gates, GitHub Actions, risk-based testing, and production validation
- 🤖 **AI Systems & Automation** — AI agents, multi-agent orchestration, MCP servers, AI-assisted QA, prompt tooling, developer workflows, automation systems, and Claude Code plugins
- 📱 **Mobile & Cross-Platform Applications** — Android applications built with Kotlin and Jetpack Compose, Google Play releases, automated build and publishing pipelines, and cross-platform development spanning iOS, web, Windows, and macOS
- 🌐 **Web Applications & Platforms** — Full-stack applications using Next.js, TypeScript, Firebase, Cloudflare, REST APIs, and modern web infrastructure
- 🛠️ **Developer Tooling & CLI Engineering** — Rust, Python, TypeScript, CLI utilities, multi-repository tooling, build automation, release tooling, and engineering productivity systems
- 🛡️ **Cybersecurity & Observability** — Threat detection, log analysis, security auditing, vulnerability assessment, monitoring, and security-focused developer tools
- 📺 **Digital Signage & Device Platforms** — Content validation, playback testing, device compatibility, production investigation, monitoring, and QA across diverse hardware and operating-system environments

My work sits at the intersection of quality engineering, automation, AI, and software development. I approach products with a QA mindset from the beginning: understanding failure modes, designing for testability, automating repetitive work, and building release confidence into the engineering process.

Through SudarshanTechLabs, I also build products and tools from idea to production, covering architecture, development, testing, CI/CD, release automation, monitoring, and ongoing maintenance.

🌐 [sudarshantechlabs.com](https://sudarshantechlabs.com/) · 💼 [LinkedIn](https://linkedin.com/in/sudarshan-chaudhari) · 🐙 [GitHub](https://github.com/SUDARSHANCHAUDHARI) · ✉️ [sunny.sudarshan@gmail.com](mailto:sunny.sudarshan@gmail.com)
