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

## What's included

**29 skills** across three categories:

### Always-on (auto-invoked when relevant)
accessibility, next-best-practices, react-hook-form, seo, shadcn, supabase, supabase-postgres-best-practices, tailwind-v4-shadcn, typescript-advanced-types, vercel-composition-patterns, vercel-react-best-practices, zod

### On-demand (triggered via commands or skills)
codebase-design, diagnosing-bugs, domain-modeling, grill-me, grill-with-docs, handoff, implement, improve-codebase-architecture, prototype, review, setup-matt-pocock-skills, tdd, to-issues, to-prd, triage

### Design
claude-design, popular-web-designs

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
