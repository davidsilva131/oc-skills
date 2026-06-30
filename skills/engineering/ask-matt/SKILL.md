---
name: ask-matt
description: Ask which skill or flow fits your situation. A router over the user-invoked skills in this repo.
---

# Ask Matt

You don't remember every skill, so ask.

A **flow** is a path through the skills. Most paths run along one **main flow**, and two **on-ramps** merge onto it. Everything else is standalone.

## The main flow: idea to ship

The route most work travels. You have an idea and want it built.

1. **`/grill-with-docs`** — sharpen the idea by interview. Start here when you **have a codebase**: it's stateful, retaining what it learns in `CONTEXT.md` and ADRs. (No codebase? Use `/grill-me`.)
2. **Branch — can you settle every question in conversation?** If a question needs a runnable answer (state, business logic, a UI you have to see), detour through a prototype, bridged by **`/handoff`**:
   - **`/handoff`** out, then open a fresh session,
   - **`/prototype`** to answer the question with throwaway code,
   - **`/handoff`** back what you learned.
3. **Branch — is this a multi-session build?**
   - **Yes** → **`/to-prd`** → **`/to-issues`**. Start a fresh session per issue and kick off **`/implement`**.
   - **No** → **`/implement`** right here.

## On-ramps

- **Bugs and requests piling up** → **`/triage`**. It moves issues through triage roles and produces agent-ready issues.

## Codebase health

- **`/improve-codebase-architecture`** — run whenever you have a spare moment to keep the codebase good for agents.

## Crossing sessions

- **`/handoff`** — compacts the conversation into a markdown file. Open a new session and reference that file.

## Standalone

- **`/grill-me`** — same interview as `/grill-with-docs`, but for when you have **no codebase**.
