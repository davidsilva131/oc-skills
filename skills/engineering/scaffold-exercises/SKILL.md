---
name: scaffold-exercises
description: Create exercise directory structures with sections, problems, solutions, and explainers.
---

# Scaffold Exercises

Create structured exercise directories for teaching or workshop content.

## Directory naming

Sections: `XX-section-name/`
Exercises: `XX.YY-exercise-name/`

## Exercise variants

Each exercise can have:
- `problem/` — the exercise prompt and starter code
- `solution/` — the completed solution
- `explainer/` — explanation of the solution

## Required files

Each exercise must have:
- `readme.md` — instructions for the exercise
- `main.ts` — starter or solution code

## Workflow

1. Parse the plan into sections and exercises
2. Create directories
3. Create stub readmes
4. Run lint to fix errors
5. Present to user for review

## Moving/renaming

Use `git mv` to rename numbered directories — this preserves git history through renames.
