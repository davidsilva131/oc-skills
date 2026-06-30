# Issue tracker integrations are limited to mainstream tools

`setup-matt-pocock-skills` only offers first-class support for **mainstream** issue trackers. Requests to add support for niche, new, or single-vendor experimental trackers are out of scope.

## Why this is out of scope

Every issue-tracker backend hard-codes a CLI shape into the skills (commands, flags, output parsing). Each new backend is permanent maintenance surface. The escape hatches for non-mainstream trackers already exist:

- `local markdown` for lightweight in-repo tracking.
- `other/custom` for users who want to wire something up themselves.
