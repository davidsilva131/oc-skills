---
name: wizard
description: Generate an interactive bash wizard that walks a human through a manual procedure.
---

# Wizard

Generate an interactive bash wizard that walks a human through a manual procedure — opening URLs, capturing values, writing `.env` and secrets.

## Process

1. **Scope the procedure**: read `.env`, `.env.example`, README, docker-compose, workflows
2. **Map each stage's journey**: precise path — URL → what to do → which value to capture
3. **Author the wizard**: copy template, replace stages
4. **Verify and hand off**

## Template

The wizard is a bash script with stages. Each stage:
- Prints instructions
- Opens a URL if needed
- Prompts for captured values
- Validates input
- Proceeds to the next stage
