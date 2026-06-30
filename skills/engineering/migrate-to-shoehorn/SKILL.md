---
name: migrate-to-shoehorn
description: Migrate test files from `as` type assertions to @total-typescript/shoehorn.
---

# Migrate to Shoehorn

Migrate test files from raw `as` type assertions to `@total-typescript/shoehorn` for type-safe partial data in tests.

## Why shoehorn

`as Type` assertions suppress type errors — they hide real bugs. `fromPartial()` from `@total-typescript/shoehorn` gives you actual type safety: if the shape doesn't match, it's a compile error, not a silent assertion.

## Install

```bash
npm i -D @total-typescript/shoehorn
```

## Migration patterns

### `as Type` → `fromPartial()`

```typescript
// Before
const user = { name: "Alice" } as User;

// After
import { fromPartial } from "@total-typescript/shoehorn";
const user = fromPartial<User>({ name: "Alice" });
```

### `as unknown as Type` → `fromAny()`

```typescript
// Before
const event = { type: "click" } as unknown as Event;

// After
import { fromAny } from "@total-typescript/shoehorn";
const event = fromAny<Event>({ type: "click" });
```

### Exact matches → `fromExact()`

When you need to ensure no extra properties exist:

```typescript
import { fromExact } from "@total-typescript/shoehorn";
const config = fromExact<Config>({ host: "localhost" });
```

## Workflow

1. Install `@total-typescript/shoehorn`
2. Find test files using `as Type` assertions
3. Replace each assertion with the appropriate shoehorn function
4. Run the type checker and tests
