---
name: writing-great-skills
description: Reference for writing and editing skills well: the vocabulary and principles that make a skill predictable.
---

# Writing Great Skills

A skill is a reusable piece of discipline. This reference documents the vocabulary and principles for writing skills that are predictable, composable, and easy to maintain.

## Invocation

Skills are either **model-invoked** (the model can reach for them automatically when the task fits) or **user-invoked** (only reachable by the human typing the name).

**Model-invoked** skills have a rich `description` in their frontmatter with trigger phrases so the model knows when to use them. Omit `disable-model-invocation`.

**User-invoked** skills are routers or entry points. They invoke model-invoked skills but never other user-invoked ones.

## Writing the description

For model-invoked skills, the description is **model-facing** — it tells the model when to reach for this skill. Use trigger phrases: "Use when the user wants…", "mentions…", "asks for…".

For user-invoked skills, the description is **human-facing** — a one-line summary of what the skill does.

## Information hierarchy

- **Steps** — the core procedure. Numbered or sequential.
- **In-skill reference** — details needed during execution (formats, templates, checklists).
- **External reference** — linked files for deeper dives.

## When to split a skill

Split when:
- **By invocation**: if some steps should be model-invoked and others user-invoked
- **By sequence**: if the skill has two independent phases that could be composed differently

## Pruning

Keep skills lean:
- **Single source of truth** — one place for each piece of knowledge
- **Relevance** — if a skill doesn't need it, delete it
- **No-ops** — if a step doesn't change behaviour, remove it
