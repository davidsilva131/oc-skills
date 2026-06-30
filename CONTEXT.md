# oc-skills

A collection of skills for [opencode](https://opencode.ai) — engineering best practices, always available across all projects. Based on [mattpocock/skills](https://github.com/mattpocock/skills) and adapted for opencode.

## Language

**Skill**:
A reusable piece of discipline — a markdown file with frontmatter (`name`, `description`) that opencode loads from `~/.config/opencode/skills/`. Every skill has a `SKILL.md` as its entry point.
_Avoid_: plugin, extension, agent

**Bucket**:
A category directory under `skills/` that groups related skills (e.g. `engineering/`, `productivity/`).
_Avoid_: folder, category, namespace

**Frontmatter**:
YAML metadata at the top of `SKILL.md` — `name` (required) and `description` (required).

**User-invoked**:
A skill reachable only when the user explicitly types its name in a prompt.

**Model-invoked**:
A skill the model can reach for automatically when the task matches its description.

**Installer**:
The `bin/install.js` script that copies skills from this repo to `~/.config/opencode/skills/` for auto-discovery by opencode.
_Avoid_: linker, deployer

## Relationships

- A **Skill** lives inside a **Bucket**
- An **Installer** copies **Skills** from this repo to opencode's global skill directory

## File structure

```
/
├── skills/
│   ├── engineering/    — code skills (codebase-design, tdd, triage, etc.)
│   ├── productivity/   — general workflow (grill-me, handoff, etc.)
│   ├── design/         — design skills (claude-design, popular-web-designs)
│   ├── misc/           — rarely used tools
│   ├── personal/       — personal workflow skills
│   └── in-progress/    — drafts not yet ready to ship
├── bin/install.js      — installer script
├── docs/               — reference docs
├── scripts/            — dev utility scripts
├── .changeset/         — changeset config for versioning
└── .out-of-scope/      — rejected feature decisions
```
