# @davidsilva131/oc-skills

Skills for [opencode](https://opencode.ai) — engineering best practices, always available across all your projects.

Based on [mattpocock/skills](https://github.com/mattpocock/skills) and adapted for opencode.

## Install

```bash
pnpm dlx @davidsilva131/oc-skills
```

OpenCode auto-discovers skills from `~/.config/opencode/skills/` — no per-project setup needed.

## Update

Re-run the same command to update to the latest version:

```bash
pnpm dlx @davidsilva131/oc-skills
```

## Skills

### Engineering (code skills)

| Skill | Type | Description |
|---|---|---|
| [codebase-design](./skills/engineering/codebase-design/SKILL.md) | model | Vocabulary for designing deep modules |
| [diagnosing-bugs](./skills/engineering/diagnosing-bugs/SKILL.md) | model | Diagnose hard bugs and perf regressions |
| [domain-modeling](./skills/engineering/domain-modeling/SKILL.md) | model | Build and sharpen a domain model |
| [prototype](./skills/engineering/prototype/SKILL.md) | model | Throwaway prototypes for design questions |
| [resolving-merge-conflicts](./skills/engineering/resolving-merge-conflicts/SKILL.md) | model | Resolve git merge/rebase conflicts |
| [review](./skills/engineering/review/SKILL.md) | model | Review changes (Standards + Spec) |
| [tdd](./skills/engineering/tdd/SKILL.md) | model | Test-driven development |
| [accessibility](./skills/engineering/accessibility/SKILL.md) | model | Audit and improve web accessibility |
| [seo](./skills/engineering/seo/SKILL.md) | model | Search engine optimization |
| [typescript-advanced-types](./skills/engineering/typescript-advanced-types/SKILL.md) | model | Advanced TypeScript type system |
| [migrate-to-shoehorn](./skills/engineering/migrate-to-shoehorn/SKILL.md) | model | Migrate to @total-typescript/shoehorn |
| [scaffold-exercises](./skills/engineering/scaffold-exercises/SKILL.md) | model | Create exercise directory structures |
| [ask-matt](./skills/engineering/ask-matt/SKILL.md) | user | Router over available skills |
| [grill-with-docs](./skills/engineering/grill-with-docs/SKILL.md) | user | Grilling + domain docs |
| [implement](./skills/engineering/implement/SKILL.md) | user | Implement from PRD/issues |
| [improve-codebase-architecture](./skills/engineering/improve-codebase-architecture/SKILL.md) | user | Scan for deepening opportunities |
| [setup-matt-pocock-skills](./skills/engineering/setup-matt-pocock-skills/SKILL.md) | user | Configure repo for engineering skills |
| [to-issues](./skills/engineering/to-issues/SKILL.md) | user | Break plans into issues |
| [to-prd](./skills/engineering/to-prd/SKILL.md) | user | Turn conversation into PRD |
| [triage](./skills/engineering/triage/SKILL.md) | user | Move issues through triage |

### Productivity (general workflow)

| Skill | Type | Description |
|---|---|---|
| [grilling](./skills/productivity/grilling/SKILL.md) | model | Interview user about a plan |
| [grill-me](./skills/productivity/grill-me/SKILL.md) | user | Sharpen a plan by interview |
| [handoff](./skills/productivity/handoff/SKILL.md) | user | Compact conversation for next agent |
| [teach](./skills/productivity/teach/SKILL.md) | user | Teach skills over multiple sessions |
| [writing-great-skills](./skills/productivity/writing-great-skills/SKILL.md) | user | Reference for writing skills |

### Design

| Skill | Type | Description |
|---|---|---|
| [claude-design](./skills/design/claude-design/SKILL.md) | model | Design one-off HTML artifacts |
| [popular-web-designs](./skills/design/popular-web-designs/SKILL.md) | model | 54 real design systems as HTML/CSS |

### Misc

| Skill | Type | Description |
|---|---|---|
| [setup-pre-commit](./skills/misc/setup-pre-commit/SKILL.md) | model | Set up Husky pre-commit hooks |

### In Progress

| Skill | Type | Description |
|---|---|---|
| [decision-mapping](./skills/in-progress/decision-mapping/SKILL.md) | user | Turn ideas into investigation tickets |
| [loop-me](./skills/in-progress/loop-me/SKILL.md) | user | Grill yourself into workflow specs |
| [wizard](./skills/in-progress/wizard/SKILL.md) | user | Interactive bash wizard generator |
| [writing-beats](./skills/in-progress/writing-beats/SKILL.md) | user | Shape article as beat journey |
| [writing-fragments](./skills/in-progress/writing-fragments/SKILL.md) | user | Mine raw writing fragments |
| [writing-shape](./skills/in-progress/writing-shape/SKILL.md) | user | Shape fragments into article |

## Dry run

Preview what would be installed without making changes:

```bash
pnpm dlx @davidsilva131/oc-skills --dry-run
```

## Security

- Zero external dependencies (pure Node.js stdlib)
- No `eval()` or dynamic `require()`
- Path traversal protection on all file operations
- MIT license
