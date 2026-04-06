---
description: One-time setup — saves your developer details to .claude-plugin-config.json. Run this first before any other PlayCraft command.
argument-hint: (no arguments needed)
---

Run one-time setup for PlayCraft. Saves your developer config to .claude-plugin-config.json so all other commands work without asking for your details every time.

## Steps

1. Check if .claude-plugin-config.json already exists in the current project directory:
   - If yes: read the file, display current config, ask "Update config? (y/n)"
   - If no: proceed with fresh setup

2. Ask the user these questions one by one:

   **Developer info**
   - Your full name or developer display name: (e.g. Your Name)
   - Company / developer label shown on Play Store: (e.g. YourCompany)
   - Contact email for Play Console and privacy policy: (e.g. you@example.com)
   - GitHub username: (e.g. your-github-username)
   - Country: (e.g. Your Country)

   **Play Store config**
   - Default locale for listings: (default: en-US — press Enter to accept)
   - Other locales to support: (comma separated e.g. fr-FR, de-DE — press Enter to skip)

3. Write the following to .claude-plugin-config.json (substitute answers from above):

```json
{
  "developer": {
    "name": "[answer]",
    "company": "[answer]",
    "email": "[answer]",
    "github_username": "[answer]",
    "country": "[answer]"
  },
  "play_store": {
    "default_locale": "[answer or en-US]",
    "target_locales": ["[answer split by comma, trimmed]"]
  },
  "plugin_version": "1.0.0",
  "configured_at": "[today's date in YYYY-MM-DD format]"
}
```

4. Add .claude-plugin-config.json to .gitignore:
   - If .gitignore does not exist, create it with just the entry `.claude-plugin-config.json`
   - If .gitignore exists, check if the entry is already present — add it only if missing

5. Confirm setup is complete by printing:

```
PLAYCRAFT SETUP COMPLETE
─────────────────────────
Developer:  [name] ([company])
Email:      [email]
GitHub:     [github_username]
Country:    [country]
Locale:     [default_locale]

All PlayCraft commands will now use these settings.
Run /playcraft:setup again anytime to update.
```
