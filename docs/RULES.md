# Analysis Rules

Rules should be small, explainable, and local-first.

## Anti-Patterns

- Vague prompt.
- Retry loop.
- Missing context.
- No tests or verification.
- Overlong conversation without checkpoint.

## Skill Candidates

- Repeated prompt.
- Repeated workflow.
- Repeated file or repo pattern.
- Repeated support or writing task.

## Scoring

- Productivity score.
- Context health score.
- Automation opportunity score.

## Rule Format

Rules should be portable YAML files so new detectors can be added without changing core parser code.
