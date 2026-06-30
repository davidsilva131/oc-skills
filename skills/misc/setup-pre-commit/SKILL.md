---
name: setup-pre-commit
description: Set up Husky pre-commit hooks with lint-staged, Prettier, type checking, and tests.
---

# Setup Pre-commit

Set up Husky pre-commit hooks with lint-staged, Prettier, type checking, and tests.

## Steps

1. Detect package manager (npm, pnpm, yarn)
2. Install dependencies: `husky`, `lint-staged`, `prettier`
3. Initialize Husky: `npx husky init`
4. Create `.husky/pre-commit`:

```bash
npx lint-staged
npm run typecheck
npm test
```

5. Create `.lintstagedrc`:

```json
{
  "*.{js,ts,tsx,json,md}": ["prettier --write"]
}
```

6. Create `.prettierrc` (if missing)
7. Verify the hooks work
8. Commit the configuration
