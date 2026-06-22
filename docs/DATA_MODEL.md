# Data Model

## Entities

### Session

A single AI assistant conversation or run.

Fields:

- `id`
- `source`
- `startedAt`
- `endedAt`
- `workspace`
- `model`
- `prompts`
- `responses`
- `toolCalls`
- `findings`

### Prompt

A user message sent to an AI assistant.

Fields:

- `id`
- `sessionId`
- `text`
- `timestamp`
- `tokenEstimate`
- `tags`

### Response

An assistant response.

Fields:

- `id`
- `sessionId`
- `text`
- `timestamp`
- `tokenEstimate`
- `hasCode`
- `hasPlan`

### ToolCall

An assistant tool action.

Fields:

- `id`
- `sessionId`
- `toolName`
- `argumentsSummary`
- `status`
- `timestamp`

### Workspace

The project or repo associated with a session.

Fields:

- `path`
- `name`
- `repoRemote`
- `languageHints`

### Finding

A detected pattern or issue.

Fields:

- `id`
- `ruleId`
- `severity`
- `title`
- `description`
- `sessionIds`
- `recommendation`

### SkillCandidate

A repeated prompt or workflow that could become a reusable skill.

Fields:

- `id`
- `title`
- `triggerExamples`
- `frequency`
- `suggestedSkillName`
- `automationValue`

### Recommendation

An actionable improvement.

Fields:

- `id`
- `category`
- `title`
- `description`
- `nextAction`
