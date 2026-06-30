# Model-invoked vs user-invoked

Every `SKILL.md` in this repo is a skill. The axis that splits them is **invocation** — who can reach it:

- **User-invoked** — reachable **only by the human typing its name**. The agent should not auto-invoke these. The `description` is **human-facing**: a one-line summary read by a person browsing available skills.
- **Model-invoked** — reachable by **model or user**. The `description` is **model-facing** and keeps rich trigger phrasing ("Use when the user wants…, mentions…, asks for…") so auto-invocation fires. The test for whether a skill should stay model-invoked: _could the model usefully reach for this autonomously?_

## Dependencies between them

A user-invoked skill may invoke model-invoked skills, but never another user-invoked skill.

## How opencode discovers skills

Skills are stored in `~/.config/opencode/skills/`. opencode auto-discovers them on session start — no plugin manifest needed. Each directory in that folder with a `SKILL.md` file is loaded as a skill. The `name` and `description` in the frontmatter are used for matching and invocation.
