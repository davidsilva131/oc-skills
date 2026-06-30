# Glossary

## Invocation

**Model-Invoked**:
A skill the model can reach for autonomously when the task matches its description. The default invocation mode.
_Avoid_: auto-invoked, automatic, implicit

**User-Invoked**:
A skill only reachable by the human typing its name. Set `disable-model-invocation: true` in frontmatter.
_Avoid_: slash command, manual

**Description**:
The frontmatter `description` field. For model-invoked skills, it's model-facing with trigger phrases. For user-invoked skills, it's a human-facing summary.

**Granularity**:
How focused a skill is. A granular skill does one thing well; a coarse skill tries to do too much.

## Information Hierarchy

**Steps**:
The numbered or sequential procedure the skill executes.

**Reference**:
Supporting detail needed during execution — formats, templates, checklists.

**External Reference**:
Content linked from the skill rather than included inline. Used for deep dives or shared material.

**Progressive Disclosure**:
Reveal detail only when needed. Steps first, then reference, then external links.

## Steering

**Branch**:
A decision point where the skill takes different paths based on user input or codebase state.

**Leading Word**:
A header that signals what follows — "Example", "Tip", "Anti-pattern", "Why".

**Completion Criterion**:
A concrete condition that signals a phase is done.

## Pruning

**Single Source of Truth**:
Each piece of knowledge lives in exactly one place.

**Duplication**:
The same knowledge appearing in multiple places — creates drift.

**Sediment**:
Outdated or superseded content that accumulates over time.

**No-Op**:
A step that doesn't change behaviour — remove it.
