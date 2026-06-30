# Changesets

This repo uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing to npm.

## How it works

1. When making changes, run `pnpm changeset` to describe what changed
2. Commit the generated markdown file
3. On push to `main`, the Changesets GitHub Action creates a "Version" PR
4. Merging the Version PR publishes to npm and creates a GitHub Release

## Adding a changeset

```bash
pnpm changeset
```

Choose the type of change (major/minor/patch) and write a summary. Commit the resulting file.
