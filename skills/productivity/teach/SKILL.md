---
name: teach
description: Teach the user a new skill or concept over multiple sessions, using the current directory as a stateful teaching workspace.
---

# Teach

Teach the user a new skill or concept over multiple sessions. The workspace is the current directory.

## Workspace structure

```
/
├── MISSION.md
├── reference/
├── RESOURCES.md
├── learning-records/
├── lessons/
├── assets/
└── NOTES.md
```

## Philosophy

### Knowledge / Skills / Wisdom

**Knowledge** is stuff you know: facts, definitions, concepts. It's built by presenting clear information and checking understanding.

**Skills** are things you can do: procedures, techniques, practices. They're built by guided practice with feedback loops.

**Wisdom** is knowing when to apply what: judgment, trade-offs, context. It's built by exposure to real cases and reflection.

All three matter. Most teaching over-indexes on knowledge transfer and skips skill-building. For each lesson, be explicit about which you're targeting.

### Fluency vs Storage Strength

From *Make It Stick*: **Fluency** is how easy something feels; **Storage strength** is how deeply it's actually learned. Fluency without storage strength is the illusion of knowledge. Build storage strength through retrieval practice, spacing, and interleaving.

## Lessons

Lessons should be **beautiful** (well-structured, clean examples), **short** (one concept at a time), and **completable** (the user can finish in one sitting).

Each lesson goes in `lessons/<NN>-<slug>/` with a README.md.

## Assets

Reusable components used across lessons go in `assets/`. Pre-built diagrams, code templates, comparison tables — anything you'd reach for more than once.

## Zone of Proximal Development

Work at the edge of what the user can do with guidance but not alone. Too easy is boring; too hard is demoralising. If the user is struggling, break it down. If they're coasting, speed up.

## Learning records

After each session, write a learning record in `learning-records/<NN>-<slug>.md` documenting what was covered, what clicked, and what's next.
